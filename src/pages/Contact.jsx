import { SiGooglemaps } from "react-icons/si";

const Contact = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-20 px-2 pb-16 pt-16 sm:px-8 bg-neutral-300">
      <article className="grid max-w-2xl flex-1 gap-10 text-center text-black">
        <h1 className="text-5xl sm:text-8xl font-black uppercase tracking-widest text-black ">
          Contact
        </h1>
        <p className="leading-snug sm:leading-8 tracking-wider text sm:text-lg ">
          Whether you&apos;re interested in networking, or career advice, or
          want to have a casual conversation, I look forward to communicating
          with you and learning from our interactions!
          <br />
        </p>

        <div className="grid gap-10 text-sm">
          <div className="grid gap-2">
            <h2 className="text-lg font-bold tracking-widest text-black">
              Address
            </h2>
            <p className="flex items-center justify-center tracking-wider ">
              <SiGooglemaps />
              &nbsp; Mumbai, India
            </p>
          </div>
          <div className="grid gap-2">
            <h2 className="text-lg font-bold tracking-widest text-black">
              Email
            </h2>
            <p className="tracking-wider ">
              <a
                href="mailto:team.t69@gmail.com"
                className="underline-offset-2 hover:underline"
              >
                team.t69@gmail.com
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Contact;
