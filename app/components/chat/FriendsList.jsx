import React from "react";
import FriendsListItem from "./FriendsListItem";

const friendListInitial = [
  {
    userName: "Daisy Corkery",
    userImg: "https://avatars.githubusercontent.com/u/144009673",
    latestChat: {
      owner: true,
      txt: "hi",
      date: "1d",
    },
  },
  {
    userName: "Maribel",
    userImg: "https://avatars.githubusercontent.com/u/144009675",
    latestChat: {
      owner: false,
      txt: "hello",
      date: "1d",
    },
  },
  {
    userName: "Donnie Hoppe",
    userImg: "https://avatars.githubusercontent.com/u/144009674",
    latestChat: {
      owner: true,
      txt: "bye",
      date: "1d",
    },
  },
  {
    userName: "Daisy Corker",
    userImg: "https://avatars.githubusercontent.com/u/144009676",
    latestChat: {
      owner: true,
      txt: "hi",
      date: "1d",
    },
  },
  {
    userName: "Maribel",
    userImg: "https://avatars.githubusercontent.com/u/144009677",
    latestChat: {
      owner: false,
      txt: "hello",
      date: "1d",
    },
  },
  {
    userName: "Donnie Hoppe",
    userImg: "https://avatars.githubusercontent.com/u/144009682",
    latestChat: {
      owner: true,
      txt: "bye",
      date: "1d",
    },
  },
  {
    userName: "Daisy kery",
    userImg: "https://avatars.githubusercontent.com/u/144009679",
    latestChat: {
      owner: true,
      txt: "hi",
      date: "1d",
    },
  },
  {
    userName: "Maribel",
    userImg: "https://avatars.githubusercontent.com/u/144009680",
    latestChat: {
      owner: false,
      txt: "hello",
      date: "1d",
    },
  },
  {
    userName: "Donnie Hoppe",
    userImg: "https://avatars.githubusercontent.com/u/144009681",
    latestChat: {
      owner: true,
      txt: "bye",
      date: "1d",
    },
  },
];

const FriendsList = () => {
  return (
    <>
      <div className="flex flex-col mt-4 h-5/6 overflow-auto">
        {friendListInitial.map((data, index) => (
          <FriendsListItem key={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default FriendsList;
