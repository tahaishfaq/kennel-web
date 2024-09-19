import React, { useState } from "react";
import { IoSend, IoAdd, IoClose } from "react-icons/io5";
import image from "../assets/Monogram.png";

const Chat = ({ closeChat }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    { sender: "Chem", text: "Do you have a chance to talk over the phone?" },
    { sender: "Chem", text: "file name: filename.pdf" },
    { sender: "Chem", text: "Write a content as a human." },
    {
      sender: "Chem",
      text: "Summarize the content from the above article in 5 bullet points.",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", text: newMessage }]);
      setNewMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-[430px] h-[684px] bg-white rounded-lg shadow-lg p-4 z-50 flex flex-col">
      <div className="flex items-center justify-between mb-2 border-b pb-2">
        <div className="flex items-center space-x-2">
          <img src={image} alt="Seller" className="w-10 h-10 rounded-full" />
          <span className="font-semibold text-lg">Seller Name</span>
        </div>
        <button onClick={closeChat} className="text-gray-500">
          <IoClose size={20} />
        </button>
      </div>
      <div className="flex-grow overflow-y-auto mb-2 scrollbar-hidden">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.sender === "You" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`font-semibold ${
                message.sender === "You" ? "text-blue-800" : "text-gray-800"
              }`}
            >
              {message.sender}
            </div>
            <div
              className={`mt-1 p-2 rounded-lg ${
                message.sender === "You"
                  ? "bg-blue-200 text-blue-800"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <span>{message.text}</span>
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
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={() => {}}
          >
            <IoAdd size={20} />
          </button>
        </div>
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          <IoSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
