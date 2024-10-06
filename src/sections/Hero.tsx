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
      <div className="container">
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
