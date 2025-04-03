import React from 'react'
import "./_ProjectItem.scss"
import { memo } from 'react'
import { FaRocket } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function ProjectItem({ item, index, projects }) {
    useGSAP(() => {
        // gsap.registerPlugin(ScrollTrigger)
        // gsap.fromTo(".project-item",
        //     {
        //         y: 300,
        //         scale: 0,
        //         opacity: 0
        //     },
        //     {
        //         y: 0,
        //         scale: 1,
        //         opacity: 1,
        //         scrollTrigger: {
        //             trigger: ".project-item",
        //             scroller: "body",
        //             markers: true,
        //             scrub: true,
        //             start: "top bottom",
        //             end: "top 90%"
        //         }
        //     })
    }, [projects])

    return (
        <div key={index} className='project-item'>
            <div className="image">
                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.image}`} alt={item.pro_name} />
            </div>
            <h2>{item.pro_name}</h2>
            <p>{item.pro_desc}</p>
            <div className='project-skills'>
                {
                    item.pro_skills.split(',').map((item) => {
                        return (
                            <span>
                                {item}
                            </span>
                        )
                    })
                }
            </div>
            <div className="link">
                <a href={item.live} target='_blank'><FaRocket className='zz' /></a>
                <a href={item.github} target='_blank'><FaGithub className='zz' /></a>
            </div>
        </div>
    )
}

export default memo(ProjectItem)