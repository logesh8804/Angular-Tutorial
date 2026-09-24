import lessonRegistry from '../content/lessonRegistry'
import { getAllTopics } from './courseUtils'

const STORAGE_KEY = 'tutorialhub-completed-lessons'

function getCompletedLessons() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (!stored) {
      return []
    }

    const parsed = JSON.parse(stored)

    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveCompletedLessons(lessonIds) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(lessonIds),
  )
}

export function isLessonCompleted(lessonId) {
  return getCompletedLessons().includes(lessonId)
}

export function markLessonCompleted(lessonId) {
  const completedLessons = getCompletedLessons()

  if (completedLessons.includes(lessonId)) {
    return
  }

  saveCompletedLessons([
    ...completedLessons,
    lessonId,
  ])
}

export function unmarkLessonCompleted(lessonId) {
  const completedLessons = getCompletedLessons()

  saveCompletedLessons(
    completedLessons.filter(
      (id) => id !== lessonId,
    ),
  )
}

export function getCompletedLessonCount() {
  return getCompletedLessons().length
}

export function getLearningProgress(courses) {
  const availableLessons = courses.flatMap((course) =>
    getAllTopics(course).filter(
      (topic) =>
        lessonRegistry[course.slug]?.[topic.id],
    ),
  )

  const completedLessons = getCompletedLessons()

  const completedCount = availableLessons.filter(
    (lesson) =>
      completedLessons.includes(lesson.id),
  ).length

  const totalCount = availableLessons.length

  const percentage =
    totalCount === 0
      ? 0
      : Math.round(
          (completedCount / totalCount) * 100,
        )

  return {
    completedCount,
    totalCount,
    percentage,
  }
}

export function notifyProgressChanged() {
  window.dispatchEvent(
    new Event('tutorialhub-progress-changed'),
  )
}