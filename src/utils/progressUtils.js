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

export function notifyProgressChanged() {
  window.dispatchEvent(new Event('tutorialhub-progress-changed'))
}