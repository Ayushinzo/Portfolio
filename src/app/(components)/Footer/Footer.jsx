"use client"
import React from 'react'
import './_Footer.scss'
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className="quick-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#certificate">Certificate</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="contact-info">
                    <h2>Contect Info</h2>
                    <ul>
                        <li><a href="tel:+9975721744" target='_blank'>+9975721744</a></li>
                        <li><a href="tel:+9130240076" target='_blank'>+9130240076</a></li>
                        <li><a href="mailto:ayushshembekar07@gmail.com" target='_blank'>ayushshembekar07@gmail.com</a></li>
                        <li><a href="mailto:ayushshembekar2004@gmail.com" target='_blank'>ayushshembekar2004@gmail.com</a></li>
                    </ul>
                </div>
                <div className="follow-me">
                    <h2>Follow Me</h2>
                    <ul>
                        <li><a href={'https://www.instagram.com/___ayush.com___/'} target='_blank'><FaInstagram /> Instagram</a></li>
                        <li><a href={'https://www.facebook.com/ayush.shembekar.3'} target='_blank'><FaFacebook /> Facebook</a></li>
                        <li><a href={'https://www.linkedin.com/in/ayush-shembekar-20a10b288'} target='_blank'><FaLinkedin /> LinkedIn</a></li>
                        <li><a href={'https://github.com/Ayushinzo'} target='_blank'><FaGithub /> Github</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;