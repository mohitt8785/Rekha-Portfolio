import { FiArrowUpRight } from "react-icons/fi";
import { services } from "../data/portfolioData";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#f5f1e8] px-5 py-24 text-[#0a0a0a] sm:px-8 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Section Label */}
        <div className="mb-12 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 lg:mb-16">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20 text-black">
            02
          </span>
          My Services
        </div>

        {/* Heading */}
        <div className="mb-14 grid items-end gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <h2 className="text-[clamp(2.8rem,5.5vw,5.5rem)] font-black leading-[0.98] tracking-[-0.06em]">
            Creative support,
            <span className="block font-serif font-normal italic text-[#ff563d]">
              from idea to final.
            </span>
          </h2>

          <p className="max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
  Professional design solutions for brands, businesses, and creators—from
  visual identity and marketing materials to digital experiences.
</p>
        </div>

        {/* Services List */}
        <div className="border-t border-black/20">
          {services.map((service) => (
            <article
              key={service.id}
              className="group grid min-h-24 grid-cols-[45px_1fr_auto] items-center gap-3 border-b border-black/20 py-5 transition duration-300 hover:bg-[#d8ff52] hover:px-5 sm:grid-cols-[70px_0.85fr_1.15fr_auto] sm:gap-6"
            >
              {/* Number */}
              <span className="text-xs font-bold text-gray-500">
                {String(service.id).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="text-xl font-black tracking-[-0.03em] sm:text-2xl lg:text-3xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="col-span-2 pl-[48px] text-sm leading-6 text-gray-600 sm:col-span-1 sm:pl-0 sm:text-base">
                {service.description}
              </p>

              {/* Arrow */}
              <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/20 transition duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white sm:flex">
                <FiArrowUpRight size={18} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;