import { BookOpen, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'

function LessonHeader({ courseSlug, moduleSlug, courseTitle, moduleTitle, title, description, difficulty, estimatedTime, }) {
  return (
    <header>
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
      >
        <Link
          to="/courses"
          className="transition hover:text-slate-900"
        >
          Courses
        </Link>

        <span className="text-slate-300">/</span>

        <Link
          to={`/courses/${courseSlug}`}
          className="transition hover:text-slate-900"
        >
          {courseTitle}
        </Link>

        <span className="text-slate-300">/</span>

        <span className="text-slate-400">
          {moduleTitle}
        </span>
      </nav>

      <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
          <BookOpen size={14} />

          {difficulty}
        </span>

        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
          <Clock3 size={14} />

          {estimatedTime} min
        </span>
      </div>
    </header>
  )
}

export default LessonHeader