import React from 'react'
import './_Skills.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function Skills() {
    const skills = [
        {
            name: "Full Stack",
            image: "/fullStack.jpg"
        },
        {
            name: "HTML",
            image: "/html.jpeg"
        },
        {
            name: "CSS",
            image: "/css.png"
        },
        {
            name: "Javascript",
            image: "/js.png"
        },
        {
            name: "Typescript",
            image: "/typescript.png"
        },
        {
            name: "React",
            image: "/react.svg"
        },
        {
            name: "Next.js",
            image: "/next.png"
        },
        {
            name: "Redux",
            image: "/redux.jpg"
        },
        {
            name: "Node.js",
            image: "/node.png"
        },
        {
            name: "Mongodb",
            image: "/mongodb.svg"
        },
        {
            name: "SQL",
            image: "/sql.png"
        },
        {
            name: "SCSS",
            image: "/scss.png"
        },
        {
            name: "Tailwind CSS",
            image: "/tailwindcss.png"
        },
        {
            name: "GSAP",
            image: "/gsap.jpeg"
        },
        {
            name: "Firebase",
            image: "/firebase.png"
        },
        {
            name: "Python",
            image: "/python.jpg"
        },
        {
            name: "Git",
            image: "/git.png"
        },
        {
            name: "Clerk",
            image: "/clerk.png"
        },
        {
            name: "REST API",
            image: "/rest.jpg"
        },
        {
            name: "Swiper.js",
            image: "/swiper.png"
        },
    ]

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
                                        <img src={skill.image} alt={skill.name} />
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

export default Skills;
