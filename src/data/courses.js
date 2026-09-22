const courses = [
  {
    id: 'html',
    slug: 'html',
    title: 'HTML',
    shortTitle: 'HTML',
    description:
      'Learn the structure of the web by building strong foundations with modern HTML.',
    icon: 'globe',
    color: 'orange',
    level: 'Beginner',
    estimatedTime: '12 hours',
    modules: [
      {
        id: 'html-fundamentals',
        slug: 'fundamentals',
        title: 'HTML Fundamentals',
        description: 'Learn the building blocks of every web page.',
        topics: [
          {
            id: 'html-introduction',
            slug: 'introduction',
            title: 'Introduction to HTML',
            difficulty: 'Beginner',
            estimatedTime: 15,
          },
          {
            id: 'html-document-structure',
            slug: 'document-structure',
            title: 'HTML Document Structure',
            difficulty: 'Beginner',
            estimatedTime: 20,
          },
          {
            id: 'html-elements',
            slug: 'elements',
            title: 'HTML Elements',
            difficulty: 'Beginner',
            estimatedTime: 20,
          },
          {
            id: 'html-attributes',
            slug: 'attributes',
            title: 'HTML Attributes',
            difficulty: 'Beginner',
            estimatedTime: 20,
          },
        ],
      },
    ],
  },

  {
    id: 'css',
    slug: 'css',
    title: 'CSS',
    shortTitle: 'CSS',
    description:
      'Learn how to design beautiful, responsive, and accessible web interfaces.',
    icon: 'layers',
    color: 'blue',
    level: 'Beginner → Advanced',
    estimatedTime: '18 hours',
    modules: [],
  },

  {
    id: 'javascript',
    slug: 'javascript',
    title: 'JavaScript',
    shortTitle: 'JavaScript',
    description:
      'Master the language that powers modern web applications.',
    icon: 'file-code',
    color: 'yellow',
    level: 'Beginner → Advanced',
    estimatedTime: '35 hours',
    modules: [],
  },

  {
    id: 'typescript',
    slug: 'typescript',
    title: 'TypeScript',
    shortTitle: 'TypeScript',
    description:
      'Write safer and more maintainable JavaScript applications with TypeScript.',
    icon: 'braces',
    color: 'blue',
    level: 'Intermediate',
    estimatedTime: '12 hours',
    modules: [],
  },

  {
    id: 'angular',
    slug: 'angular',
    title: 'Angular',
    shortTitle: 'Angular',
    description:
      'Build production-ready applications with modern Angular.',
    icon: 'code',
    color: 'red',
    level: 'Intermediate → Advanced',
    estimatedTime: '40 hours',
    modules: [],
  },
]

export default courses