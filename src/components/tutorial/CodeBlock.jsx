import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

function CodeBlock({ code, language, explanation }) {
  const [copied, setCopied] = useState(false)
  const [highlightedCode, setHighlightedCode] = useState('')

  useEffect(() => {
    let isMounted = true

    async function highlightCode() {
      try {
        const html = await codeToHtml(code, {
          lang: language?.toLowerCase() || 'text',
          theme: 'github-dark',
          defaultColor: false,
        })

        if (isMounted) {
          setHighlightedCode(html)
        }
      } catch {
        if (isMounted) {
          setHighlightedCode('')
        }
      }
    }

    highlightCode()

    return () => {
      isMounted = false
    }
  }, [code, language])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)

      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {language}
        </span>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-400 transition hover:bg-slate-800 hover:text-slate-100"
          aria-label={copied ? 'Code copied' : 'Copy code'}
        >
          {copied ? (
            <>
              <Check size={14} />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {highlightedCode ? (
        <div
          className="overflow-x-auto bg-slate-950 p-5 text-sm leading-7"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      ) : (
        <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-100">
          <code>{code}</code>
        </pre>
      )}

      {explanation && (
        <div className="border-t border-slate-800 bg-slate-900 px-5 py-4 text-sm leading-6 text-slate-300">
          {explanation}
        </div>
      )}
    </div>
  )
}

export default CodeBlock