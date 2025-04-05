import React, { useEffect, useRef } from 'react'
import './_PortHome.scss'
import Typed from 'typed.js'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { Draggable } from 'gsap/Draggable'

function PortHome() {
  let type = useRef()
  useEffect(() => {
    const typed = new Typed(type.current, {
      strings: ["Full Stack", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "MongoDB", "SCSS", "GSAP", "Firebase", "SQL", "Python", "Git", "Clerk", "REST API", "Swiper.js"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(Draggable)
    Draggable.create(".home .subHome .image img", {
      type: "rotation",
      inertia: true
    })

    gsap.from(".home .subHome .content", {
      x: -600,
      opacity: 0,
      duration: 1
    })

    gsap.from(".home .subHome .image", {
      x: 600,
      opacity: 0,
      duration: 1
    })
  }, [])

  return (
    <div className='home' id='home'>
      <div className="subHome">
        <div className="content">
          <p className='greet'>HELLO THERE, WELCOME TO MY SITE</p>
          <h1>I am Ayush Shembekar</h1>
          <h2>Web Developer</h2>
          <p className='skilledIn'>Skilled in <span ref={type}></span></p>
          <a href={'/myresume.pdf'} download>Resume</a>
        </div>

        <div className="image">
          <img src={`/profile.jpg`} alt="ayush" />
        </div>
      </div>
    </div>
  );
}

export default PortHome;