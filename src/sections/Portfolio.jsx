import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolioData";

const Portfolio = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#0a0a0a] px-5 py-24 text-[#f5f1e8] sm:px-8 lg:px-16 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-[#3857ff]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* Section Label */}
        <div className="mb-12 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 lg:mb-16">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white">
            03
          </span>
          Selected Work
        </div>

        {/* Heading */}
        <div className="mb-14 grid items-end gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <h2 className="text-[clamp(2.8rem,5.5vw,5.5rem)] font-black leading-[0.98] tracking-[-0.06em]">
            Built to be seen.
            <span className="block font-serif font-normal italic text-[#ff563d]">
              Designed to be remembered.
            </span>
          </h2>

          <div>
            <p className="max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              A selection of creative concepts across social media, branding,
              packaging, posters, thumbnails, and UI design.
            </p>

            <span className="mt-4 inline-flex rounded-full border border-[#ff563d]/30 bg-[#ff563d]/10 px-4 py-2 text-xs font-bold text-[#ff826f]">
              Demo projects—real creatives will be added later
            </span>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;