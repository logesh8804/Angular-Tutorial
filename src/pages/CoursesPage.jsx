import { Link } from 'react-router-dom'
import courses from '../data/courses'

function CoursesPage() {

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Learning path
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Courses
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Follow a structured path from web fundamentals to
          production-ready Angular applications.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {courses.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {course.title}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {course.level}
                </p>
              </div>

              <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                {course.estimatedTime}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              {course.description}
            </p>

            <div className="mt-6 text-sm font-semibold text-slate-900">
              View course →
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CoursesPage