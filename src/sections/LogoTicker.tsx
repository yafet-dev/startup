import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";

export const LogoTicker = () => {
  return (
    <section>
      <div className="container">
        <div>
          <h2>Trusted by top innovate teams</h2>
          <div>
            {[
              acmeLogo,
              pulseLogo,
              echoLogo,
              quantumLogo,
              celestialLogo,
              apexLogo,
            ].map((logo) => (
              <img src={logo.src} key={logo.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
