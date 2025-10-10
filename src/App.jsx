import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import ComputerLabs from './pages/ComputerLabs'
import Libraries from './pages/Libraries'
import Microschools from './pages/Microschools'
import OnlineClasses from './pages/OnlineClasses'
import StudentSupport from './pages/StudentSupport'
import SchoolDevelopment from './pages/SchoolDevelopment'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    // Set the document direction based on language
    const direction = i18n.language === 'fa' || i18n.language === 'ps' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', direction)
  }, [i18n.language])

  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/computer-labs" element={<ComputerLabs />} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/microschools" element={<Microschools />} />
          <Route path="/online-classes" element={<OnlineClasses />} />
          <Route path="/student-support" element={<StudentSupport />} />
          <Route path="/school-development" element={<SchoolDevelopment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

