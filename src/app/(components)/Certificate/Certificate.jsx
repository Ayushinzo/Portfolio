"use client"
import React, { useEffect, useState } from 'react'
import './_Certificate.scss'
import CertificateItem from '../CertificateItem/CertificateItem'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import axios from 'axios'

function Certificate() {
    const [certificate, setCertificate] = useState([])

    async function fetchCertificates() {
        try {
            let res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/certificate/list`)
            if (res.data.success) {
                setCertificate(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCertificates()
    }, [])

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
    }, [certificate])
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

export default Certificate