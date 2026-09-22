function StepsSection({ steps }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, index) => (
        <li
          key={step}
          className="flex gap-4 text-base leading-7 text-slate-700"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
            {index + 1}
          </span>

          <span className="pt-0.5">{step}</span>
        </li>
      ))}
    </ol>
  )
}

export default StepsSection