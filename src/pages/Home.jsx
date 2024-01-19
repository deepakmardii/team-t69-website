import Marquee from "react-fast-marquee";
import CustomCard from "../components/CustomCard";

const Home = () => {
  const cardDataList = [
    { imageUrl: "/1.jpg", text: "Binks" },
    { imageUrl: "/3.jpg", text: "Strixx" },
    { imageUrl: "/1.jpg", text: "Bullet" },
    { imageUrl: "/3.jpg", text: "Coming next month." },
    { imageUrl: "/1.jpg", text: "Available soon." },
    { imageUrl: "/3.jpg", text: "Coming next month." },
    // Add more data as needed
  ];
  return (
    <div className="bg-slate-900">
      <section className="relative bg-[url(https://cdn.eraspace.com/pub/media/mageplaza/blog/post/v/a/valorantintro.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-left">
              Elevating Excellence, Dominating Virtually! Unleashing passion,
              skill, and synergy in every game, we redefine esports glory one
              victory at a time. Join the journey, witness the power of T69!
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blte2c0dcec8472d272/636476dc2d2a144cc90497fb/GCC_Primer_Article_Header.jpg?width=2472&height=1390"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-8xl pb-6">About Us</h2>
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
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <Marquee>
            <div className="flex gap-10">
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
