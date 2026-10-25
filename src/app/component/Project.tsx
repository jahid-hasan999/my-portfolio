

const ProjectPage = () => {
  return (
    <div>
      <section id="projects" className="bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-blue-400">
            My Work
          </p>

          <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-center text-slate-400">
            Here are some projects I have built while learning full-stack web
            development.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Project 1 */}
            <article className="rounded-2xl border border-slate-700 bg-slate-950 p-7 transition hover:-translate-y-1 hover:border-blue-500">
              <span className="text-3xl">🛒</span>

              <h3 className="mt-4 text-2xl font-bold">Bazar Dor</h3>

              <p className="mt-3 leading-7 text-slate-300">
                A market-price web application that helps users explore product
                prices and compare market rates.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'MongoDB'].map(skill => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-800 px-3 py-1 text-sm text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-4">
                <a
                  href="https://github.com/jahid-hasan999/assignment-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-500 px-4 py-2 font-medium hover:bg-blue-600"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://assignment-7-olive.vercel.app/"
                  className="rounded-lg border border-slate-600 px-4 py-2 hover:bg-slate-800"
                >
                  Live Demo
                </a>
              </div>
            </article>

            {/* Project 2 */}
            <article className="rounded-2xl border border-slate-700 bg-slate-950 p-7 transition hover:-translate-y-1 hover:border-blue-500">
              <span className="text-3xl">💻</span>

              <h3 className="mt-4 text-2xl font-bold">
                More Projects Coming Soon
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                I am continuously learning and building new projects to improve
                my development skills.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {['JavaScript', 'typeScript', 'React', 'Node.js', '...+'].map(
                  skill => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-800 px-3 py-1 text-sm text-blue-300"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>

              <a
                href="https://github.com/jahid-hasan999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block text-blue-400 hover:underline"
              >
                Explore My GitHub ↗
              </a>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;