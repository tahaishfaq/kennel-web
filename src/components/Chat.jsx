import React, { useState, useEffect, useRef } from "react";
import { IoSend, IoAdd, IoClose } from "react-icons/io5";
import image from "../assets/Monogram.png";
import { db } from "../firebaseConfig";
import {
  doc,
  collection,
  query,
  onSnapshot,
  orderBy,
  addDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "sonner";

const Chat = ({ closeChat }) => {
  const { hashId } = useParams();
  const [hashData, setHashData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [userID, setUserID] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [openfileUpload, setOpenFileUpload] = useState(false);
  const [file, setFile] = useState("");
  const [uploading, setUploading] = useState(false);
  const toScroll = useRef(null);

  // Firebase references
  const parentDocRef = doc(db, "AdoptionOrders", `${hashData?.name}`);
  const subcollectionRef = collection(parentDocRef, "Message");

  // Fetching ticket and user data
  useEffect(() => {
    try {
      axios
        .get(`${window.$BackEndURL}/api/method/get-ticket?hash=${hashId}`)
        .then((res) => {
          setHashData(res?.data?.data);
          setUserID(res?.data?.data?.customer?.name);
        });
    } catch (error) {
      console.log(error);
    }
  }, [hashId]);

  // Fetching messages from Firebase
  useEffect(() => {
    if (hashData?.name) {
      const q = query(
        collection(db, `AdoptionOrders/${hashData?.name}/Message`),
        orderBy("dateTime")
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
          messages.push({ id: doc.id, ...doc.data() });
        });
        setMessages(messages);
      });
      return () => unsubscribe();
    }
  }, [hashData]);

  const scrollToBottom = () => {
    toScroll.current?.scrollTo({
      top: toScroll.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Sending a message
  const handleSendMessage = async () => {
    if (newMessage.trim() === "") {
      toast.error("Enter valid message!");
      return;
    }
    try {
      await addDoc(subcollectionRef, {
        id: userID,
        content: newMessage,
        dateTime: serverTimestamp(),
        is_file: false,
      });
      setNewMessage("");
      scrollToBottom();
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Handling file upload
  const handleUploadFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true); // Start uploading state
    setOpenFileUpload(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Add placeholder message to Firestore to show loading in chat
      const tempMessageRef = await addDoc(subcollectionRef, {
        id: userID,
        content: "Uploading...",
        dateTime: serverTimestamp(),
        is_file: true,
        file_url: null,
      });

      // Upload the file
      const response = await axios.post(
        `${window.$BackEndURL}/api/method/upload_file`,
        formData
      );

      // Update the placeholder message with the actual file URL
      await updateDoc(tempMessageRef, {
        content: response?.data?.message?.file_url,
        loading: false, // Remove loading state
      });

      setFile("");
      setOpenFileUpload(false);
      setUploading(false); // Stop uploading state
      scrollToBottom();
    } catch (e) {
      console.log(e);
      setUploading(false);
    }
  };

  // Sending uploaded file as a message
  const handleSendFile = async () => {
    if (!file) return;
    try {
      await handleUploadFile(); // Handles the file upload
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed lg:bottom-4 lg:right-4 bottom-0 w-[430px] h-[684px] bg-white rounded-lg shadow-lg p-4 z-50 flex flex-col">
      <Toaster richColors={true} />
      <div className="flex items-center justify-between mb-2 border-b pb-2">
        <div className="flex items-center space-x-2">
          <img src={image} alt="Seller" className="w-10 h-10 rounded-full" />
          <span className="font-semibold text-lg">Seller Name</span>
        </div>
        <button onClick={closeChat} className="text-gray-500">
          <IoClose size={20} />
        </button>
      </div>

      <div className="flex-grow overflow-y-auto mb-2" ref={toScroll}>
        {messages?.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.id === userID ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`font-semibold ${
                message.id === userID ? "text-blue-800" : "text-gray-800"
              }`}
            >
              {message.id === userID ? "You" : "Seller"}
            </div>
            <div
              className={`mt-1 p-2 rounded-lg flex items-end justify-end ${
                message.id === userID
                  ? "bg-blue-200 text-blue-800"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {!message.is_file ? (
                <span>{message.content}</span>
              ) : (
                <div className="max-w-xs ">
                  <img
                    src={
                      message.content === "Uploading..."
                        ? image // Placeholder image while uploading
                        : window.$BackEndURL + message.content
                    }
                    className="w-full object-cover object-center rounded-md"
                    alt="Uploaded file"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center border-t pt-2 space-x-2">
        <div className="relative flex-grow">
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Type something here..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <label className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer">
            <IoAdd size={20} />
            <input type="file" onChange={handleUploadFile} className="hidden" />
          </label>
        </div>

        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          <IoSend size={20} />
        </button>
      </div>

      {openfileUpload && uploading && (
        <div className="absolute bottom-2 left-2">
          <button className="bg-gray-400 text-white p-2 rounded-md">
            Uploading...
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;
