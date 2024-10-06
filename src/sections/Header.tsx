import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div>
          <div className="flex justify-between items-center border">
            <div>
              <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
                <LogoIcon className="border h-8 w-8 " />
              </div>
            </div>

            <div>
              <nav className="flex gap-8  transition">
                <a href="#" className=" text-white/70 hover:text-white">
                  Features
                </a>
                <a href="#" className=" text-white/70 hover:text-white">
                  Developers
                </a>
                <a href="#" className=" text-white/70 hover:text-white">
                  Pricing
                </a>
                <a href="#" className=" text-white/70 hover:text-white">
                  Changelog
                </a>
              </nav>
            </div>

            <div className="flex gap-4 items-center">
              <button
                className="relative py-2 px-3 rounded-lg font-medium
              text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]"
              >
                <div className="absolute inset-0">
                  <div className="border border-white/20 aboslute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                  <div className="border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                  <div className="absolute shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
                </div>
                <span>Join waitlist</span>
              </button>
              <span>
                <MenuIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
