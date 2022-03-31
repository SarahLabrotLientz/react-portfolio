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
            <img src={ME} alt='About'/>
      </div>
      </div>
      <div className="about__content">
        <div className="about__cards">

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Copywriting</h5>
            <small> for 10+ Years <br></br> </small>
           
            </article>

            <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Coding</h5>
            <small>Certified at Georgia Tech</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Designing</h5>
            <small>for 30+ years</small>
            </article>
        </div>
        <p> 
          I am a digital advertising copywriter and UI/UX Designer seeking opportunities to bring brands to life. 
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About