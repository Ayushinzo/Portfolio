import React from 'react'
import "./_ProjectItem.scss"
import { memo } from 'react'
import { FaRocket } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function ProjectItem({ item, index }) {
    return (
        <div key={index} className='project-item'>
            <div className="image">
                <img src={item.image} alt={item.pro_name} />
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