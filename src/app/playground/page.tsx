export default function Playground() {
  const experiments = [
    {
      title: "Micro-interactions",
      description: "A collection of delightful UI animations and transitions.",
      tags: ["Animation", "React"],
    },
    {
      title: "Design Tokens",
      description: "Exploring systematic approaches to design consistency.",
      tags: ["Design System", "CSS"],
    },
    {
      title: "Data Visualization",
      description: "Creative approaches to presenting complex data.",
      tags: ["D3.js", "SVG"],
    },
    {
      title: "Typography Study",
      description: "Deep dive into type systems and font pairing.",
      tags: ["Typography", "CSS"],
    },
  ];

  return (
    <div className="pt-20">
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Playground
        </h1>
        <p className="text-xl text-zinc-500 mb-12">
          A space for experimentation, prototypes, and creative exploration.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment) => (
            <div
              key={experiment.title}
              className="p-6 border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:bg-zinc-50 transition-all cursor-pointer"
            >
              <div className="w-full h-40 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-zinc-400 text-sm">Coming soon</span>
              </div>
              <h3 className="font-semibold mb-2">{experiment.title}</h3>
              <p className="text-sm text-zinc-600 mb-4">{experiment.description}</p>
              <div className="flex flex-wrap gap-2">
                {experiment.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-2 py-1 bg-zinc-100 rounded text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
