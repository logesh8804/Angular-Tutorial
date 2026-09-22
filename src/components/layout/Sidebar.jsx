import CourseNavigation from './CourseNavigation'

function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white lg:block">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="px-4 py-6">
          <div className="mb-5 px-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Courses
            </p>
          </div>

          <CourseNavigation />

          <div className="mt-8 border-t border-slate-100 pt-6">
            <p className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Learning
            </p>

            <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">
                Your learning journey
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Complete lessons and build your skills step by step.
              </p>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-1/5 rounded-full bg-slate-800" />
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Getting started
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar