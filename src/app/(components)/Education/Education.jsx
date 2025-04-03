import React, { useEffect, useState } from 'react'
import "./_Education.scss"
import { SlCalender } from "react-icons/sl";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import axios from 'axios';
import { FaGraduationCap } from "react-icons/fa6";

function Education() {
  const [education, setEducation] = useState([])

  async function fetchEducation(){
    let response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/education/list`)
    if(response.data.success){
      setEducation(response.data.data)
    }
  }

  useEffect(() => {
    fetchEducation()
  }, [])

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
  }, [education])
  
  return (
    <div className='education' id='education'>
      <h2>My <span>Education</span></h2>
      <div className="content">
        <div className="sub-edu">
          {
            education.sort((a, b) => a.edu_order - b.edu_order).map((item, index) => (
              <div key={index} className="edu-box">
                <p className='index'><FaGraduationCap/></p>
                <div className="image">
                  <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.image}`} alt={item.image} />
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

export default Education