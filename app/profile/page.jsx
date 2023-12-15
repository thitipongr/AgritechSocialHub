import React from "react";
import Posting from "../components/home/Posting";
import FeedBox from "../components/home/FeedBox";
import Header from "../components/profile/Header";
const feedBox_initial = [
  {
    userName: "Thitipong Rattanamaneeratsamee",
    userImg: "https://avatars.githubusercontent.com/u/144009672",
    postDetail:
      "Magni repudiandae qui et corporis. Repudiandae est culpa accusantium ratione iusto est hic facere. Ut iste ea inventore ipsum provident voluptas quod. Praesentium sint iure expedita id. Omnis qui officia amet. Est quia aut quam harum consectetur voluptate maiores modi.Earum et quibusdam placeat placeat nobis. Unde voluptas molestias illo modi. Quis quae officia aut quibusdam asperiores consequuntur enim. Dolorum sit sint soluta quam ab dolorem iure. Omnis ut molestiae similique dignissimos totam qui ducimus. Iste velit vel necessitatibus consectetur rerum expedita veritatis alias.Sapiente quis et quia. Aut iusto et tenetur at aut sed. Quasi autem odit minus omnis. Quia rerum non minus molestiae unde commodi accusamus velit libero.",
    postDate: "Thu Mar 16 2023 13:31:37 GMT+0700 (Indochina Time)",
    like: 373224,
    share: 34323,
    comments: [
      {
        userName: "Daisy Corkery",
        userImg: "https://avatars.githubusercontent.com/u/144009673",
        commentDetail: "eius rerum iusto",
        commentDate: "Thu Mar 16 2023 14:35:37 GMT+0700 (Indochina Time)",
        like: 5437,
      },
      {
        userName: "Donnie Hoppe",
        userImg: "https://avatars.githubusercontent.com/u/144009674",
        commentDetail: "enim laboriosam itaque",
        commentDate: "Thu Mar 16 2023 15:37:31 GMT+0700 (Indochina Time)",
        like: 6,
      },
      ,
      {
        userName: "Maribel",
        userImg: "https://avatars.githubusercontent.com/u/144009675",
        commentDetail: "vel vel adipisci",
        commentDate: "Thu Mar 16 2023 19:20:50 GMT+0700 (Indochina Time)",
        like: 23587,
      },
    ],
  },
];
const Profile = () => {
  return (
    <>
      <Header />
      <Posting />
      {feedBox_initial.map((data, index) => {
        return (
          <div key={index} className="mt-4">
            <FeedBox data={data} />
          </div>
        );
      })}
    </>
  );
};

export default Profile;
