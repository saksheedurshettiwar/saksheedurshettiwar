export default function About() {
  return (
    <div className="pt-20">
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl text-zinc-600 leading-relaxed mb-6">
              Hi, I am Ananya, a product designer with 2.5+ years of experience in UX research and data-driven design decision making.
            </p>
            <p className="text-xl text-zinc-600 leading-relaxed mb-6">
              Along with having a background in Computer Science and AI, I am currently pursuing HCI/d from Indiana University Bloomington.
            </p>
            <p className="text-xl text-zinc-600 leading-relaxed">
              I believe in building products that are not just visually appealing but also solve real problems for real users.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-3">Skills</h3>
              <ul className="space-y-2 text-zinc-600">
                <li>• User Research & Testing</li>
                <li>• Product Strategy</li>
                <li>• Interaction Design</li>
                <li>• Prototyping & Wireframing</li>
                <li>• Design Systems</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Education</h3>
              <div className="space-y-4 text-zinc-600">
                <div>
                  <p className="font-medium text-black">Indiana University Bloomington</p>
                  <p className="text-sm">MS in HCI/d | 2024 - 2026</p>
                </div>
                <div>
                  <p className="font-medium text-black">B.Tech in Computer Science</p>
                  <p className="text-sm">Specialization in AI | 2020 - 2024</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Experience</h3>
              <div className="space-y-4 text-zinc-600">
                <div>
                  <p className="font-medium text-black">MakeMyTrip</p>
                  <p className="text-sm">Product Designer | 2023 - Present</p>
                </div>
                <div>
                  <p className="font-medium text-black">Accolode</p>
                  <p className="text-sm">UX Designer Intern | 2022 - 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
