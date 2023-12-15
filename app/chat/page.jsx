import React from "react";
import FriendsList from "../components/chat/FriendsList";
import ChatRoom from "../components/chat/ChatRoom";

const Chat = () => {
  return (
    <>
      <div className="flex h-screen -my-20">
        <div className="w-4/12 mt-20">
          <div className="text-4xl font-semibold">Chat</div>
          <FriendsList />
        </div>
        <div className="w-8/12 mt-20">
          <div className="flex text-4xl items-center">Daisy</div>
          <ChatRoom />
        </div>
      </div>
    </>
  );
};

export default Chat;
