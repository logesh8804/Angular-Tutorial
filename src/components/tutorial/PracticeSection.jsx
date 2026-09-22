function PracticeSection({ description, tasks }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <p className="text-base leading-7 text-slate-700">
        {description}
      </p>

      <div className="mt-5">
        <p className="text-sm font-semibold text-slate-900">
          Your tasks
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-6 text-slate-600">
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PracticeSection