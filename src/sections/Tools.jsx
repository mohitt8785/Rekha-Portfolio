import { FiLayers } from "react-icons/fi";
import { tools } from "../data/portfolioData";

const Tools = () => {
  return (
    <section className="border-t border-white/10 bg-[#111] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        {/* Section Label */}
        <div className="mb-12 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 lg:mb-16">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white">
            04
          </span>
          Creative Toolkit
        </div>

        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
          {/* Heading */}
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d8ff52]">
              <FiLayers size={16} />
              Tools I work with
            </p>

            <h2 className="mt-6 max-w-3xl text-[clamp(2.8rem,5.5vw,5.5rem)] font-black leading-[0.98] tracking-[-0.06em]">
              The right tool for every
              <span className="block font-serif font-normal italic text-[#ff563d]">
                visual story.
              </span>
            </h2>
          </div>

          {/* Tools List */}
          <div className="border-t border-white/15">
            {tools.map((tool, index) => (
              <div
                key={tool}
                className="group flex items-center justify-between border-b border-white/15 px-2 py-5 transition hover:bg-white/5 hover:px-5"
              >
                <span className="text-sm text-gray-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-bold text-gray-300 transition group-hover:text-white sm:text-xl">
                  {tool}
                </h3>

                <span className="h-2 w-2 rounded-full bg-[#d8ff52] opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;