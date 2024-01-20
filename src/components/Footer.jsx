import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaTwitch,
  FaFacebookF,
} from "react-icons/fa";

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    className="border-2 p-2 rounded-full hover:bg-white hover:text-black transition-all"
  >
    {icon}
  </a>
);

const Footer = () => (
  <div className="flex flex-col justify-between bg-gray-950 text-center h-[30vh] py-20 sm:py-14">
    <div className="flex self-center gap-4">
      <SocialLink href="#" icon={<FaTwitter className="h-4 w-4" />} />
      <SocialLink href="#" icon={<FaInstagram className="h-4 w-4" />} />
      <SocialLink href="#" icon={<FaYoutube className="h-4 w-4" />} />
      <SocialLink href="#" icon={<FaTwitch className="h-4 w-4" />} />
      <SocialLink href="#" icon={<FaFacebookF className="h-4 w-4" />} />
      <SocialLink href="#" icon={<FaDiscord className="h-4 w-4" />} />
    </div>
    <div className="uppercase text-lg">Team t69 © 2024</div>
  </div>
);

export default Footer;
