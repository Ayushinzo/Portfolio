import React from 'react'
import "./_Contact.scss"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function Contact() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(".contact .contact-content .image, .contact .contact-content .contact-description",
      {
        y: 300,
        opacity: 0,
        scale: 0,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: ".contact .contact-content .image, .contact .contact-content .contact-description",
          scroller: "body",
          start: "top 95%",
          end: "top 87%",
          scrub: true,
        }
      })
  }, [])

  return (
    <div className='contact' id='contact'>
      <h2><span>Connect</span> With Me</h2>
      <div className="contact-content">
        <div className="image">
          <img src={"/contact.jpg"} alt='Contact' height={50} width={50} />
        </div>
        <div className="contact-description">
          <div className="box box1">
            <a href="https://www.instagram.com/___ayush.com___/" target='_blank'>Instagram</a>
            <a href="https://www.linkedin.com/in/ayush-shembekar-20a10b288" target='_blank'>LinkedIn</a>
          </div>
          <div className="box box2">
            <a href="https://www.facebook.com/ayush.shembekar.3" target='_blank'>Facebook</a>
            <a href="https://github.com/Ayushinzo" target='_blank'>Github</a>
          </div>
          <div className="box box3">
            <a href="tel:+9975721744">+9975721744</a>
            <a href="tel:+9130240076">+9130240076</a>
          </div>
          <div className="box box4">
            <a href="mailto:ayushshembekar07@gmail.com">ayushshembekar07@gmail.com</a>
            <a href="mailto:ayushshembekar2004@gmail.com">ayushshembekar2004@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;