import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
        Modern web development
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Learn to build for the web.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        Learn HTML, CSS, JavaScript, TypeScript, and Angular through
        structured lessons, practical exercises, and real-world projects.
      </p>

      <div className="mt-8">
        <Link
          to="/courses"
          className="inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Explore courses
        </Link>
      </div>
    </section>
  )
}

export default HomePage