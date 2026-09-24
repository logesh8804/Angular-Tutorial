import { useEffect, useState } from 'react'
import courses from '../../data/courses'
import { getLearningProgress } from '../../utils/progressUtils'
import CourseNavigation from './CourseNavigation'

function Sidebar() {
  const [progress, setProgress] = useState(() =>
    getLearningProgress(courses),
  )

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

  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white transition-colors duration-200 dark:border-slate-800 dark:bg-slate-950 lg:block">
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <CourseNavigation />
        </div>

        <div className="shrink-0 border-t border-slate-100 p-4 dark:border-slate-800">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              Your learning journey
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Complete lessons and build your skills step by step.
            </p>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-800 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-slate-800 transition-all duration-300 dark:bg-slate-200"
                style={{ width: `${progress.percentage}%` }}
              />
            </div>

            <p className="mt-2 text-xs text-slate-400">
              {progress.completedCount} of {progress.totalCount} lessons completed
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar