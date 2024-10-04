import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15">
      <div className="container">
        <div>
          <div className="flex justify-between">
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="border h-8 w-8 " />
            </div>

            <div className="flex gap-4 items-center">
              <button
                className="border py-2 px-3 rounded-lg font-medium
              text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a]"
              >
                Join waitlist
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
