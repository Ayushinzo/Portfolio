import React from 'react'
import "./_Projects.scss"
import ProjectItem from '../ProjectItem/ProjectItem'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

function Projects() {
    const projects = [
        {
            pro_name: "The Hint - News Website",
            pro_desc: "The News App is a simple application built with Next.js, providing users with the latest news articles in an easy-to-read format. It pulls news from various sources and ensures fast navigation and optimized performance. The app is ready for deployment on platforms like Vercel.",
            pro_skills: "html, css, javascript, react, next.js",
            github: "https://github.com/Ayushinzo/news-app.git",
            live: "https://news-app-kappa-ochre.vercel.app/",
            image: "/newsapp.png"
        },
        {
            pro_name: "Tomato - Online food delivery",
            pro_desc: "This is the Full Stack online food delivery website created using next.js along with admin dashboard to satisfy the craving of peoples. It features a user-friendly interface for customers to browse menus and place orders. The admin dashboard allows restaurant owners to manage orders and update menus.",
            pro_skills: "Full stack, html, css, javascript, node.js, react, next.js, mongodb, node.js, rest api, JWT",
            github: "https://github.com/Ayushinzo/tomato-app.git",
            live: "https://tomato-dugrr835t-ayushs-projects-bb0df644.vercel.app/",
            image: "/tomato.png"
        },
        {
            pro_name: "Home page",
            pro_desc: "This is my first website which is a home page of an online food ordering web application. It was created using HTML, CSS, and JavaScript and is fully responsive, ensuring compatibility across various devices.",
            pro_skills: "html, css",
            github: "https://github.com/Ayushinzo/Online-food-ordering-home-page.git",
            live: "https://ayushinzo.github.io/Online-food-ordering-home-page",
            image: "/homePage.png"
        },
        {
            pro_name: "AI Content Generator",
            pro_desc: "This is a simple AI content generator website that uses GeminiAI API to generate content. It is built using HTML, CSS, and JavaScript, and framework like next.js and is fully responsive. You can generate content by entering a prompt and clicking the generate button and the content will be given in the rich text editor format. I have also used Clerk for authentication.",
            pro_skills: "html, css, javascript, react, next.js, node.js, mongodb, clerk, gemini API",
            github: "https://github.com/Ayushinzo/ai-content-generator.git",
            live: "https://github.com/Ayushinzo/ai-content-generator.git",
            image: "/aiContent.png"
        },
        {
            pro_name: "Speechify - Speech to text",
            pro_desc: "This is a simple text to speech website that converts Speech to text. It is built using HTML, CSS, and JavaScript and is fully responsive. You can convert any text to speech by entering the text and clicking the convert button.",
            pro_skills: "html, css, javascript",
            github: "https://github.com/Ayushinzo/Speech-Recognition.git",
            live: " https://ayushinzo.github.io/Speech-Recognition",
            image: "/speech.png"
        },
        {
            pro_name: "Animated Home page - clone project",
            pro_desc: "This is a clone project of an animated home page. It is built using HTML, CSS, and JavaScript. The website features a beautiful animation on the home page and is designed to be user-friendly.",
            pro_skills: "html, css, javascript, GSAP",
            github: "https://github.com/Ayushinzo/Best-Animated-home-page.git",
            live: "https://ayushinzo.github.io/Best-Animated-home-page/",
            image: "/animated.png"
        },
        {
            pro_name: "Dashboard",
            pro_desc: "This is a responsive and interactive dashboard application built using React and Next.js. It provides a clean and modern interface for managing and visualizing data. The project demonstrates the use of reusable components, state management, and responsive design principles.",
            pro_skills: "html, css, javascript, react, next.js, SQL",
            github: "https://github.com/Ayushinzo/dashboard.git",
            live: "https://dashboard-two-teal-14.vercel.app",
            image: "/dashboard.png"
        }
    ]

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

export default Projects;