"use client";

import FeedBox from "./components/home/FeedBox";
import Posting from "./components/home/Posting";

const feedBox_initial = [
  {
    userName: "Daisy Corkery",
    userImg: "https://avatars.githubusercontent.com/u/144009673",
    postDetail:
      "Magni repudiandae qui et corporis. Repudiandae est culpa accusantium ratione iusto est hic facere. Ut iste ea inventore ipsum provident voluptas quod. Praesentium sint iure expedita id. Omnis qui officia amet. Est quia aut quam harum consectetur voluptate maiores modi.Earum et quibusdam placeat placeat nobis. Unde voluptas molestias illo modi. Quis quae officia aut quibusdam asperiores consequuntur enim. Dolorum sit sint soluta quam ab dolorem iure. Omnis ut molestiae similique dignissimos totam qui ducimus. Iste velit vel necessitatibus consectetur rerum expedita veritatis alias.Sapiente quis et quia. Aut iusto et tenetur at aut sed. Quasi autem odit minus omnis. Quia rerum non minus molestiae unde commodi accusamus velit libero.",
    postDate: "Sun Feb 26 2023 17:49:37 GMT+0700 (Indochina Time)",
    like: 2347,
    share: 569,
    comments: [
      {
        userName: "Daisy Corkery",
        userImg: "https://avatars.githubusercontent.com/u/144009673",
        commentDetail: "eius rerum iusto",
        commentDate: "Sun Feb 26 2023 18:43:32 GMT+0700 (Indochina Time)",
        like: 328,
      },
      {
        userName: "Donnie Hoppe",
        userImg: "https://avatars.githubusercontent.com/u/144009674",
        commentDetail: "enim laboriosam itaque",
        commentDate: "Sun Feb 26 2023 18:47:31 GMT+0700 (Indochina Time)",
        like: 38,
      },
      ,
      {
        userName: "Maribel",
        userImg: "https://avatars.githubusercontent.com/u/144009675",
        commentDetail: "vel vel adipisci",
        commentDate: "Sun Feb 26 2023 18:50:35 GMT+0700 (Indochina Time)",
        like: 23,
      },
    ],
  },
];

export default function Home() {
  // มีหน้าสำหรับโพสต์ข้อความ ปุ่มกดไลค์ แสดงความคิดเห็น แชร์โพสต์
  // หน้าโปรไฟล์ของผู้ใช้
  // หน้าแชท

  return (
    <>
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
}
