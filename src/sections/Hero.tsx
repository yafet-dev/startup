import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
      }}
    >
      {/* Start planet */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(140,69,255,0.5)_15%,rgba(14,0,36,0.5)_78%,transparent)]"></div>

      {/*  */}
      <div
        className="absolute md:h-96 md:w-96 bg-purple-500 h-64 w-64 rounded-full border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white/20 
  bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(182,148,255)_37.7%,rgb(24,0,66))] 
  shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]"
      ></div>
      {/* End Planet */}
      {/* Start Ring 1 */}

      <div className="absolute w-[344px] h-[344px] md:h-[580px] md:w-[580px] opacity-20 border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-full absolute h-2 w-2 left-0 bg-white top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="rounded-full absolute h-2 w-2 left-1/2 bg-white top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="rounded-full absolute h-5 w-5 left-full border border-white top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center ">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/*End Ring 1 */}
      {/*  Start Ring two*/}
      <div
        className="absolute h-[444px] w-[444px]  md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2 border-dashed"
      ></div>
      {/*End Ring 2  */}
      {/*Start Ring 3 */}
      <div className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] opacity-20 rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-full absolute h-2 w-2 left-0 bg-white top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="rounded-full absolute h-2 w-2 left-full bg-white top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="container relative mt-16">
        <h1
          className="text-8xl md:text-[148px] font-semibold tracking-tighter bg-white text-transparent bg-clip-text text-center 
        bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]"
        >
          Web Weave
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/70 mt-5  text-center ">
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
