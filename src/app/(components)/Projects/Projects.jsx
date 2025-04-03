import React, { useEffect, useState } from 'react'
import "./_Projects.scss"
import ProjectItem from '../ProjectItem/ProjectItem'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

function Projects() {
    const [projects, setProjects] = useState([])

    async function fetchProjects() {
        try {
            let response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project/list`)
            if (response.data.success) {
                setProjects(response.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(".pro-content .sub-pro-content .project-item",
            {
                y: 300,
                scale: 0,
                opacity: 0
            },
            {
                y: 0,
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".pro-content .sub-pro-content .project-item",
                    scroller: "body",
                    scrub: true,
                    start: "top bottom",
                    end: "top 90%"
                }
            })
    }, [projects])

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <div className='projects' id='project'>
            <h2>My <span>Projects</span></h2>
            <div className="pro-content">
                <div className="sub-pro-content">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="mySwiper"
                        navigation={true}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true
                        }}
                        breakpoints={{
                            400: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            720: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {
                            projects.map((item, index) => (
                                <SwiperSlide>
                                    <ProjectItem projects={projects} index={index} item={item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Projects