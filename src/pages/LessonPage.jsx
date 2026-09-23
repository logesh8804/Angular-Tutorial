import { Link, useParams } from 'react-router-dom'
import LessonHeader from '../components/tutorial/LessonHeader'
import LessonNavigation from '../components/tutorial/LessonNavigation'
import LessonRenderer from '../components/tutorial/LessonRenderer'
import { getCourseBySlug, getModuleBySlug, getTopicBySlug, } from '../utils/courseUtils'
import { getLesson } from '../utils/lessonUtils'
import { getLessonNavigation } from '../utils/navigationUtils'
import LessonCompletion from '../components/tutorial/LessonCompletion'

function LessonPage() {
  const { courseSlug, moduleSlug, topicSlug } = useParams()

  const course = getCourseBySlug(courseSlug)
  const module = getModuleBySlug(course, moduleSlug)
  const topic = getTopicBySlug(module, topicSlug)

  const lesson = getLesson(courseSlug, topic?.id)

  const navigation = getLessonNavigation( course, topic?.id, )

  if (!course || !module || !topic || !lesson) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-2xl font-bold text-slate-900">
          Lesson not found
        </h1>

        <Link
          to="/courses"
          className="mt-4 inline-block text-sm font-semibold text-slate-700 underline"
        >
          Back to courses
        </Link>
      </section>
    )
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-12">
      <LessonHeader
        courseTitle={course.title}
        moduleTitle={module.title}
        title={lesson.title}
        description={lesson.description}
        difficulty={lesson.difficulty}
        estimatedTime={lesson.estimatedTime}
      />

      <div className="mt-12">
        <LessonRenderer sections={lesson.sections} />
        <LessonCompletion lessonId={topic.id} />
        <LessonNavigation previous={navigation.previous} next={navigation.next} courseSlug={course.slug} />
      </div>
    </article>
  )
}

export default LessonPage