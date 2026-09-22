import { Link, useParams } from 'react-router-dom'
import { getCourseBySlug } from '../utils/courseUtils'

function CourseOverviewPage() {
  const { courseSlug } = useParams()
  const course = getCourseBySlug(courseSlug)

  if (!course) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-2xl font-bold text-slate-900">
          Course not found
        </h1>

        <Link
          to="/courses"
          className="mt-4 inline-block text-sm font-semibold text-slate-700 underline"
        >
          Back to courses
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Course
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
          {course.title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          {course.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {course.level}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {course.estimatedTime}
          </span>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        {course.modules.map((module, moduleIndex) => (
          <section key={module.id}>
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Module {moduleIndex + 1}
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900">
                {module.title}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {module.description}
              </p>
            </div>

            <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
              {module.topics.map((topic) => (
                <Link
                  key={topic.id}
                  to={`/courses/${course.slug}/${module.slug}/${topic.slug}`}
                  className="flex items-center justify-between gap-4 p-4 transition hover:bg-slate-50"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      {topic.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {topic.difficulty} · {topic.estimatedTime} min
                    </p>
                  </div>

                  <span className="text-slate-400">→</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default CourseOverviewPage