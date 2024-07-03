import './App.css';
import Hero from './components/Hero';
import Highlight from './components/Highlight';
import Navbar from './components/Navbar';
import Features from "./components/Features"
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
import Model from './components/Model';
import DesignSection from './components/DesignSection'
import DisplaySection from './components/DisplaySection'

const App = () => {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlight/>
      <Model/>
      <DisplaySection/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  )
}

export default App