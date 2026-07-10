import { Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components/Layout'
import Home from './pages/Home'
import Formations from './pages/Formations'
import Contact from './pages/Contact'

export default function App() {
  return <><Header /><main><Routes><Route path="/" element={<Home />} /><Route path="/formations" element={<Formations />} /><Route path="/contact" element={<Contact />} /></Routes></main><Footer /></>
}
