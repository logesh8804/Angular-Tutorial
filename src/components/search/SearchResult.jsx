import { BookOpen, ChevronRight, FileText, Layers3, } from 'lucide-react'

const iconMap = {
  course: BookOpen,
  module: Layers3,
  lesson: FileText,
}

function SearchResult({ result, onSelect }) {
  const Icon = iconMap[result.type] ?? FileText

  return (
    <button
      type="button"
      onClick={() => onSelect(result)}
      className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-slate-50"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition group-hover:bg-slate-200 group-hover:text-slate-700">
        <Icon size={17} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold text-slate-800">
          {result.title}
        </span>

        <span className="mt-0.5 block truncate text-xs text-slate-500">
          {result.type}
          {result.description && ` · ${result.description}`}
        </span>
      </span>

      <ChevronRight
        size={16}
        className="shrink-0 text-slate-300 transition group-hover:text-slate-500"
      />
    </button>
  )
}

export default SearchResult