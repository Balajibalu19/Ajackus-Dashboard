import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaBuilding } from "react-icons/fa";

const UserCard = ({ user, onDelete, onEdit }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAction = async (action) => {
    setIsProcessing(true);
    await action();
    setIsProcessing(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl shadow-xl p-8 flex flex-col items-center space-y-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      {/* Profile Picture */}
      <div className="w-36 h-36 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out border-4 border-white">
        <h1 className="text-4xl text-white font-extrabold uppercase tracking-wider shadow-md">
          {user.name.charAt(0)}
        </h1>
      </div>

      {/* User Details */}
      <div className="text-center space-y-1">
        <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-500 italic">@{user.username}</p>
      </div>

      {/* Contact Information */}
      <div className="space-y-2 text-center text-sm">
        <div className="flex items-center justify-center space-x-2">
          <FaPhone className="text-blue-600" />
          <span className="font-medium text-gray-700">{user.phone}</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaEnvelope className="text-blue-600" />
          <span className="font-medium text-gray-700">{user.email}</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaBuilding className="text-blue-600" />
          <span className="font-medium text-gray-700">{user.company.name}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => handleAction(() => onEdit(user))}
          className={`flex items-center bg-blue-600 text-white py-2 px-5 text-sm rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 transform ${
            isProcessing ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <span className="animate-pulse">Processing...</span>
          ) : (
            <>
              <svg
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 3h2v9h-2zm0 0L6 7m5 5l5-5m-2 2l2 2M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
              Edit
            </>
          )}
        </button>

        <button
          onClick={() => handleAction(() => onDelete(user.id))}
          className={`flex items-center bg-red-600 text-white py-1.5 px-4 text-sm rounded-full shadow-md hover:bg-red-700 transition-all duration-300 transform ${
            isProcessing ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
          }`}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <span className="animate-pulse">Processing...</span>
          ) : (
            <>
              <svg
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Delete
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
