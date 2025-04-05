import React, { useState } from 'react'
import "./_Share.scss"
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";

function Share() {
    const [share, setShare] = useState(false)

    return (
        <div className='share'>
            <ul className={share && 'active'}>
                <li><a href='https://www.instagram.com/___ayush.com___/' target='_blank'><IoLogoInstagram className='op' /></a></li>
                <li><a href='https://www.linkedin.com/in/ayush-shembekar-20a10b288' target='_blank'><CiLinkedin className='op' /></a></li>
                <li><a href='https://github.com/Ayushinzo' target='_blank'><FiGithub className='op' /></a></li>
                <li><a href='https://www.facebook.com/ayush.shembekar.3' target='_blank'><CiFacebook className='op' /></a></li>
            </ul>
            <FaChevronUp className={`up ${share && 'active'}`} onClick={() => setShare(prev => !prev)} />
            <FaChevronDown className={`up ${!share && 'active'}`} onClick={() => setShare(prev => !prev)} />
        </div>
    )
}

export default Share;