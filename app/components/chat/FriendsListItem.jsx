import React from "react";
import ProfileImg from "../ProfileImg";
import clsx from "clsx";

const FriendsListItem = ({ data }) => {
  const { userName, userImg, latestChat } = data;

  return (
    <>
      <div
        className={clsx(
          "flex flex-row my-2 p-3 rounded-lg bg-emerald-100 hover:bg-emerald-200 justify-center",
          { "bg-emerald-300": userName === "Daisy Corkery" }
        )}
      >
        <ProfileImg imgSrc={userImg} size={10} />
        <div className="w-full mx-2 p-2 hidden sm:flex sm:flex-col">
          <div className="font-semibold">{userName}</div>
          <div className="flex flex-row">
            {latestChat.owner ? <div className="mr-1">you:</div> : ""}
            <div className="">{latestChat.txt}</div>
            <div className="mx-1">•</div>
            <div className="">{latestChat.date}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsListItem;
