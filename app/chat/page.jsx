import React from "react";
import FriendsList from "../components/chat/FriendsList";
import ChatRoom from "../components/chat/ChatRoom";

const Chat = () => {
  return (
    <>
      <div className="flex">
        <div className="w-4/12">
          <div className="text-4xl font-semibold">Chat</div>
          <FriendsList />
        </div>
        <div className="w-8/12">
          <ChatRoom />
        </div>
      </div>
    </>
  );
};

export default Chat;
