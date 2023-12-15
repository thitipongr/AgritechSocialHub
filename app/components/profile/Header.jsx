import React from "react";
import ProfileImg from "../ProfileImg";
import ShortnessNum from "../ShortnessNum";

const Header = () => {
  return (
    <div className="mb-4 flex flex-col sm:justify-start sm:flex-row">
      <div className="flex justify-center">
        <ProfileImg
          imgSrc="https://avatars.githubusercontent.com/u/144009672"
          size={44}
        />
      </div>
      <div className="ml-0 sm:ml-4 mt-4 sm:mt-0 flex items-center flex-col sm:flex-row sm:justify-between sm:w-10/12">
        <div className="flex flex-col">
          <div className="flex justify-center text-xl font-black text-center">
            Thitipong Rattanamaneeratsamee
          </div>
          <div className="flex text-xl font-normal">
            <ShortnessNum num={449} />
            <div className="ml-1 mr-1">friends •</div>
            <ShortnessNum num={5798} />
            <div className="ml-1">followers</div>
          </div>
        </div>
        <button className="text-xl font-normal rounded-lg bg-emerald-700 text-white p-4 flex flex-row mt-4 sm:mt-0">
          Edit profile
        </button>
      </div>
    </div>
  );
};

export default Header;
