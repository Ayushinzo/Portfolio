import React, { useState } from 'react'
import './_Navbar.scss'
import { useGSAP } from '@gsap/react'
import scrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineDownloadForOffline } from "react-icons/md";

function Navbar() {
    const [navbar, setNavbar] = useState(false)

    useGSAP(() => {
        gsap.registerPlugin(scrollTrigger)
        gsap.fromTo(".navbar .image h1",
            {
                x: -810,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: .6,
                ease: "slow",
            }
        )

        gsap.fromTo(".navbar nav ul li",
            {
                y: -210,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: .6,
                ease: "power2.out",
                stagger: 0.1,
            }
        )

        gsap.to(".navbar", {
            backgroundColor: "rgb(103, 92, 253)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            padding: "0.8rem",
            ease: "sine.inOut",
            scrollTrigger: {
                trigger: ".home .subHome .image img",
                scroller: "body",
                start: "top 25%",
                end: "top 25%",
                scrub: .6
            }
        })
    }, [])

    return (
        <header className='navbar'>
            <div className="image">
                <h1><span>Ayu</span>sh</h1>
            </div>
            <nav className={navbar ? 'active' : ''}>
                <ul>
                    <li><a onClick={() => setNavbar(false)} href="#home">Home</a></li>
                    <li><a onClick={() => setNavbar(false)} href="#about">About</a></li>
                    <li><a onClick={() => setNavbar(false)} href="#certificate">Certificate</a></li>
                    <li><a onClick={() => setNavbar(false)} href="#skills">Skills</a></li>
                    <li><a onClick={() => setNavbar(false)} href="#education">Education</a></li>
                    <li><a onClick={() => setNavbar(false)} href="#project">Projects</a></li>
                    <li><a onClick={() => setNavbar(false)} href="#contact">Contact</a></li>
                    <li><a download target='_blank' href={`${process.env.BACKEND_URL}/resume.jpg`} onClick={() => setNavbar(false)}>Resume <MdOutlineDownloadForOffline className='download' /></a></li>
                </ul>
                <RxCross1 className='menu cross' onClick={() => setNavbar(false)} />
            </nav>
            <AiOutlineMenu className='menu' onClick={() => setNavbar(true)} />
        </header>
    )
}

export default Navbar