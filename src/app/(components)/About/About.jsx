import React, { useEffect, useState } from 'react'
import './_About.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import axios from 'axios'

function About() {
    const [summary, setSummary] = useState({
        para1: "",
        para2: "",
        para3: ""
    })
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(".about .main .sub-main .image img, .about .main .sub-main .content",
            {
                y: 200,
                scale: 0,
                opacity: 0,
                ease: "powwer2.out",

                scrollTrigger: {
                    scroller: "body",
                    trigger: ".about .main .sub-main .image img",
                    scrub: true,
                    start: "top bottom",
                    end: "top 90%"
                }
            })
    }, [])

    async function fetchSummary(){
        let respones = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/summary/get`)
        if(respones.data.success){
            setSummary(respones.data.data[0])
        }
    }

    useEffect(()=>{
        fetchSummary()
    }, [])

    return (
        <div className='about' id="about">
            <h2><span>About</span> Me</h2>
            <div className="main">
                <div className="sub-main">
                    <div className="image">
                        <Image src={"/about.webp"} alt='About' width={200} height={200} />
                    </div> 
                    <div className="content">
                        <p>
                            {summary.para1}
                        </p>
                        <br />
                        <p>
                            {summary.para2}
                        </p>
                        <br />
                        <p>
                            {summary.para3}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
