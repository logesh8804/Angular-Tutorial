function LessonHeader({
  courseTitle,
  moduleTitle,
  title,
  description,
  difficulty,
  estimatedTime,
}) {
  return (
    <header>
      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        <span>{courseTitle}</span>
        <span className="text-slate-300">/</span>
        <span>{moduleTitle}</span>
      </div>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {difficulty}
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {estimatedTime} min
        </span>
      </div>
    </header>
  )
}

export default LessonHeader