function CodeBlock({ code, language, explanation }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950">
      <div className="flex items-center border-b border-slate-800 px-4 py-2.5">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
          {language}
        </span>
      </div>

      <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-100">
        <code>{code}</code>
      </pre>

      {explanation && (
        <div className="border-t border-slate-800 bg-slate-900 px-5 py-4 text-sm leading-6 text-slate-300">
          {explanation}
        </div>
      )}
    </div>
  )
}

export default CodeBlock