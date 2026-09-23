import { Braces, CheckCircle2, ChevronDown, ChevronRight, Code2, FileCode2, Globe, Layers3, Lock, } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import courses from '../../data/courses'
import { isLessonCompleted } from '../../utils/progressUtils'

const iconMap = {
  globe: Globe,
  layers: Layers3,
  'file-code': FileCode2,
  braces: Braces,
  code: Code2,
}

function CourseNavigation({ onNavigate }) {
  const { courseSlug, moduleSlug, topicSlug } = useParams()

  const [progressVersion, setProgressVersion] = useState(0)

  useEffect(() => {
    const handleProgressChange = () => {
      setProgressVersion((version) => version + 1)
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

  const activeCourse = courses.find(
    (course) => course.slug === courseSlug,
  )

  return (
    <nav className="space-y-1">
      {courses.map((course) => {
        const Icon = iconMap[course.icon]
        const isActiveCourse = course.slug === courseSlug
        const hasModules = course.modules.length > 0

        return (
          <div key={course.id}>
            <NavLink
              to={`/courses/${course.slug}`}
              onClick={onNavigate}
              className={({ isActive }) =>
                [
                  'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition',
                  isActive
                    ? 'bg-slate-100 text-slate-950'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={18}
                    className={
                      isActive
                        ? 'text-slate-800'
                        : 'text-slate-400 group-hover:text-slate-600'
                    }
                  />

                  <span className="min-w-0 flex-1 truncate">
                    {course.title}
                  </span>

                  {hasModules && isActiveCourse && (
                    <ChevronDown
                      size={15}
                      className="text-slate-400"
                    />
                  )}

                  {hasModules && !isActiveCourse && (
                    <ChevronRight
                      size={15}
                      className="text-slate-300"
                    />
                  )}

                  {!hasModules && (
                    <Lock
                      size={13}
                      className="text-slate-300"
                    />
                  )}
                </>
              )}
            </NavLink>

            {isActiveCourse && hasModules && (
              <div className="ml-5 mt-2 border-l border-slate-200 pl-3">
                {course.modules.map((module) => {
                  const isActiveModule =
                    module.slug === moduleSlug

                  return (
                    <div key={module.id} className="mb-3">
                      <div className="px-2 py-1.5">
                        <p className="text-xs font-semibold text-slate-500">
                          {module.title}
                        </p>
                      </div>

                      <div className="space-y-0.5">
                        {module.topics.map((topic) => {
                          const isActiveTopic =
                            module.slug === moduleSlug &&
                            topic.slug === topicSlug

                          const completed =
                            isLessonCompleted(topic.id)

                          return (
                            <NavLink
                              key={topic.id}
                              to={`/courses/${course.slug}/${module.slug}/${topic.slug}`}
                              onClick={onNavigate}
                              className={[
                                'block rounded-md px-2 py-2 text-sm transition',
                                isActiveTopic
                                  ? 'bg-slate-900 font-medium text-white'
                                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900',
                              ].join(' ')}
                            >
                              <div className="flex min-w-0 items-center gap-2">
                                {completed && (
                                  <CheckCircle2
                                    size={14}
                                    className="shrink-0 text-emerald-500"
                                  />
                                )}

                                <span className="truncate">
                                  {topic.title}
                                </span>
                              </div>

                              <span
                                className={
                                  isActiveTopic
                                    ? 'mt-0.5 block text-[11px] text-slate-300'
                                    : 'mt-0.5 block text-[11px] text-slate-400'
                                }
                              >
                                {topic.estimatedTime} min
                              </span>
                            </NavLink>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default CourseNavigation