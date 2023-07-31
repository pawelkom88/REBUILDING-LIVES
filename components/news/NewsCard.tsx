import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  category: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  learnMoreUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  category,
  date,
  title,
  description,
  imageUrl,
  learnMoreUrl,
}) => {
  return (
    <div className="h-full flex flex-col justify-between bg-white border rounded shadow-md">
      <Image width={200} height={200} src={imageUrl} className="object-cover w-full h-64" alt="" />

      <div className="p-5">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <span className="text-gray-600">— {date}</span>
        </p>
        <p className="inline-block mb-3 text-2xl font-bold leading-5 ">{title}</p>
        <p className="mb-2 text-gray-700">{description}</p>
        <Link
          href={learnMoreUrl}
          className="inline-flex items-center font-semibold transition-colors duration-200  hover:text-primary-clr">
          Full article
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
