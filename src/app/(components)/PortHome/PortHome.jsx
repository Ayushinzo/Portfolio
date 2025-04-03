import React, { useEffect, useState } from 'react'
import './_PortHome.scss'
import Typed from 'typed.js'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { Draggable } from 'gsap/Draggable'
import getILocation from '@/app/(utils)/getMyIp'
import axios from 'axios'

let a = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Python", "Next.js", "SCSS", "Clerk Authentication", "Firebase", "GSAP", "Github", "Responsive design"]

function PortHome() {
  const type = React.useRef()
  const [skills, setSkills] = useState([])
  let string = []
  async function fetchSkills() {
    try {
      let response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/skills/list`)
      if (response.data.success) {
        response.data.data.forEach(element => {
          string.push(element.name)
        })
        setSkills(string)
      }
    } catch (error) {

    }
  }
  useEffect(() => {
    const typed = new Typed(type.current, {
      strings: skills,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, [skills]);

  function show() {
    console.log(string)
  }

  useEffect(() => {
    getILocation()
    fetchSkills()
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
  }, [])

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
          <h2 onClick={show}>Web Developer</h2>
          <p className='skilledIn'>Skilled in <span ref={type}></span></p>
          <a href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/resume.jpg`} download>Resume</a>
        </div>

        <div className="image">
          <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile.jpg`} alt="ayush" />
        </div>
      </div>
    </div>
  );
}

export default PortHome