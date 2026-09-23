import CodeBlock from './CodeBlock'
import ListSection from './ListSection'
import PracticeSection from './PracticeSection'
import StepsSection from './StepsSection'
import SummarySection from './SummarySection'
import TextSection from './TextSection'
import CalloutSection from './CalloutSection'

function LessonSection({ section }) {
  return (
    <section className="mb-12 scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        {section.title}
      </h2>

      <div className="mt-4">
        {section.type === 'text' && (
          <TextSection content={section.content} />
        )}

        {section.type === 'callout' && (
          <CalloutSection
            variant={section.variant}
            title={section.title}
            content={section.content}
          />
        )}

        {section.type === 'list' && (
          <ListSection items={section.items} />
        )}

        {section.type === 'code' && (
          <CodeBlock
            code={section.code}
            language={section.language}
            explanation={section.explanation}
          />
        )}

        {section.type === 'steps' && (
          <StepsSection steps={section.steps} />
        )}

        {section.type === 'practice' && (
          <PracticeSection
            description={section.description}
            tasks={section.tasks}
          />
        )}

        {section.type === 'summary' && (
          <SummarySection items={section.items} />
        )}
      </div>
    </section>
  )
}

export default LessonSection