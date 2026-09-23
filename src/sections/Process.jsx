import {
  FiEdit3,
  FiEye,
  FiPenTool,
} from "react-icons/fi";

const processSteps = [
  {
    id: "01",
    title: "Discover",
    description:
      "Understand the brand, target audience, project requirements, and design objective.",
    icon: FiEye,
  },
  {
    id: "02",
    title: "Explore",
    description:
      "Develop creative directions through research, composition, colours, and typography.",
    icon: FiEdit3,
  },
  {
    id: "03",
    title: "Refine",
    description:
      "Improve every detail, apply feedback, and prepare final production-ready design files.",
    icon: FiPenTool,
  },
];

const Process = () => {
  return (
    <section className="bg-[#111] px-5 pb-24 text-white sm:px-8 lg:px-16 lg:pb-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 flex items-end justify-between gap-7 border-t border-white/10 pt-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8ff52]">
              How I work
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Simple creative process
            </h2>
          </div>

          <p className="hidden max-w-md text-sm leading-7 text-gray-500 md:block">
            A clear process keeps every project focused, collaborative, and
            consistent from the first idea to final delivery.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.id}
                className="group relative min-h-[290px] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-[#ff563d]">
                    <Icon size={20} />
                  </span>

                  <span className="text-xs font-bold text-gray-600">
                    {step.id}
                  </span>
                </div>

                <div className="absolute bottom-7 left-7 right-7">
                  <h3 className="text-3xl font-black tracking-[-0.04em]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;