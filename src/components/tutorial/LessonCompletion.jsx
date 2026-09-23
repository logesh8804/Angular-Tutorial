import { CheckCircle2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  isLessonCompleted,
  markLessonCompleted,
  notifyProgressChanged,
  unmarkLessonCompleted,
} from '../../utils/progressUtils'

function LessonCompletion({ lessonId }) {
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    setCompleted(isLessonCompleted(lessonId))
  }, [lessonId])

  const handleToggle = () => {
    if (completed) {
        unmarkLessonCompleted(lessonId)
        setCompleted(false)
        notifyProgressChanged()
        return
    }

    markLessonCompleted(lessonId)
    setCompleted(true)
    notifyProgressChanged()
}

  return (
    <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            {completed
              ? 'Lesson completed'
              : 'Finished this lesson?'}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {completed
              ? 'You can mark it incomplete if you want to review it again.'
              : 'Mark this lesson as complete to track your progress.'}
          </p>
        </div>

        <button
          type="button"
          onClick={handleToggle}
          className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
            completed
              ? 'border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          <CheckCircle2 size={17} />

          {completed
            ? 'Completed'
            : 'Mark as complete'}
        </button>
      </div>
    </div>
  )
}

export default LessonCompletion