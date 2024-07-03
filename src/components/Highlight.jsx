import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import './Text.css'

import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding3 bg">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex justify-center">
          <h1 id="title" className="section-heading text-center">Get the highlights.</h1>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights