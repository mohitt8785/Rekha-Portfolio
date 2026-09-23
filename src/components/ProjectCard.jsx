import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <article
      className={`group overflow-hidden border border-white/10 bg-[#111] ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Project Preview */}
      <div
        className={`relative overflow-hidden p-6 sm:p-8 ${
          project.featured
            ? "min-h-[390px] sm:min-h-[500px]"
            : "min-h-[390px] sm:min-h-[460px]"
        }`}
        style={{
          background: project.background,
          color: project.foreground,
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <>
            {/* Decorative Circles */}
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-current opacity-20" />

            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full border border-current opacity-20" />

            <div className="absolute bottom-[18%] right-[8%] h-28 w-28 rotate-12 border border-current opacity-20" />

            {/* Top Information */}
            <div className="relative z-10 flex items-start justify-between">
              <span className="text-xs font-black tracking-[0.18em]">
                {project.label}
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-current">
                {project.number}
              </span>
            </div>

            {/* Main Visual Text */}
            <div className="absolute bottom-8 left-6 right-6 z-10 sm:bottom-10 sm:left-8 sm:right-8">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] opacity-60">
                Creative concept
              </p>

              <h3
                className={`font-black leading-[0.86] tracking-[-0.06em] ${
                  project.featured
                    ? "max-w-3xl text-[clamp(3.5rem,8vw,7.5rem)]"
                    : "text-[clamp(2.8rem,5vw,5rem)]"
                }`}
              >
                {project.headline}
              </h3>
            </div>

            {/* Large Background Number */}
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12rem] font-black leading-none opacity-[0.05] sm:text-[17rem]">
              {project.number}
            </span>
          </>
        )}
      </div>

      {/* Project Information */}
      <div className="flex items-start justify-between gap-5 p-6 sm:p-7">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d8ff52]">
            {project.category}
          </p>

          <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white">
            {project.title}
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400">
            {project.description}
          </p>
        </div>

        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
          <FiArrowUpRight size={18} />
        </span>
      </div>
    </article>
  );
};

export default ProjectCard;