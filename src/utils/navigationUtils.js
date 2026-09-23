import lessonRegistry from '../content/lessonRegistry'
import { getAllTopics } from './courseUtils'

export function getLessonNavigation(course, currentTopicId) {
  if (!course) {
    return {
      previous: null,
      next: null,
    }
  }

  const topics = getAllTopics(course).filter(
    (topic) =>
      lessonRegistry[course.slug]?.[topic.id],
  )

  const currentIndex = topics.findIndex(
    (topic) => topic.id === currentTopicId,
  )

  if (currentIndex === -1) {
    return {
      previous: null,
      next: null,
    }
  }

  return {
    previous:
      currentIndex > 0
        ? topics[currentIndex - 1]
        : null,

    next:
      currentIndex < topics.length - 1
        ? topics[currentIndex + 1]
        : null,
  }
}