import React from "react";
import ProfileImg from "../ProfileImg";

const FeedBoxComment = () => {
  return (
    <div className="border-t-2 pt-4 mt-4 flex flex-row">
      <ProfileImg imgSrc="https://avatars.githubusercontent.com/u/144009672" />
      <textarea
        className="w-full h-10 rounded-lg border-0 text-xl text-gray-900 placeholder:text-gray-400 focus:ring-1 leading-8 bg-emerald-100 ml-4 mr-3 px-2 py-1"
        placeholder="Write a Comment..."
      ></textarea>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default FeedBoxComment;
