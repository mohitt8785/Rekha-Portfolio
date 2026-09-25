import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const cardSpan = project.featured
    ? "md:col-span-2"
    : project.wide
      ? "md:col-span-2 lg:col-span-3"
      : "";

  const previewHeight = project.featured
    ? "h-[430px] sm:h-[520px]"
    : project.wide
      ? "h-[350px] sm:h-[460px]"
      : "h-[430px] sm:h-[500px]";

  return (
    <article
      className={`group overflow-hidden border border-white/10 bg-[#111] transition duration-300 hover:-translate-y-1 hover:border-white/25 ${cardSpan}`}
    >
      {/* Project Image */}
      <div
        className={`relative overflow-hidden bg-[#181818] ${previewHeight}`}
      >
        {/* Blurred Background */}
        <img
          src={project.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-2xl"
        />

        {/* Main Design */}
        <img
          src={project.image}
          alt={`${project.title} design by Rekha`}
          loading="lazy"
          className="relative z-10 h-full w-full object-contain p-3 transition duration-700 group-hover:scale-[1.025] sm:p-5"
        />

        {/* Bottom Overlay */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        {/* Project Number */}
        <span className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xs font-black text-white backdrop-blur-md">
          {project.number}
        </span>
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

          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
            {project.description}
          </p>

          {project.credit && (
            <p className="mt-4 text-xs italic text-gray-500">
              {project.credit}
            </p>
          )}
        </div>

        <a
          href={project.image}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition duration-300 group-hover:rotate-45  group-hover:text-black"
        >
          <FiArrowUpRight size={18} />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;