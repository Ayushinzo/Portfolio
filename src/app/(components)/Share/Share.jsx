import React, { useEffect, useState } from 'react'
import "./_Share.scss"
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import axios from 'axios';
import { toast } from 'react-toastify';

function Share() {
    const [share, setShare] = useState(false)
    const [links, setLinks] = useState({
        instagram: "",
        linkedIn: "",
        github: "",
        facebook: ""
    })

    async function fetchLinks() {
        try {
            let response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/resume/fetchLinks`)
            if (response.data.success) {
                setLinks(response.data.data[0])
            } else {
                toast.error("Could not fetch links")
            }
        } catch (error) {
            toast.error("Could not fetch links")
        }
    }

    useEffect(() => {
        fetchLinks()
    }, [])

    // window.onscroll = () => {
    //     setShare(false)
    // }
    return (
        <div className='share'>
            <ul className={share && 'active'}>
                <li><a href={links.instagram} target='_blank'><IoLogoInstagram className='op' /></a></li>
                <li><a href={links.linkedIn} target='_blank'><CiLinkedin className='op' /></a></li>
                <li><a href={links.github} target='_blank'><FiGithub className='op' /></a></li>
                <li><a href={links.facebook} target='_blank'><CiFacebook className='op' /></a></li>
            </ul>
            <FaChevronUp className={`up ${share && 'active'}`} onClick={() => setShare(prev => !prev)} />
            <FaChevronDown className={`up ${!share && 'active'}`} onClick={() => setShare(prev => !prev)} />
        </div>
    )
}

export default Share