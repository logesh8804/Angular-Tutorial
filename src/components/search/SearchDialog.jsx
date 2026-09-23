import { Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchContent } from '../../utils/searchUtils'
import SearchResult from './SearchResult'

function SearchDialog({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (!isOpen) {
      setQuery('')
      return
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  const results = searchContent(query)

  const handleSelect = (result) => {
    navigate(result.url)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
        aria-label="Close search"
      />

      <div className="relative mx-auto mt-20 w-[min(42rem,calc(100vw-2rem))]">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center gap-3 border-b border-slate-200 px-4">
            <Search
              size={19}
              className="shrink-0 text-slate-400"
            />

            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search tutorials..."
              autoFocus
              className="h-14 min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />

            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close search"
            >
              <X size={17} />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-2">
            {!query.trim() && (
              <div className="px-3 py-8 text-center">
                <Search
                  size={28}
                  className="mx-auto text-slate-300"
                />

                <p className="mt-3 text-sm font-medium text-slate-600">
                  Search the learning path
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Find courses, modules, and lessons.
                </p>
              </div>
            )}

            {query.trim() && results.length === 0 && (
              <div className="px-3 py-8 text-center">
                <p className="text-sm font-medium text-slate-600">
                  No results found
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Try a different search term.
                </p>
              </div>
            )}

            {results.length > 0 && (
              <div className="space-y-1">
                {results.map((result) => (
                  <SearchResult
                    key={`${result.type}-${result.id}`}
                    result={result}
                    onSelect={handleSelect}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-2.5">
            <span className="text-[11px] text-slate-400">
              Search tutorials
            </span>

            <kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[11px] font-medium text-slate-400">
              Esc
            </kbd>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchDialog