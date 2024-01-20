import React from "react";
import { Image } from "@nextui-org/react";

const Players = () => {
  const developersData = [
    {
      id: 1,
      name: "chogyal 'KAIZEN' bhutia",
      imageUrl: "https://source.unsplash.com/240x320/?portrait?2",
      socialLinks: [
        { title: "Youtube", url: "#" },
        { title: "Instagram", url: "#" },
      ],
    },
    {
      id: 2,
      name: "aditya 'BULL3T' kajari",
      imageUrl: "https://source.unsplash.com/240x320/?portrait?3",
      socialLinks: [
        { title: "Youtube", url: "#" },
        { title: "Instagram", url: "#" },
      ],
    },
    {
      id: 3,
      name: "mithul 'binks' nayak",
      imageUrl: "https://source.unsplash.com/240x320/?portrait?4",
      socialLinks: [
        { title: "Youtube", url: "#" },
        { title: "Instagram", url: "#" },
      ],
    },
    {
      id: 4,
      name: "sahil 'strixx'",
      imageUrl: "https://source.unsplash.com/240x320/?portrait?5",
      socialLinks: [
        { title: "Youtube", url: "#" },
        { title: "Instagram", url: "#" },
      ],
    },
    {
      id: 5,
      name: "aditya 'PIXELZZ' gulhane",
      imageUrl: "https://source.unsplash.com/240x320/?portrait?6",
      socialLinks: [
        { title: "Youtube", url: "#" },
        { title: "Instagram", url: "#" },
      ],
    },
    {
      id: 6,
      name: "MAKAVEL",
      imageUrl: "https://source.unsplash.com/240x320/?portrait?7",
      socialLinks: [
        { title: "Youtube", url: "#" },
        { title: "Instagram", url: "#" },
      ],
    },
  ];
  return (
    <div>
      <section className="relative bg-[url(https://overgear.com/cdn/files/745c2824-aa34-477e-adf7-22fc08fa121d)] bg-cover bg-center bg-no-repeat">
        <div className="relative justify-center items-center mx-auto max-w-screen-xl px-4 py-28 sm:py-32 flex lg:h-screen">
          <div className="max-w-xl text-center">
            <p className="mt-4 max-w-lg font-bold text-4xl sm:text-8xl">
              VALORANT
            </p>
            <p className="text-lg sm:text-xl">
              MEET THE PLAYERS OF THE T69 VALORANT TEAM
            </p>
          </div>
        </div>
      </section>
      <section className="py-6 bg-neutral-300 text-black">
        <div className="container mx-auto space-y-16 sm:p-10">
          {/* <div className="space-y-4">
            <h3 className="text-2xl font-bold leadi sm:text-5xl">
              Meet our team
            </h3>
            <p className="max-w-2xl dark:text-gray-400">
              At a assumenda quas cum earum ut itaque commodi saepe rem
              aspernatur quam natus quis nihil quod, hic explicabo doloribus
              magnam neque, exercitationem eius sunt!
            </p>
          </div> */}
          <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-2 px-20 pt-10">
            {developersData.map((developer) => (
              <div key={developer.id} className="space-y-4 uppercase">
                <img
                  alt=""
                  className="h-80 sm:h-96 mx-auto mb-4 bg-center rounded-sm hover:scale-110 transition duration-500 cursor-pointer "
                  src={developer.imageUrl}
                />
                <div className="flex flex-col items-center ">
                  <h4 className="text-xl font-semibold text-center">
                    {developer.name}
                  </h4>
                  <div className="flex mt-2 space-x-2">
                    {developer.socialLinks.map((socialLink, index) => (
                      <a
                        key={index}
                        rel="noopener noreferrer"
                        href={socialLink.url}
                        title={socialLink.title}
                        className=""
                      >
                        {/* You can include the respective SVG icons here */}
                        {socialLink.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Players;
