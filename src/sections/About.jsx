import {
  FiArrowDownRight,
  FiCheck,
  FiMapPin,
} from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a] px-5 py-24 text-[#f5f1e8] sm:px-8 lg:px-16 lg:py-32"
    >
      {/* Background Effects */}
      <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#3857ff]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* Section Label */}
        <div className="mb-12 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 lg:mb-16">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white">
            01
          </span>
          About Me
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          {/* Left Heading */}
          <div>
            <h2 className="max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] font-black leading-[1.02] tracking-[-0.06em]">
              Design should look good.
              <span className="block font-serif font-normal italic text-[#ff563d]">
                More importantly,
              </span>
              it should say something.
            </h2>

            <a
              href="#services"
              className="mt-9 inline-flex items-center gap-2 border-b border-[#d8ff52] pb-2 text-sm font-bold text-[#d8ff52] transition hover:gap-4"
            >
              See what I can do
              <FiArrowDownRight size={17} />
            </a>
          </div>

          {/* Right Content */}
          <div>
            <div className="space-y-5 text-base leading-8 text-gray-400 sm:text-lg">
              <p>
                I&apos;m Rekha, a Mohali-based Graphic Designer with two years
                of experience creating visual content that helps brands
                communicate clearly and confidently.
              </p>

              <p>
                My work combines composition, colour, typography, and creative
                thinking across digital and print design. I focus on creating
                visuals that are attractive, purposeful, and aligned with the
                target audience.
              </p>
            </div>

            {/* Location */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold">
              <FiMapPin className="text-[#d8ff52]" />
              Mohali, Punjab
            </div>

            {/* Highlights */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                "Digital and print design",
                "Brand-focused creativity",
                "Responsive communication",
                "Detail-oriented work",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-white/10 py-4 text-sm text-gray-300"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d8ff52] text-black">
                    <FiCheck size={14} />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 border-y border-white/10 sm:grid-cols-3">
          <div className="border-b border-white/10 py-7 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0">
            <strong className="text-4xl font-black text-white">2+</strong>
            <p className="mt-2 text-sm text-gray-500">
              Years of design experience
            </p>
          </div>

          <div className="border-b border-white/10 py-7 sm:border-b-0 sm:border-r sm:px-7">
            <strong className="text-4xl font-black text-[#ff563d]">09</strong>
            <p className="mt-2 text-sm text-gray-500">
              Professional design services
            </p>
          </div>

          <div className="py-7 sm:px-7">
            <strong className="text-4xl font-black text-[#d8ff52]">
              100%
            </strong>
            <p className="mt-2 text-sm text-gray-500">
              Focus on meaningful design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;