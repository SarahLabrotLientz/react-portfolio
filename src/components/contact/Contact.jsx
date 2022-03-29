import React from 'react'
import './contact.css'
import {MdMailOutline} from 'react-icons/md'
import {MdOutlineMessage} from 'react-icons/md'
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
            <a href="mailto:Sarah.Labrot@gmail.com">Send a message</a>
          </article>
        {/* Messanger */}   
          <article className="contact__option">
            <MdOutlineMessage/>
            <h4>Messenger</h4>
            <h5>sarahlabrotlientz.slack.com</h5>
            <a href="https://sarahlabrotlientz.slack.com/archives/D02EJ9YPU59">Send a message</a>
          </article>
           {/* EMAIL */}
          <article className="contact__option">
            <MdMailOutline/>
            <h4>Discord</h4>
            <h5>MotherofDragons#3693</h5>
            <a href="https://discord.com/">Send a message</a>
          </article>

        </div>

        {/* End of CONTACT OPTIONS */}

        <form action=''></form>

      </div>
    </section>
  )
}

export default Contact