import lessonRegistry from '../content/lessonRegistry'

export function getLesson(courseSlug, topicId) {
  return lessonRegistry[courseSlug]?.[topicId]
}