// import React, { useState, useEffect, useRef } from "react";
// import { IoSend, IoAdd, IoClose } from "react-icons/io5";
// import image from "../assets/Monogram.png";
// import { db } from "../firebaseConfig";
// import {
//   doc,
//   collection,
//   query,
//   onSnapshot,
//   where,
//   orderBy,
//   getDocs,
//   setDoc,
//   addDoc,
//   serverTimestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { toast, Toaster } from "sonner";
// import { IoIosAddCircleOutline } from "react-icons/io";

// const Chat = ({ closeChat, businessProfile }) => {
//   const { hashId } = useParams();
//   const [hashData, setHashData] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [userID, setUserID] = useState("");
//   const [newMessage, setNewMessage] = useState("");
//   const [openfileUpload, setOpenFileUpload] = useState(false);
//   const [file, setFile] = useState("");
//   const [uploading, setUploading] = useState(false);
//   const toScroll = useRef(null);

//   // Firebase references
//   const parentDocRef = doc(db, "AdoptionOrders", `${hashData?.name}`);
//   const subcollectionRef = collection(parentDocRef, "Message");

//   console.log("hashData", hashData)

//   // Fetching ticket and user data
//   useEffect(() => {
//     try {
//       axios
//         .get(`${window.$BackEndURL}/api/method/get-ticket?hash=${hashId}`)
//         .then((res) => {
//           console.log("ticket", res?.data?.data);
//           setHashData(res?.data?.data);
//           setUserID(res?.data?.data?.customer?.name);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   }, [hashId]);

//   // Fetching messages from Firebase
//   useEffect(() => {
//     if (hashData?.name) {
//       const q = query(
//         collection(db, `AdoptionOrders/${hashData?.name}/Message`),
//         orderBy("dateTime")
//       );
//       const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         const messages = [];
//         querySnapshot.forEach((doc) => {
//           messages.push({ id: doc.id, ...doc.data() });
//         });
//         console.log("messages", messages);
//         setMessages(messages);
//       });
//       return () => unsubscribe();
//     }
//   }, [hashData]);

//   const scrollToBottom = () => {
//     toScroll.current?.scrollTo({
//       top: toScroll.current.scrollHeight,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const sendFirebaseNotification = async (messageContent) => {
//     const dataObject = {
//       title: "New Message",
//       message: messageContent,
//       token: hashData?.device_id,
//       type: "chat",
//       object: `${hashData?.name}`
//     };

//     console.log("dataObject", dataObject);

//     try {
//       await axios
//         .post(
//           `${window.$BackEndURL}/api/method/kennelboss.push_notification.send_firebase_notification`, {data: dataObject})
//         .then((res) => {
//           console.log("push noti", res);
//           console.log("Notification sent successfully");
//         });
//     } catch (error) {
//       console.error("Error sending notification: ", error);
//     }
//   };

//   const addLastMessage = async ({ docId, message, isFile, ownerProfileID }) => {
//     try {
//       const chatDocRef = doc(db, "Chats", ownerProfileID, "Chat", docId);
//       console.log("chatDocRef",chatDocRef)
//       await updateDoc(chatDocRef, {
//         last_message_time: new Date(),
//         last_message: message,
//         is_file: isFile,
//       });
//       console.log("Last message updated successfully!");
//     } catch (error) {
//       console.error("Error updating last message: ", error);
//     }
//   };

//   // Sending a message
//   const handleSendMessage = async () => {
//     if (newMessage.trim() === "") {
//       toast.error("Enter a valid message!");
//       return;
//     }

//     try {
//       const parentDocRef2 = doc(db, "Chats", `${hashData?.kennel?.name}`);
//       const subcollectionRef2 = collection(parentDocRef2, "Chat");

//       // Query to check if a document with the same chat_room already exists
//       const chatQuery = query(
//         subcollectionRef2,
//         where("chat_room", "==", hashData?.name)
//       );

//       // Execute the query
//       const querySnapshot = await getDocs(chatQuery);

//       if (querySnapshot.empty) {
//         // If no document matches the chat_room, create a new one with Firebase-generated ID
//         await addDoc(subcollectionRef2, {
//           last_seen: new Date(),
//           user: hashData?.kennel?.name,
//           chat_room: hashData?.name,
//           ticket: hashData?.name,
//           label: "",
//           category: "",
//           last_message: newMessage,
//           last_message_time: new Date(),
//           is_file: false,
//         });
//         console.log("Chatroom successfully created!");
//       } else {
//         console.log("Chatroom already exists, no need to create.");
//       }

//       setNewMessage("");

//       await addDoc(subcollectionRef, {
//         id: userID,
//         content: newMessage,
//         dateTime: serverTimestamp(),
//         is_file: false,
//       });

//       await addLastMessage({
//         docId: hashData?.name,
//         message: newMessage,
//         isFile: false,
//         ownerProfileID: hashData?.kennel?.name,
//       });

//       sendFirebaseNotification(newMessage);
//       scrollToBottom();
//     } catch (error) {
//       console.error("Error sending message: ", error);
//     }
//   };

import React, { useState, useEffect, useRef } from "react";
import { IoSend, IoAdd, IoClose } from "react-icons/io5";
import { db } from "../firebaseConfig";
import {
  doc,
  collection,
  query,
  onSnapshot,
  where,
  orderBy,
  getDocs,
  setDoc,
  addDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "sonner";

const Chat = ({ closeChat, businessProfile }) => {
  const { hashId } = useParams();
  const [hashData, setHashData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [userID, setUserID] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const toScroll = useRef(null);

  const subcollectionRef = collection(
    db,
    "AdoptionOrders",
    `${hashData?.name}`,
    "Message"
  );

  useEffect(() => {
    axios
      .get(`${window.$BackEndURL}/api/method/get-ticket?hash=${hashId}`)
      .then((res) => {
        setHashData(res?.data?.data);
        setUserID(res?.data?.data?.customer?.name);
      })
      .catch((error) => console.log(error));
  }, [hashId]);

  useEffect(() => {
    if (hashData?.name) {
      const q = query(
        collection(db, `AdoptionOrders/${hashData?.name}/Message`),
        orderBy("dateTime")
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(messages);
      });
      return () => unsubscribe();
    }
  }, [hashData]);

  const getExistingChatDocId = async (ownerProfileID, chatRoomName) => {
    try {
      const chatCollectionRef = collection(db, "Chats", ownerProfileID, "Chat");
      const q = query(
        chatCollectionRef,
        where("chat_room", "==", chatRoomName)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.empty ? null : querySnapshot.docs[0].id;
    } catch (error) {
      console.error("Error fetching chat document ID:", error);
    }
  };

  const createNewChat = async (ownerProfileID, chatRoomName, message) => {
    try {
      const chatCollectionRef = collection(db, "Chats", ownerProfileID, "Chat");
      const docRef = await addDoc(chatCollectionRef, {
        chat_room: chatRoomName,
        last_message: message,
        last_message_time: new Date(),
        is_file: false,
      });
      return docRef.id;
    } catch (error) {
      console.error("Error creating new chat:", error);
    }
  };

  const addLastMessage = async ({ docId, message, isFile, ownerProfileID }) => {
    try {
      const chatDocRef = doc(db, "Chats", ownerProfileID, "Chat", docId);
      await updateDoc(chatDocRef, {
        last_message_time: new Date(),
        last_message: message,
        is_file: isFile,
      });
    } catch (error) {
      console.error("Error updating last message:", error);
    }
  };

  const sendFirebaseNotification = async (message) => {
    const dataObject = {
      title: "New Message",
      message: message,
      token: hashData?.device_id,
      type: "chat",
      object: `${hashData?.name}`,
    };

    console.log("dataObject", dataObject);

    try {
      await axios
        .post(
          `${window.$BackEndURL}/api/method/kennelboss.push_notification.send_firebase_notification`,
          { data: dataObject }
        )
        .then((res) => {
          console.log("push noti", res);
          console.log("Notification sent successfully");
        });
    } catch (error) {
      console.error("Error sending notification: ", error);
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") {
      toast.error("Enter a valid message!");
      return;
    }

    try {
      const ownerProfileID = hashData?.kennel?.name;
      const chatRoomName = hashData?.name;
      let docId = await getExistingChatDocId(ownerProfileID, chatRoomName);
      if (!docId) {
        docId = await createNewChat(ownerProfileID, chatRoomName, newMessage);
      }

      await addLastMessage({
        docId: docId,
        message: newMessage,
        isFile: false,
        ownerProfileID: ownerProfileID,
      });

      await addDoc(subcollectionRef, {
        id: userID,
        content: newMessage,
        dateTime: serverTimestamp(),
        is_file: false,
      });

      await sendFirebaseNotification(newMessage);

      setNewMessage("");
      toScroll.current?.scrollTo({
        top: toScroll.current.scrollHeight,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleUploadFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setOpenFileUpload(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
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
      setUploading(false);
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
      await handleUploadFile();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Toaster richColors />
      <div className="fixed right-0 bottom-0 w-full sm:max-w-md bg-white rounded-tl-[12px] z-50 flex flex-col">
        <div className="flex items-center justify-between px-4 py-2.5 shadow-msg">
          <div className="flex items-center space-x-2.5">
            <img
              src={
                businessProfile?.logo
                  ? window.$BackEndURL + businessProfile?.logo
                  : image
              }
              alt="Seller"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium text-[14px]">
              {businessProfile?.business_name}
            </span>
          </div>
          <button onClick={closeChat} className="text-[#000000]">
            <IoClose className="w-5 h-5" />
          </button>
        </div>

        <div
          className="flex-grow sm:h-[75vh] h-[71vh]  overflow-y-auto px-4 py-2.5"
          ref={toScroll}
        >
          {messages?.map((message, index) => (
            <div
              key={index}
              className={`flex flex-col gap-y-0.5 ${
                message.id === userID ? "items-end" : "items-start"
              }`}
            >
              {!message.system_message && (
                <div
                  className={`inline-flex items-center justify-center text-[12px] font-medium rounded-full ${
                    message.id !== userID
                      ? "text-[#1877F2] bg-[#1877F214]"
                      : "text-gray-700 bg-[#0000000A]"
                  }`}
                  style={{
                    width: "32px",
                    height: "32px",
                  }}
                >
                  {message.id === userID
                    ? "Me"
                    : businessProfile?.business_name?.charAt(0)?.toUpperCase()}
                </div>
              )}

              {!message.system_message ? (
                <div
                  className={`p-[16px] flex items-end text-[#000000] text-[14px] mx-2 my-1.5 ${
                    message.id === userID
                      ? "bg-[#1877F214] justify-end rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]"
                      : "bg-[#0000000A] justify-start rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]"
                  }`}
                >
                  {!message.is_file ? (
                    <span>{message.content}</span>
                  ) : (
                    <div className="max-w-[300px] flex items-center justify-center">
                      {message.content === "Uploading..." ? (
                        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <img
                          src={window.$BackEndURL + message.content}
                          className="w-full h-full object-cover object-center rounded-md"
                          alt="Uploaded file"
                        />
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center w-full">
                  <span className="text-[14px] bg-[#FF950B14] shadow-sm py-[12px] px-[16px] rounded-[8px]">
                    {message.content}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center px-4 py-2 gap-x-1.5">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full px-4 h-[48px] bg-[#0000000A] rounded-[6px] outline-none placeholder:text-gray-500 text-[#000000A3] text-[14px]"
              placeholder="Type something here"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <label className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8V16M16 12H8"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="black"
                  stroke-width="1.5"
                />
              </svg>

              <input
                type="file"
                onChange={handleUploadFile}
                className="hidden"
              />
            </label>
          </div>
          <div className="flex-1">
            <button
              onClick={handleSendMessage}
              className="bg-[#1877F2] text-white h-[48px] w-[48px] rounded-[6px] inline-flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.922 4.79004C16.6963 3.16245 19.0834 2.34866 20.3674 3.63261C21.6513 4.91656 20.8375 7.30371 19.21 12.078L18.1016 15.3292C16.8517 18.9958 16.2267 20.8291 15.1964 20.9808C14.9195 21.0216 14.6328 20.9971 14.3587 20.9091C13.3395 20.5819 12.8007 18.6489 11.7231 14.783C11.4841 13.9255 11.3646 13.4967 11.0924 13.1692C11.0134 13.0742 10.9258 12.9866 10.8308 12.9076C10.5033 12.6354 10.0745 12.5159 9.21705 12.2769C5.35111 11.1993 3.41814 10.6605 3.0909 9.64127C3.00292 9.36724 2.97837 9.08053 3.01916 8.80355C3.17088 7.77332 5.00419 7.14834 8.6708 5.89838L11.922 4.79004Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
