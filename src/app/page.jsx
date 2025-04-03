"use client"
import React, { useEffect } from 'react';
import './page.scss';
import Navbar from './(components)/Navbar/Navbar';
import PortHome from './(components)/PortHome/PortHome';
import About from './(components)/About/About';
import Certificate from './(components)/Certificate/Certificate';
import Skills from './(components)/Skills/Skills';
import Education from './(components)/Education/Education';
import Projects from './(components)/Projects/Projects';
import Contact from './(components)/Contact/Contact';
import Share from './(components)/Share/Share';
import { ToastContainer } from 'react-toastify';
import Footer from './(components)/Footer/Footer';

export default function Home() {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault()
    })
  }, [])

  return (
    <>
      <Navbar />
      <Share />
      <div>
        <ToastContainer />
        <div className="hero">
          <PortHome />
          <About />
          <Certificate />
          <Skills />
          <Education />
          <Projects />
          <Contact />
          <Footer />
          <div className="copyright">
            <p>Copyright &copy; Created by <span>Ayush Shembekar</span> | All Rights Reserved</p>
          </div>
          {/* <Photo /> */}
        </div>
      </div >
    </>
  )
}