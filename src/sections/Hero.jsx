import {
  FiArrowDownRight,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] px-5 pb-16 pt-28 text-[#f5f1e8] sm:px-8 lg:px-16 lg:pt-32"
    >
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1500px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* Left Content */}
        <div className="relative z-10">
          <div className="hero-reveal hero-delay-1 mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d8ff52]">
            <span className="hero-status-dot h-2 w-2 rounded-full bg-[#d8ff52]" />
            Graphic Designer · Chandigarh
          </div>

          <h1 className="hero-reveal hero-delay-2 text-[clamp(3.6rem,8vw,8rem)] font-black uppercase leading-[0.84] tracking-[-0.075em]">
            Ideas into
            <span className="mt-2 block font-serif font-normal normal-case italic text-[#ff563d]">
              visual impact.
            </span>
          </h1>

          <p className="hero-reveal hero-delay-3 mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I create bold and thoughtful visuals for brands—from social media
            campaigns and identity systems to packaging and digital
            experiences.
          </p>

          {/* Buttons */}
          <div className="hero-reveal hero-delay-4 mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/20 px-8 font-bold hover:border-[#d8ff52] hover:bg-[#d8ff52]  transition duration-300 hover:-translate-y-1 hover:border-[#d8ff52]"
            >
              <span className="text-white transition-colors duration-300 group-hover:text-black">
                View My Work
              </span>

              <FiArrowDownRight className="text-white transition-colors duration-300 group-hover:text-black" />
            </a>

            <a
              href="/Rekha-Resume.pdf"
              download="Rekha-Resume.pdf"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/20 px-8 font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-[#d8ff52] hover:text-[#d8ff52]"
            >
              Download Resume
              <FiArrowRight />
            </a>
          </div>

          {/* Statistics */}
          <div className="hero-reveal hero-delay-5 mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-7">
            <div>
              <strong className="block text-2xl font-black text-white">
                2+
              </strong>
              <span className="mt-1 block text-xs leading-5 text-gray-500">
                Years of experience
              </span>
            </div>

            <div>
              <strong className="block text-2xl font-black text-white">
                50+
              </strong>

              <span className="mt-1 block text-xs leading-5 text-gray-500">
                Designs delivered
              </span>
            </div>

            <div>
              <strong className="block text-lg font-black text-[#d8ff52] sm:text-xl">
                Digital + Print
              </strong>
              <span className="mt-1 block text-xs leading-5 text-gray-500">
                Design expertise
              </span>
            </div>
          </div>
        </div>

        {/* Right Creative Design */}
        <div className="hero-art-reveal relative mx-auto h-[460px] w-full max-w-[620px] sm:h-[590px]">
          {/* Animated Circles */}
          <div className="hero-orbit-slow absolute inset-[5%] rounded-full border border-white/15" />

          <div className="hero-orbit-reverse absolute inset-[16%] rounded-full border border-dashed border-white/15" />

          {/* Main Poster */}
          <div className="hero-poster absolute bottom-[8%] left-[8%] right-[10%] top-[14%] flex flex-col justify-between overflow-hidden bg-[#ff563d] p-7 text-black shadow-2xl sm:p-11">
            <div className="relative z-10 flex items-center justify-between text-xs font-black tracking-[0.16em]">
              <span>DESIGN</span>
              <FiCheckCircle size={20} />
            </div>

            <h2 className="relative z-10 text-[clamp(3rem,6vw,5.3rem)] font-black leading-[0.82] tracking-[-0.07em]">
              THAT
              <br />
              MOVES
              <br />
              PEOPLE.
            </h2>

            <p className="relative z-10 text-xs font-black tracking-[0.14em]">
              REKHA · 2026
            </p>

            <span className="absolute -bottom-24 -right-10 text-[19rem] font-black leading-none text-black/10">
              R
            </span>
          </div>

          {/* Blue Card */}
          <div className="hero-blue-card absolute right-0 top-[3%] flex h-24 w-24 items-center justify-center bg-[#3857ff] text-xs font-black text-white shadow-xl sm:h-36 sm:w-36 sm:text-base">
            BRAND
          </div>

          {/* Green Circle */}
          <div className="hero-green-circle absolute bottom-0 left-0 flex h-24 w-24 items-center justify-center rounded-full bg-[#d8ff52] text-xs font-black text-black shadow-xl sm:h-36 sm:w-36 sm:text-base">
            SOCIAL
          </div>

          {/* Available Label */}
          <div className="hero-available absolute bottom-[5%] right-0 bg-[#f5f1e8] px-4 py-3 text-xs font-black text-black shadow-xl">
            AVAILABLE FOR WORK
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;