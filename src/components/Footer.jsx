import {
  FiArrowUp,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import RekhaLogo from "../assets/rekha-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] px-5 py-8 text-white sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-7 md:flex-row md:items-center">
        {/* Branding */}
        <a href="#home" className="flex items-center gap-3">
           <img
                      src={RekhaLogo}
                      alt="Rekha Graphic Designer Logo"
                      className="h-11 w-11 object-contain"
                    />
          <span>
            <strong className="block text-sm tracking-[0.14em]">
              REKHA
            </strong>

            <small className="mt-1 block text-[10px] tracking-[0.14em] text-gray-500">
              GRAPHIC DESIGNER
            </small>
          </span>
        </a>

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Rekha. All rights reserved.
        </p>

        {/* Footer Actions */}
        <div className="flex items-center gap-3">
          {/* Add real links later */}
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:-translate-y-1 hover:bg-white hover:text-black"
          >
            <FiInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/rekha-pal-4341a5313/"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:-translate-y-1 hover:bg-white hover:text-black"
          >
            <FiLinkedin />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#d8ff52] text-black transition hover:-translate-y-1"
          >
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;