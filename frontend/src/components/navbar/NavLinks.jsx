import { useEffect, useState } from "react";

export default function NavLinks() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "features",
      "about",
      "how-it-works",
      "testimonials",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = (section) =>
    active === section
      ? "text-cyan-400 relative cursor-pointer"
      : "hover:text-cyan-400 transition cursor-pointer";

  return (
    <ul className="flex items-center gap-8 text-[17px] font-medium">

      {/* Home */}
      <li className={navClass("home")}>

        <a href="#home">Home</a>

        {active === "home" && (
          <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-cyan-400 rounded-full"></div>
        )}

      </li>

      {/* Features */}
      <li className={navClass("features")}>

        <a href="#features">Features</a>

        {active === "features" && (
          <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-cyan-400 rounded-full"></div>
        )}

      </li>

      {/* About */}
      <li className={navClass("about")}>

        <a href="#about">About</a>

        {active === "about" && (
          <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-cyan-400 rounded-full"></div>
        )}

      </li>

      {/* How It Works */}
      <li className={navClass("how-it-works")}>

        <a href="#how-it-works">How It Works</a>

        {active === "how-it-works" && (
          <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-cyan-400 rounded-full"></div>
        )}

      </li>

      {/* Testimonials */}
      <li className={navClass("testimonials")}>

        <a href="#testimonials">Testimonials</a>

        {active === "testimonials" && (
          <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-cyan-400 rounded-full"></div>
        )}

      </li>

    </ul>
  );
}