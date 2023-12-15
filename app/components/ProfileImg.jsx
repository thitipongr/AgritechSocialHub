import Image from "next/image";
import React from "react";

const ProfileImg = ({ imgSrc, size }) => {
  return (
    <Image
      width={1000}
      height={1000}
      className={`inline-block h-${size} w-${size} rounded-full ring-2 ring-white flex my-auto`}
      src={imgSrc}
      alt=""
    />
  );
};

export default ProfileImg;
