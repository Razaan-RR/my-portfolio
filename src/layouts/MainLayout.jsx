import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#08101D]">
      <Navbar />

      <main className="flex-1 pt-32">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
