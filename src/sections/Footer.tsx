import Logo from "@/assets/logo.svg";
import Xsocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";
export const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <Logo />
          <div>Web Weave Landing Page</div>
        </div>
        <div>
          <nav>
            <a href="#">Features</a>
            <a href="#">Developers</a>
            <a href="#">Company</a>
            <a href="#">Blog</a>
            <a href="#">Changelog</a>
          </nav>
        </div>
        <div>
          <Xsocial />
          <InstaSocial />
          <YTSocial />
        </div>
      </div>
    </footer>
  );
};
