import courses from '../data/courses'

export function getCourseBySlug(courseSlug) {
  return courses.find((course) => course.slug === courseSlug)
}

export function getModuleBySlug(course, moduleSlug) {
  return course?.modules?.find(
    (module) => module.slug === moduleSlug,
  )
}

export function getTopicBySlug(module, topicSlug) {
  return module?.topics?.find(
    (topic) => topic.slug === topicSlug,
  )
}

export function getAllTopics(course) {
  if (!course?.modules) {
    return []
  }

  return course.modules.flatMap((module) =>
    module.topics.map((topic) => ({
      ...topic,
      moduleId: module.id,
      moduleSlug: module.slug,
      moduleTitle: module.title,
    })),
  )
}