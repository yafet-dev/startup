import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";
export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none mb-4 md:-mb-12 sticky top-0 z-10 ">
      <div className="absolute inset-0 backdrop-blur-sm -z-10 md:hidden"></div>
      <div className="container">
        <div>
          <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur-md">
            <div>
              <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
                <LogoIcon className="border h-8 w-8 " />
              </div>
            </div>

            <div className="hidden md:block">
              <nav className="flex gap-8 text-sm">
                <a
                  href="#"
                  className=" text-white/70 hover:text-white transition"
                >
                  Features
                </a>
                <a
                  href="#"
                  className=" text-white/70 hover:text-white transition"
                >
                  Developers
                </a>
                <a
                  href="#"
                  className=" text-white/70 hover:text-white transition"
                >
                  Pricing
                </a>
                <a href="#" className=" text-white/70 hover:text-white">
                  Changelog
                </a>
              </nav>
            </div>

            <div className="flex gap-4 items-center">
              <Button>Join waitlist</Button>
              <span>
                <MenuIcon className="md:hidden" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
