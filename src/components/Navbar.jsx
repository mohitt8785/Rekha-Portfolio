import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import RekhaLogo from "../assets/rekha-logo.png";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Work", link: "#work" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <img
            src={RekhaLogo}
            alt="Rekha Graphic Designer Logo"
            className="h-11 w-11 object-contain"
          />

          <span>
            <strong className="block text-sm tracking-[0.14em] text-white">
              REKHA
            </strong>

            <small className="mt-1 block text-[10px] tracking-[0.14em] text-gray-500">
              GRAPHIC DESIGNER
            </small>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-sm font-semibold text-gray-400 transition hover:text-[#d8ff52]"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-white px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black md:flex"
        >
          Let&apos;s Talk
          <FiArrowUpRight />
        </a>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0a0a0a] transition-all duration-300 md:hidden ${menuOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-2 px-5 py-5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#d8ff52] px-5 py-3 font-bold text-black"
          >
            Let&apos;s Talk
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;