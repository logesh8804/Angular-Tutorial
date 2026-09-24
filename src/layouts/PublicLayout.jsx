import Header from '../components/layout/Header'

function PublicLayout({ children, theme, onThemeChange, }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
      <Header theme={theme} onThemeChange={onThemeChange} />

      <main>
        {children}
      </main>
    </div>
  )
}

export default PublicLayout