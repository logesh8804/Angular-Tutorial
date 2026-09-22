import courses from '../data/courses'
import lessonRegistry from '../content/lessonRegistry'

function createSearchIndex() {
  const results = []

  courses.forEach((course) => {
    results.push({
      id: course.id,
      type: 'course',
      title: course.title,
      description: course.description,
      courseSlug: course.slug,
      url: `/courses/${course.slug}`,
    })

    course.modules.forEach((module) => {
      results.push({
        id: module.id,
        type: 'module',
        title: module.title,
        description: module.description,
        courseSlug: course.slug,
        moduleSlug: module.slug,
        url: `/courses/${course.slug}/${module.slug}`,
      })

      module.topics.forEach((topic) => {
        const lesson = lessonRegistry[course.slug]?.[topic.id]

        results.push({
          id: topic.id,
          type: 'lesson',
          title: topic.title,
          description: lesson?.description ?? '',
          courseSlug: course.slug,
          moduleSlug: module.slug,
          topicSlug: topic.slug,
          url: `/courses/${course.slug}/${module.slug}/${topic.slug}`,
        })
      })
    })
  })

  return results
}

const searchIndex = createSearchIndex()

export function searchContent(query) {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return []
  }

  const queryWords = normalizedQuery
    .split(/\s+/)
    .filter(Boolean)

  return searchIndex
    .map((item) => {
      const searchableText = [
        item.title,
        item.description,
        item.type,
      ]
        .join(' ')
        .toLowerCase()

      const matchedWords = queryWords.filter((word) =>
        searchableText.includes(word),
      )

      return {
        ...item,
        score: matchedWords.length,
      }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score
      }

      return a.title.localeCompare(b.title)
    })
    .slice(0, 12)
}

export default searchIndex