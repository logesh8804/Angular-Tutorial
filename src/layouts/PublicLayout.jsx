import Header from '../components/layout/Header'

function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main>
        {children}
      </main>
    </div>
  )
}

export default PublicLayout