import Image from "next/image";
import React from "react";
import Naima from "@/public/images/team/Naima.jpg";
import Steve from "@/public/images/team/Steve2.jpg";
import Nikita from "@/public/images/team/Nikita.jpg";
import Lindsey from "@/public/images/team/Lindsey-1800x2048.jpg";
import Link from "next/link";

interface Bio {
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
}

interface Person {
  id: number;
  name: string;
  role: string;
  bio: Bio;
  image: any; // change
}

const ceo = {
  id: 1,
  name: "Naima Ben-Moussa",
  role: "Founder and CEO",
  bio: {
    paragraph1:
      "Naima is a survivor-turned-advocate who has dedicated her life to supporting domestic abuse survivors. Growing up, Naima witnessed her mother endure physical abuse and suffered abuse herself at the hands of her mother’s husbands. These experiences resulted in Naima and her siblings being placed in foster care. As a teenager, she faced further trauma, including sexual abuse and rape. The emotional pain led her to self-medicate with drugs and attempt suicide three times.",
    paragraph2:
      "Despite her traumatic past, Naima found the strength to persevere and transform her personal suffering into purposeful social action. As a trained plasterer, she began offering practical assistance to domestic abuse survivors, such as painting, plastering and home repairs, in an effort to create safe environments for them and their children. Through Rebuilding Lives UK Naima continues to support survivors in their journey to reclaim their lives, address post-abuse vulnerabilities, set new goals, and, ultimately, thrive.",
    paragraph3:
      "Naima’s work with Rebuilding Lives UK has been recognized in numerous media appearances, including BBC Radio 2 ‘s Jeremy Vine show, BBC Northampton, BBC Derby, Radio Derbyshire, Steph’s Packed Lunch (Channel 4), and the Russell Howard TV Show. She has received several awards, including the Trade Hero Award, Plasterer of the Year, and a Special Recognition Award. Naima was also nominated for the Women of the Year Award.",
  },
  image: Naima,
};

const peopleData: Person[] = [
  {
    id: 2,
    name: "Steve McKenna",
    role: "",
    bio: {
      paragraph1:
        "Trained by BBC News, Steve McKenna is an award-winning journalist and broadcaster who was part of the team that marketed the Spice Girls. His life and professional experiences are daring and diverse.",
      paragraph2:
        "Steve has had a hit record, has presented shows for every major TV channel in the UK and broadcasted illegally from Cuba for BBC Radio 1. He once spent a day with George Clooney, Brad Pitt and Matt Damon. He was the one who introduced Shirley Manson to Butch Vig – instigating the formation of the group Garbage – and Quentin Tarantino to Paul Haggis. Steve has broadcasted live from the Oscars for BBC News and his creative, imaginative talent has also been expressed in comedy scripts for the radio.",
      paragraph3:
        "His mother was a faith healer and his father an opera singer turned private detective. Steve has ADHD but this didn’t stop him from earning a doctorate in Metaphysics. Currently, Steve runs a podcast studio, does movie voice-overs, trains people in confidence and presentation skills and has a multi-award-winning events company.",
    },
    image: Steve,
  },
  {
    id: 3,
    name: "Nikita Mckee",
    role: "",
    bio: {
      paragraph1:
        "Nikita has many years of experience in the Health and Social Care field and extensive project management experience within the domestic abuse sector.",
      paragraph2:
        "Domestic abuse is a cause that has always been close to Nikita’s heart. This emotional affinity is the motivating factor behind her decision to join the Rebuild Lives UK Trustee team and contribute to the success of the charity with her determination, leadership skills and her positive, vibrant energy.",
      paragraph3:
        "In her spare time Nikita enjoys badminton, kickboxing, yoga and mindfulness, as she finds that these activities challenge her mentally and physically but also provide her with the opportunity to relax and reflect. She also enjoys reading and her most recent favourites are: “Humble Enquiry: The gentle Art of Asking instead of Telling”, by Edgar H. Shine and “The Body Keeps the Score”, by Bessel van der Kolk.",
    },
    image: Nikita,
  },
  {
    id: 4,
    name: "Lindsey Robinson",
    role: "",
    bio: {
      paragraph1:
        "Lindsey’s relationship with Rebuilding Lives UK started during lockdown. One day she was working from home and listening to the Jeremy Vine show on BBC Radio 2. Jeremy was interviewing the ‘Lady in Red’ plasterer. Naima was talking about her lived experience of domestic abuse and how having recently met other people with similar traumatic experiences motivated her to utilise her trade to rebuild their homes and help them start a new life.",
      paragraph2:
        "Lindsey was really inspired not only by Naima’s journey but also her determination to create a safe environment for people and families who had experienced domestic abuse. She decided to message Naima right then and there and the rest is history.",
      paragraph3:
        "Lindsey has worked in the third sector for 26 years. In the last 20 years she has been collaborating with the P3 Charity in varied roles. Currently, Lindsey is managing accommodation-based services in the Northwest region and Stoke-on-Trent for young people and adults experiencing accommodation challenges and having nowhere to call home. In addition, she is the leader of a core department that supports the charity’s strategy and delivery around involvement and engagement and is responsible for P3’s national programme for volunteers. Lindsey also promotes collaboration and coproduction and is passionate about people with lived experience shaping service delivery.",
    },
    image: Lindsey,
  },
];

const PersonCard: React.FC<Person> = ({ name, role, image, bio }) => {
  return (
    <li className="border shadow-md h-fit">
      <div className="aspect-[3/2]">
        <Image
          width={image.width}
          height={image.height}
          className="object-cover w-full h-full"
          src={image.src}
          alt={name}
        />
      </div>
      <div className="p-4">
        <div className="flex flex-col items-start justify-between w-full gap-4 ">
          <h3 className="text-xl font-medium leading-6 mt-2">{name}</h3>
          <p className="text-base text-gray-700">{role}</p>
        </div>

        <ul role="list" className="flex flex-col gap-4">
          <li className="whitespace-nowrap overflow-hidden overflow-ellipsis">{bio.paragraph1}</li>
        </ul>
        <br />
        <Link className="underline font-medium" href="/more">
          Read more
        </Link>
      </div>
    </li>
  );
};

const PeopleSection: React.FC = () => {
  return (
    <section>
      <div className="items-center w-full px-5 pt-12 pb-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <ul>
          <PersonCard {...ceo} />
        </ul>
        <br />
        <ul
          role="list"
          className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          {peopleData.map((person, index) => (
            <PersonCard key={index} {...person} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PeopleSection;
