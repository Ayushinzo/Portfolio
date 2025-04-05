import React from 'react'
import './_About.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

function About() {
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
                            I am a passionate web developer looking for an internship to further develop my skills and gain hands-on experience. My journey started with a curiosity for how websites are built and has grown into a passion for creating interactive and user-friendly web applications.
                        </p>
                        <br />
                        <p>
                            I have a strong foundation in HTML, CSS, and JavaScript, and have gained experience working with modern frameworks like React and next.js. I enjoy solving complex problems and am always eager to learn new technologies and improve my coding practices.
                        </p>
                        <br />
                        <p>
                            I believe that collaboration and continuous learning are key to success in the tech industry. I am excited to bring my enthusiasm and skills to new challenges and opportunities in web development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;