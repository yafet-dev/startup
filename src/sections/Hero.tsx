import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="h-[492px] flex items-center"
      style={{
        backgroundImage: `url(${starsBg.src})`,
      }}
    >
      <div
        className="absolute h-64 w-64 bg-purple-500 rounded-full border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white/20
      bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(182,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,0.1)]"
      ></div>
      <div className="container relative">
        <h1
          className="text-8xl font-semibold tracking-tighter bg-white text-transparent bg-clip-text text-center 
        bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]"
        >
          Web Weave
        </h1>
        <p className="text-lg text-white/70 mt-5  text-center ">
          We build stunning websites, manage social media, and craft unique
          logos and brand identities that make your business stand out online.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </section>
  );
};
