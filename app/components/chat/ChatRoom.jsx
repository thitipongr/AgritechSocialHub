import React from "react";
import ChatRoomInput from "./ChatRoomInput";
import ChatRoomDetail from "./ChatRoomDetail";

const ChatRoom = () => {
  return (
    <>
      <div className="ml-3 mt-4 h-5/6 overflow-auto relative">
        <div className="h-full overflow-auto relative">
          <ChatRoomDetail />
        </div>
        <ChatRoomInput />
      </div>
    </>
  );
};

export default ChatRoom;
