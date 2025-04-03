import React, { useEffect, useState } from 'react'
import './_Skills.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import axios from 'axios'

function Skills() {
    const [skills, setSkills] = useState([])

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(".skills .skills-container .pp .skill",
            {
                y: 220,
                scale: 0,
                opacity: 0,
            },
            {
                y: 0,
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".skills .skills-container .pp .skill",
                    scroller: "body",
                    start: "top bottom",
                    end: "top 90%",
                    scrub: true,
                }
            }
        )
    }, [skills])

    async function fetchSkills() {
        try {
            let res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/skills/list`)
            if (res.data.success) {
                setSkills(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchSkills()
    }, [])
    return (
        <div className='skills' id='skills'>
            <h2>My <span>Skills</span></h2>
            <div className="skills-container">
                <div className='pp'>
                    {
                        skills.map((skill, index) => {
                            return (
                                <div className='skill' key={index}>
                                    <div className="image">
                                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${skill.image}`} alt={skill.name} />
                                    </div>
                                    <p>{skill.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills