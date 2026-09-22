function SummarySection({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-base leading-7 text-slate-700"
        >
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default SummarySection