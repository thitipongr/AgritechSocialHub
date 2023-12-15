import React from "react";
import ChatRoomDetailItem from "./ChatRoomDetailItem";
const mockChatDetail = [
  {
    owner: false,
    txt: "hello",
    date: "1d",
  },
  { owner: true, txt: "hi", date: "1d" },
];
const ChatRoomDetail = () => {
  return (
    <>
      <div className="flex flex-col pb-20">
        {mockChatDetail.map((data, index) => (
          <ChatRoomDetailItem key={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default ChatRoomDetail;
