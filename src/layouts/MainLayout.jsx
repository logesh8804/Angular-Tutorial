import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import Header from '../components/layout/Header'
import CourseNavigation from '../components/layout/CourseNavigation'
import Sidebar from '../components/layout/Sidebar'
import { getLearningProgress } from '../utils/progressUtils'
import courses from '../data/courses'

function MainLayout({ children, theme, onThemeChange, }) {  
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [progress, setProgress] = useState(() =>
    getLearningProgress(courses),
  )

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleProgressChange = () => {
      setProgress(getLearningProgress(courses))
    }

    window.addEventListener(
      'tutorialhub-progress-changed',
      handleProgressChange,
    )

    return () => {
      window.removeEventListener(
        'tutorialhub-progress-changed',
        handleProgressChange,
      )
    }
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
      <Header onMenuClick={() => setIsMobileMenuOpen(true)} theme={theme} onThemeChange={onThemeChange} />

      <div className="mx-auto flex max-w-[1600px]">
        <Sidebar />

        <main className="min-w-0 flex-1">
          {children}
        </main>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            onClick={closeMobileMenu}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
            aria-label="Close navigation"
          />

          <aside className="relative flex h-full w-[min(22rem,88vw)] flex-col bg-white shadow-2xl">
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 px-4">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Course navigation
                </p>

                <p className="text-xs text-slate-500">
                  Explore the learning path
                </p>
              </div>

              <button
                type="button"
                onClick={closeMobileMenu}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close navigation"
              >
                <X size={19} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-6">
              <CourseNavigation onNavigate={closeMobileMenu} />
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">
                Your learning journey
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Complete lessons and build your skills step by step.
              </p>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-slate-800 transition-all duration-300"
                  style={{ width: `${progress.percentage}%` }}
                />
              </div>

              <p className="mt-2 text-xs text-slate-500">
                {progress.completedCount} of {progress.totalCount} lessons completed
              </p>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

export default MainLayout