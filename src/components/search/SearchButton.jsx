import { Search } from 'lucide-react'

function SearchButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hidden h-10 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-500 transition hover:border-slate-300 hover:bg-white hover:text-slate-700 md:flex"
    >
      <Search size={17} />

      <span>Search tutorials</span>

      <kbd className="ml-4 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[11px] font-medium text-slate-400">
        /
      </kbd>
    </button>
  )
}

export default SearchButton