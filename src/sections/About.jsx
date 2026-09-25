import {
  FiArrowDownRight,
  FiCheck,
  FiMapPin,
} from "react-icons/fi";

import RekhaProfile from "../assets/rekha-profile.png";

const highlights = [
  "Adobe Photoshop, Illustrator and CorelDRAW",
  "Brand identity and visual consistency",
  "Print, digital and social media creatives",
  "Client communication and timely delivery",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a] px-5 py-24 text-[#f5f1e8] sm:px-8 lg:px-16 lg:py-32"
    >
      {/* Background Effects */}
      <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#3857ff]/10 blur-[130px]" />
      <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#ff563d]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* Section Label */}
        <div className="mb-12 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 lg:mb-16">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white">
            01
          </span>
          About Me
        </div>

        {/* Heading and Profile Image */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          {/* Left Heading */}
          <div>
            <h2 className="max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] font-black leading-[1.02] tracking-[-0.06em]">
              I create visuals that make brands
              <span className="block font-serif font-normal italic text-[#ff563d]">
                clear, consistent,
              </span>
              and memorable.
            </h2>

            <a
              href="#services"
              className="mt-9 inline-flex items-center gap-2 border-b border-[#d8ff52] pb-2 text-sm font-bold text-[#d8ff52] transition-all duration-300 hover:gap-4"
            >
              Explore my services
              <FiArrowDownRight size={17} />
            </a>
          </div>

          {/* Profile Image */}
        <div className="group relative mx-auto w-full max-w-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 lg:ml-auto">
  <div className="relative h-[350px] overflow-hidden rounded-[1.5rem] sm:h-[400px]">
    <img
      src={RekhaProfile}
      alt="Rekha - Professional Graphic Designer"
      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

    <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
      Graphic Designer · 2+ Years
    </div>
  </div>
</div>
        </div>

        {/* Professional Introduction */}
        <div className="mt-16 grid gap-12 border-t border-white/10 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#d8ff52]">
              Professional Profile
            </p>

            <div className="max-w-3xl space-y-5 text-base leading-8 text-gray-400 sm:text-lg">
             <p>
  I&apos;m Rekha, a Graphic Designer with 2+ years of experience
  creating purposeful visual content for print and digital platforms.
</p>

              <p>
                Through my experience at Metropolis Media Company and Veer
                Printers, I have worked on social media creatives, posters,
                banners, visiting cards, brand materials and other
                client-focused designs.
              </p>

              <p>
                I combine typography, colour, composition and creative thinking
                to deliver visually appealing work while maintaining brand
                consistency and meeting project deadlines.
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold">
              <FiMapPin className="text-[#d8ff52]" />
              Chandigarh
            </div>
          </div>

          {/* Highlights */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#ff563d]">
              What I Bring
            </p>

            <div className="grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-white/10 py-4 text-sm text-gray-300 sm:text-base"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d8ff52] text-black">
                    <FiCheck size={15} />
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
            <strong className="text-4xl font-black text-[#ff563d]">
              9+
            </strong>
            <p className="mt-2 text-sm text-gray-500">
              Professional design services
            </p>
          </div>

          <div className="py-7 sm:px-7">
            <strong className="text-4xl font-black text-[#d8ff52]">
              04
            </strong>
            <p className="mt-2 text-sm text-gray-500">
              Core professional design tools
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;