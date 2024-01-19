import {
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaTwitch,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-950 text-center h-[30vh] py-14">
      <div className="flex self-center gap-4">
        <a
          href="#"
          className="border-2 p-2 rounded-full hover:bg-white hover:text-black transition-all "
        >
          <FaTwitter className="h-4 w-4" />
        </a>
        <a
          href="#"
          className="border-2 p-2 rounded-full hover:bg-white hover:text-black transition-all "
        >
          <FaInstagram className="h-4 w-4" />
        </a>
        <a
          href="#"
          className="border-2 p-2 rounded-full hover:bg-white hover:text-black transition-all "
        >
          <FaYoutube className="h-4 w-4" />
        </a>
        <a
          href="#"
          className="border-2 p-2 rounded-full hover:bg-white hover:text-black transition-all "
        >
          <FaTwitch className="h-4 w-4" />
        </a>
        <a
          href="#"
          className="border-2 p-2 rounded-full hover:bg-white hover:text-black transition-all "
        >
          <FaFacebookF className="h-4 w-4" />
        </a>
        <a
          href="#"
          className="border-2 p-2 rounded-full hover:bg-white hover:text-black transition-all "
        >
          <FaDiscord className="h-4 w-4" />
        </a>
      </div>
      <div className="uppercase text-lg">Team t69 © 2024</div>
    </div>
  );
};

export default Footer;
