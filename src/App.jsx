import { Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components/Layout'
import Contact from './pages/Contact'
import Financement2 from './pages/Financement_2'
import Formations from './pages/Formations'
import Home from './pages/Home'

export default function App() {
  return (
    <>
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
