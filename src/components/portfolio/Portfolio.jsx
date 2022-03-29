import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* item 1 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>          
            </div>
          <h3>The TECH REPORT</h3>
          <a href="https://github.com/SarahLabrotLientz/THE_TECH_REPORT" className='btn'>Github</a>
          <a href="https://infinite-sierra-30164.herokuapp.com/" className='btn btn-primary'>Live Demo</a>
        </article>
        {/* item 2 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>          
            </div>
          <h3>The CODE QUIZ</h3>
          <a href="https://github.com/SarahLabrotLientz/Code-Quiz" className='btn'>Github</a>
          <a href="https://sarahlabrotlientz.github.io/Code-Quiz/" className='btn btn-primary'>Live Demo</a>
        </article>
        {/* item 3 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt=""/>          
            </div>
          <h3>MYSQL CMS</h3>
          <a href="https://github.com/SarahLabrotLientz/Employee-Profile-Generator" className='btn'>Github</a>
          <a href="https://watch.screencastify.com/v/WWa58kjBX4MilSudn3s3" className='btn btn-primary'>Live Demo</a>
        </article>

      </div>
    </section>
  )
}

export default Portfolio