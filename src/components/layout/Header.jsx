import { BookOpen, Menu, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchButton from '../search/SearchButton'
import SearchDialog from '../search/SearchDialog'

function Header({ onMenuClick }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target

      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable

      if (isTyping) {
        return
      }

      if (event.key === '/') {
        event.preventDefault()
        setIsSearchOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
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
            <SearchButton
              onClick={() => setIsSearchOpen(true)}
            />

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

      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  )
}

export default Header