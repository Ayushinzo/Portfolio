import React from 'react'
import "./_Education.scss"
import { SlCalender } from "react-icons/sl";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FaGraduationCap } from "react-icons/fa6";

function Education() {
  const education = [
    {
      edu_name: "RTMNU",
      edu_course: "BCA",
      edu_score: "72%",
      edu_order: 1,
      edu_from: "2021",
      edu_to: "2024",
      image: "/rtmnu.png",
    },
    {
      edu_name: "Keshav Nagar Junior Collage, Nagpur",
      edu_course: "HSC (Computer Science)",
      edu_score: "83%",
      edu_order: 2,
      edu_from: "2019",
      edu_to: "2021",
      image: "/keshav.jpg",
    }
  ]

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(".education .content .sub-edu .edu-box",
      {
        y: 300,
        scale: 0,
        opacity: 0
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".education .content .sub-edu .edu-box",
          scroller: "body",
          scrub: true,
          start: "top bottom",
          end: "top 90%"
        }
      }
    )
  }, [])

  return (
    <div className='education' id='education'>
      <h2>My <span>Education</span></h2>
      <div className="content">
        <div className="sub-edu">
          {
            education.sort((a, b) => a.edu_order - b.edu_order).map((item, index) => (
              <div key={index} className="edu-box">
                <p className='index'><FaGraduationCap /></p>
                <div className="image">
                  <img src={item.image} alt={item.image} />
                  <h3>{item.edu_name}</h3>
                </div>
                <hr className='hr' />
                <div className="edu-content">
                  <p>{item.edu_course}</p>
                  <p>{item.edu_score}</p>
                  <p><SlCalender />{item.edu_from + '-' + item.edu_to}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Education;