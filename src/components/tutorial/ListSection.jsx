function ListSection({ items }) {
  return (
    <ul className="list-disc space-y-2 pl-6 text-base leading-7 text-slate-700">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default ListSection