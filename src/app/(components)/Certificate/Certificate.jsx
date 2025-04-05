"use client"
import React from 'react'
import './_Certificate.scss'
import CertificateItem from '../CertificateItem/CertificateItem'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Certificate() {
    const certificate = [
        {
            organization: "Maharashtra State Board of Technical Education",
            cerName: "MS-CIT",
            description: "MSCIT is a comprehensive IT literacy course designed to equip individuals with essential computer skills, including MS Office, MS Excel, MS Powerpoint, internet usage, and basic IT concepts. It is recognized by the Maharashtra State Government.",
            link: "https://drive.google.com/file/d/1DuuEwyp82c1eu89nBsKwOOdkgJ81wDDq/view?usp=sharing",
            date: "2/8/2019"
        },
        {
            organization: "Study Section",
            cerName: "Python",
            description: "This Python certification demonstrates proficiency in Python programming, covering fundamental concepts and problem-solving techniques. It validates the ability to write efficient and maintainable Python code.",
            link: "https://drive.google.com/file/d/1r3FP6cHiSf6F6rfTSpWDKnZbHvfdIpRD/view?usp=sharing",
            date: "10/8/2023"
        }
    ]

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const certificate_item = gsap.utils.toArray(".certificate .content .certificate-container .certificate-item")

        gsap.fromTo(certificate_item,
            {
                y: 400,
                opacity: 0,
                scale: 0
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: certificate_item,
                    scroller: "body",
                    start: "top bottom",
                    end: "top 90%",
                    scrub: true,
                }
            }
        )
    }, [])

    return (
        <div className='certificate' id='certificate'>
            <h1>My <span>Certificate</span></h1>
            <div className="content">
                <div className="certificate-container">
                    {
                        certificate.map((item, index) => (
                            <CertificateItem key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Certificate;