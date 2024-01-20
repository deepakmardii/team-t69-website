import Marquee from "react-fast-marquee";
import CustomCard from "../components/CustomCard";
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
  const cardDataList = [
    { imageUrl: "/1.jpg", text: "KAIZEN" },
    { imageUrl: "/3.jpg", text: "BULL3T" },
    { imageUrl: "/1.jpg", text: "BINKS" },
    { imageUrl: "/3.jpg", text: "STRIXX" },
    { imageUrl: "/1.jpg", text: "PIXELZZ" },
    { imageUrl: "/3.jpg", text: "MAKAVEL" },
    // Add more data as needed
  ];
  return (
    <div className="bg-slate-900">
      <section className="relative bg-[url(https://cdn.eraspace.com/pub/media/mageplaza/blog/post/v/a/valorantintro.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-left">
              Elevating Excellence, Dominating Virtually! Unleashing passion,
              skill, and synergy in every game, we redefine esports glory one
              victory at a time. Join the journey, witness the power of T69!
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-8xl pb-6 uppercase text-red-500">
                About Us
              </h2>
              <div>
                <p>
                  Welcome to Team T69 – where every shot, every round, and every
                  victory is a testament to our dedication to greatness.
                  Together, we rise, we conquer, and we leave an indomitable
                  legacy in the ever-evolving world of Valorant.
                </p>
                <p className="mt-4">
                  Founded with a shared commitment to excellence, Team T69 is
                  not just a team; we are a force, a brotherhood of elite gamers
                  pushing the boundaries of virtual competition.
                </p>
                <br />
                <p>
                  Beyond the pixels and polygons, Team T69 is a community united
                  by a love for gaming, a commitment to growth, and an
                  unwavering passion for the thrill of competition. We invite
                  you to join us on this exhilarating journey, whether you're a
                  seasoned esports enthusiast or a newcomer eager to witness the
                  prowess of T69.
                </p>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blte2c0dcec8472d272/636476dc2d2a144cc90497fb/GCC_Primer_Article_Header.jpg?width=2472&height=1390"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="text-left font-semibold uppercase text-3xl sm:text-7xl underline hover:text-red-500 transition-all hover:cursor-pointer">
            Meet the Team-T69
          </div>
          <p className="py-10 sm:pr-96 sm:mr-96">
            In Team T69, players aren't just part of a team; they are champions,
            pushing the boundaries of what's possible in the ever-evolving
            landscape of esports.
          </p>

          <Marquee>
            <div className="flex">
              {cardDataList.map((cardData, index) => (
                <CustomCard
                  key={index}
                  imageUrl={cardData.imageUrl}
                  text={cardData.text}
                />
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Home;
