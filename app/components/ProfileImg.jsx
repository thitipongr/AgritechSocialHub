import Image from "next/image";
import React from "react";

const ProfileImg = () => {
  return (
    <Image
      width={500}
      height={500}
      className="inline-block h-10 w-10 rounded-full ring-2 ring-white flex my-auto"
      src="https://avatars.githubusercontent.com/u/144009672"
      alt=""
    />
  );
};

export default ProfileImg;
