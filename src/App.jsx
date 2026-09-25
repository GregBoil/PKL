import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Header } from './components/Layout'
import Contact from './pages/Contact'
import Financement2 from './pages/Financement_2'
import Formations from './pages/Formations'
import Home from './pages/Home'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function TrackPageView() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window._paq = window._paq || []
    window._paq.push(['setCustomUrl', pathname + search])
    window._paq.push(['trackPageView'])
  }, [pathname, search])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <TrackPageView />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/financements" element={<Financement2 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
