import { BookOpen, Menu, Search, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-4 px-4 sm:px-6">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={20} />
        </button>

        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="TutorialHub home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
            <BookOpen size={19} />
          </span>

          <span className="hidden text-sm font-bold tracking-tight text-slate-900 sm:block">
            Tutorial<span className="text-slate-500">Hub</span>
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className="hidden h-10 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-500 transition hover:border-slate-300 hover:bg-white hover:text-slate-700 md:flex"
          >
            <Search size={17} />

            <span>Search tutorials</span>

            <kbd className="ml-4 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[11px] font-medium text-slate-400">
              /
            </kbd>
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Toggle theme"
          >
            <Sun size={19} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header