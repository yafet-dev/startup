import Logo from "@/assets/logo.svg";
import Xsocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";
export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:flex-1">
          <div className="flex gap-2 items-center">
            <Logo className="h-6 w-6 " />
            <div className="font-medium">Web Weave Landing Page</div>
          </div>

          <nav className="flex flex-col lg:flex-row lg:gap-7 gap-5 lg:flex-1 lg:justify-center">
            <a
              href="#"
              className="text-white/70 md:text-sm hover:text-white text-xs transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/70 md:text-sm hover:text-white text-xs transition"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-white/70 md:text-sm hover:text-white text-xs transition"
            >
              Company
            </a>
            <a
              href="#"
              className="text-white/70 md:text-sm hover:text-white text-xs transition"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white/70 md:text-sm hover:text-white text-xs transition"
            >
              Changelog
            </a>
          </nav>

          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <Xsocial className="text-white/40 hover:text-white " />
            <InstaSocial className="text-white/40 hover:text-white " />
            <YTSocial className="text-white/40 hover:text-white " />
          </div>
        </div>
      </div>
    </footer>
  );
};
