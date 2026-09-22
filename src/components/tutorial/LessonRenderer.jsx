import LessonSection from './LessonSection'

function LessonRenderer({ sections }) {
  return (
    <div>
      {sections.map((section) => (
        <LessonSection
          key={section.id}
          section={section}
        />
      ))}
    </div>
  )
}

export default LessonRenderer