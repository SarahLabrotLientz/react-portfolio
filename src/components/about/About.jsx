import React from 'react'
import './about.css'
import ME from '../../assets/profile.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5> Get to Know</h5>
      <h2> About Me</h2>
      <div className="container about__container">
        <div className= "about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
      </div>
      </div>
      <div className="about__content">
        <div className="about__cards">

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small> 10+ years Copywriting <br></br> </small>
            <small> GA Tech Coding Certified </small>
            </article>

            <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Copywriting Clients</h5>
            <small> Jaguar, Kellogg's, MillerCoors </small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Coding Projects</h5>
            <small> TechReport<br></br> MeVsU <br></br> Social Media Api</small>
            </article>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About