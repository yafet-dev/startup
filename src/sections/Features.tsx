"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import { useRef } from "react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (tab: (typeof tabs)[number]) => {
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };
  return (
    <div
      onMouseEnter={handleTabHover}
      key={tab.title}
      className="border border-white/15 flex flex-col lg:flex-row justify-center  items-center flex-1 p-2.5 rounded-xl gap-2.5 relative"
    >
      <div className="absolute inset-0 -m-px border rounded-xl border-[#ac69ff]/70 [mask-image:radial-gradient(80px_80px_at_0%_0%,black,transparent)]"></div>
      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={tab.icon}
          className="h-5 w-5"
          autoplay
        />
      </div>
      <div className="font-medium">{tab.title}</div>
      {tab.isNew && (
        <div className="text-xs px-2 max-h-4 bg-purple-700 text-black font-semibold rounded-full">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center font-medium tracking-tighter">
          Elevate your SEO efforts
        </h2>
        <p className="text-white/70 md:text-xl max-w-2xl mx-auto text-lg tracking-tight text-center mt-5">
          From small startups to large enterprises, our AI-driven tools has
          revolutionzied the way businesses approach SEO
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab) => (
            <FeatureTab {...tab} key={tab.title} />
          ))}

          {/* <Image src={productImage} alt="product iamge" /> */}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border rounded-lg border-white/20"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
