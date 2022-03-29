import React from 'react'
import './contact.css'
import {MdMailOutline} from 'react-icons/md'
import {MdOutlineMessage} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* EMAIL */}
          <article className="contact__option">
            <MdMailOutline/>
            <h4>Email</h4>
            <h5>Sarah.Labrot@gmail.com</h5>
            <a href="mailto:Sarah.Labrot@gmail.com" target="_blank">Send a message</a>
          </article>
        {/* Messanger */}   
          <article className="contact__option">
            <MdOutlineMessage/>
            <h4>Messenger</h4>
            <h5>sarahlabrotlientz.slack.com</h5>
            <a href="https://sarahlabrotlientz.slack.com/archives/D02EJ9YPU59" target="_blank">Send a message</a>
          </article>
           {/* Discord */}
          <article className="contact__option">
            <SiMessenger/>
            <h4>Discord</h4>
            <h5>MotherofDragons#3693</h5>
            <a href="https://discord.com/" target="_blank">Send a message</a>
          </article>

        </div>

        {/* End of CONTACT OPTIONS */}

        <form action=''>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact