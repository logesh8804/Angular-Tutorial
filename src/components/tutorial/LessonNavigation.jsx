import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function LessonNavigation({ previous, next, courseSlug }) {
  return (
    <nav
      aria-label="Lesson navigation"
      className="mt-16 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          to={`/courses/${courseSlug}/${previous.moduleSlug}/${previous.slug}`}
          className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-md"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <ArrowLeft size={14} />

            <span>Previous</span>
          </div>

          <p className="mt-3 text-sm font-semibold text-slate-800 transition group-hover:text-slate-950">
            {previous.title}
          </p>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          to={`/courses/${courseSlug}/${next.moduleSlug}/${next.slug}`}
          className="group rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-slate-300 hover:shadow-md sm:text-right"
        >
          <div className="flex items-center justify-end gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span>Next</span>

            <ArrowRight size={14} />
          </div>

          <p className="mt-3 text-sm font-semibold text-slate-800 transition group-hover:text-slate-950">
            {next.title}
          </p>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}

export default LessonNavigation