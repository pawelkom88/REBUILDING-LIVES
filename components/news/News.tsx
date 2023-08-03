import NewsCard from "./NewsCard";
import Link from "next/link";
import Image from "next/image";
import Slider from "../slider/Slider";
import { CSSProperties } from "react";

const cardData = [
  {
    id: 0,
    imageUrl:
      "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    heading: "Card 1 Heading",
    description: "Short description goes here for Card 1.",
    date: "2023-08-03",
  },
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    heading: "Card 2 Heading",
    description: "Short description goes here for Card 2.",
    date: "2023-08-03",
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    heading: "Card 3 Heading",
    description: "Short description goes here for Card 3.",
    date: "2023-08-03",
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    heading: "Card 4 Heading",
    description: "Short description goes here for Card 4.",
    date: "2023-08-03",
  },
  {
    id: 4,
    imageUrl:
      "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    heading: "Card 5 Heading",
    description: "Short description goes here for Card 5.",
    date: "2023-08-03",
  },
  {
    id: 5,
    imageUrl:
      "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    heading: "Card 6 Heading",
    description: "Short description goes here for Card 6.",
    date: "2023-08-03",
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
      <p className="text-base md:text-lg">
        Stay up-to-date with the latest developments and breakthroughs at Rebuilding Lives. From
        innovative projects to partnerships that expand our reach, this section keeps you informed
        about how we are continuously working to address pressing issues and bring about positive
        change.
      </p>
      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-1 md:grid-rows-2 gap-8">
        {cardData.map(card => {
          return (
            <Card
              key={card.id}
              card={card}
              styles={
                card.id === 0 || card.id === 5
                  ? "col-span-2 md:col-span-1 xl:col-span-2 row-span-1 shadow-md"
                  : "col-span-2 md:col-span-1 row-span-1 shadow-md"
              }
            />
          );
        })}
      </div>

      <br />
      <Link href="/" className="text-right underline">
        All articles
      </Link>
    </section>
  );
}

const Card = ({ card, styles }: { card: any; styles: string }) => (
  <article className={`${styles} flex flex-col h-[400px] bg-white shadow-lg`}>
    <div className="w-full h-56">
      {/* Use Next.js Image component here */}
      <Image
        className="w-full h-full object-cover object-center"
        src={card.imageUrl}
        alt={`Image`}
        width={160}
        height={160}
      />
    </div>

    <div className="flex flex-col p-4 gap-2">
      <h3 className="text-heading3 font-bold">{card.heading}</h3>
      <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">{card.description}</p>
      <p className="text-gray-600">{card.date}</p>
    </div>
  </article>
);
