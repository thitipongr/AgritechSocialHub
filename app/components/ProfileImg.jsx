import Image from "next/image";
import React from "react";

const ProfileImg = ({ imgSrc }) => {
  return (
    <Image
      width={500}
      height={500}
      className="inline-block h-10 w-10 rounded-full ring-2 ring-white flex my-auto"
      src={imgSrc}
      alt=""
    />
  );
};

export default ProfileImg;
