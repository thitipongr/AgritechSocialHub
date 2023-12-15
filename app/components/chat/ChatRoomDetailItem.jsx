import clsx from "clsx";
import React from "react";
import ProfileImg from "../ProfileImg";

const ChatRoomDetailItem = ({ data }) => {
  const { owner, txt, date } = data;

  return (
    <div className="flex flex-col">
      <div
        className={clsx("flex flex-row items-start", {
          "flex-row-reverse": owner,
        })}
      >
        <div className={clsx("flex mr-3 mt-3 flex", { hidden: owner })}>
          <ProfileImg
            imgSrc={"https://avatars.githubusercontent.com/u/144009673"}
            size={10}
          />
        </div>
        <div
          className={clsx(
            "my-2 p-3 rounded-lg bg-emerald-100 max-w-[70%] break-words",
            { "bg-emerald-400 ": owner }
          )}
        >
          {txt}
        </div>
        <div></div>
      </div>
      <div
        className={clsx("flex flex-row items-start text-slate-400", {
          "flex-row-reverse mr-2": owner,
          "ml-14": !owner,
        })}
      >
        {date}
      </div>
    </div>
  );
};

export default ChatRoomDetailItem;
