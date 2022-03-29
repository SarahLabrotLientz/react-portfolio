import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>REACT</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>InDesign</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Illustrator</h4>
            <small className='text-light'>Intermediate</small>
            </article>


            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Photoshop</h4>
            <small className='text-light'>Intermediate</small>
            </article>
        </div>
    </div>
    {/* end of FRONTEND  */}

<div className="experience__backend">
<h3>Backend Development</h3>
        <div className="experience_content">
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>MySQL</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>MongoDB</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Express.js</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>jQuery</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Node</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>C#</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>PYTHON</h4>
            <small className='text-light'>Intermediate</small>
            </article>

        </div>
  </div>
</div>

    </section>
  )
}

export default Experience