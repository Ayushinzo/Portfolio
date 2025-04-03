import React, { useState } from 'react'
import "./_Contact.scss"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import axios from 'axios'
import { toast } from 'react-toastify'

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: ""
  })

  function changeContact(e) {
    let name = e.target.name;
    let value = e.target.value;
    setContactData(prev => ({ ...prev, [name]: value }))
  }

  async function submitContact(e) {
    e.preventDefault()
    try {
      let response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact/submit`, contactData)
      if (response.data.success) {
        toast.success(response.data.message, {
          position: "bottom-right",
          theme: "dark",
          autoClose: 3000
        })
        setContactData({
          name: "",
          email: "",
          message: ""
        })
      }
      else {
        toast.error(response.data.message, {
          position: "bottom-right",
          theme: "dark",
          autoClose: 3000
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

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
      <h2><span>Contact</span> Me</h2>
      <div className="contact-content">
        <div className="image">
          <img src={"/contact.jpg"} alt='Contact' height={50} width={50} />
        </div>
        <div className="contact-description">
          <div className="inputs-container">
            <form action="/" onSubmit={submitContact} method='post'>
              <input onChange={changeContact} value={contactData.name} type="text" name='name' placeholder='Enter your name' required />
              <input onChange={changeContact} value={contactData.email} type="email" name='email' placeholder='Enter your email' required />
              <textarea onChange={changeContact} value={contactData.message} name="message" placeholder='Enter message' required></textarea>
              <button type='submit'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact