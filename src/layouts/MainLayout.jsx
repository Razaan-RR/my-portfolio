import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100">
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 pt-32">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default MainLayout
