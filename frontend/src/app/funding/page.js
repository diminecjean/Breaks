"use client";

import { Cover } from "@/components/ui/cover";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Tabs } from "@/components/ui/tabs";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { GlareCard } from "@/components/ui/glare-card";

import Image from "next/image";

export const stats = [
    {
      title: "120",
      description:
        "Projects",
      link: "https://stripe.com",
    },
    {
      title: "50K USDT",
      description:
        "Matching Pool",
      link: "https://stripe.com",
    },
    {
      title: "10K USDT",
      description:
        "Total Contributions",
      link: "https://netflix.com",
    },
    {
      title: "333",
      description:
        "Cool Contributors",
      link: "https://netflix.com",
    },
  ];


  const FundingCard = ({ text, title, description, buttonText }) => {
    return (
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        
            <EvervaultCard text={text} />
        
            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                {title}
            </h2>
            <p className="dark:text-white text-black mt-4 text-sm font-light">
                {description}
            </p>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                {buttonText}
            </p>
        </div>
    );
};

const FundingProjects = [
  {
      text: "ETHKL",
      title: "Hover over this card to reveal an awesome effect.",
      description: "Running out of copy here.",
      buttonText: "Fund this project",
      category: "tools"
  },
  {
      text: "click",
      title: "Click on this card to reveal more details.",
      description: "More copy needed here.",
      buttonText: "Support this project",
      category: "education"
  },
  {
    text: "click",
    title: "Click on this card to reveal more details.",
    description: "More copy needed here.",
    buttonText: "Support this project",
    category: "research"
  },
];

const words = [
  {
    text: "Support",
  },
  {
    text: "these",
  },
  {
    text: "Cool",
  },
  {
    text: "Communities.",
    className: "text-green-800",
  },
];

const FundingPage = () => {
  return (
      <div className="my-16 max-w-7xl mx-auto text-center item-center pb-24"> {/* Added pb-24 for bottom padding */}
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              Unleash the potential of <Cover>Quadratic Funding</Cover>
          </h1>
          <div className="max-w-6xl mx-auto px-8">
              <HoverEffect items={stats} />
          </div>
          <TypewriterEffect words={words} className="text-sm"/>
          <div className="mx-auto my-12 grid md:grid-cols-3 grid-cols-1 gap-6"> {/* Added gap-6 for space between cards */}
              {FundingProjects.map((card, index) => (
                  <FundingCard
                      key={index}
                      text={card.text}
                      title={card.title}
                      description={card.description}
                      buttonText={card.buttonText}
                  />
              ))}
              <GlareCard className="flex flex-col items-center justify-center">
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
        />
      </svg>
      <Image
                src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=1250,height=357.14285714285717/calendar-cover-images/4i/efe41956-0d33-485d-975f-7c5c47a5c2d2"
                height="600"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
            />
      <p className="text-white font-bold text-xl mt-4">Aceternity</p>
    </GlareCard>
          </div>
      </div>
  );
};

export default FundingPage;