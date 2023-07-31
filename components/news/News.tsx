import Link from "next/link";
import NewsCard from "./NewsCard";
import Slider from "../slider/Slider";

const dummyData = [
  {
    category: "Traveling",
    date: "28 Dec 2020",
    title: "Visit the East",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
    imageUrl:
      "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    learnMoreUrl: "/",
  },
  {
    category: "Technology",
    date: "15 Jan 2021",
    title: "Exploring AI Advancements",
    description:
      "Discover the latest advancements in artificial intelligence and its impact on various industries.",
    imageUrl:
      "https://images.pexels.com/photos/3943725/pexels-photo-3943725.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    learnMoreUrl: "/",
  },
  {
    category: "Food",
    date: "10 Feb 2021",
    title: "Delicious Food from Around the World",
    description:
      "Take a culinary journey and explore some of the most delicious dishes from different cultures.",
    imageUrl:
      "https://images.pexels.com/photos/1565981/pexels-photo-1565981.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    learnMoreUrl: "/",
  },
  {
    category: "Sports",
    date: "20 Mar 2021",
    title: "Thrilling Moments in Sports History",
    description: "Relive the most thrilling and unforgettable moments in the history of sports.",
    imageUrl:
      "https://images.pexels.com/photos/3762679/pexels-photo-3762679.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    learnMoreUrl: "/",
  },
];

export default function News() {
  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-center">
      <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary-clr uppercase rounded-full">
        Breaking News
      </p>
      <h2 className=" mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
        Success Stories: How Your Donations are Transforming Lives
      </h2>
      <p className="text-base text-gray-700 md:text-lg">
        Stay up-to-date with the latest developments and breakthroughs at Rebuilding Lives. From
        innovative projects to partnerships that expand our reach, this section keeps you informed
        about how we are continuously working to address pressing issues and bring about positive
        change.
      </p>
      <br />
      <div className="w-full">
        <Slider options={{ align: "center" }}>
          {dummyData.map((data, index) => (
            <div key={index} className="flex-[0_0_90%] md:flex-[0_0_30%]">
              <NewsCard key={index} {...data} />
            </div>
          ))}
        </Slider>
        <p>asd</p>
      </div>
      <br />
      <Link href="/" className="text-right underline">
        All articles
      </Link>
    </section>
  );
}
