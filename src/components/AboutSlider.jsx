"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const AboutSlider = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    (<div className="w-full h-full py-6">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl text-center md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
   
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}

const DummyContent = () => {
  return (<>
    {[...new Array(3).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <Image
            src="https://i.ibb.co.com/jzK5jKZ/1905-MZN-BLOOM-01-edited-sfw.jpg"
            alt=""
            height="400"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
        </div>)
      );
    })}
  </>);
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://i.ibb.co.com/HxXfQxk/72bd56e69dd24beac7619502109ed023.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://i.ibb.co.com/0sh0jBH/3daf66548df969d2dadff3a219cda565.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://i.ibb.co.com/Jcj8qp6/mediterranean-restaurant-ambiance-an-outdoor-dinner-vertical-mobile-wallpaper-ai-generated-free-phot.jpg",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://i.ibb.co.com/xsZbhTq/images.jpg",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://i.ibb.co.com/xsZbhTq/images.jpg",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://i.ibb.co.com/dWx9M7q/illustration-modern-cafe-restaurant-living-wall-greenery-biophilic-design-vertical-gardening-eco-fri.webp",
    content: <DummyContent />,
  },
];
export default AboutSlider;
