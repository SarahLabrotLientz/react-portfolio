import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


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
          <div className="portfolio__item-cta">
          <a href="https://github.com/SarahLabrotLientz/THE_TECH_REPORT" target="_blank" className='btn'>Github</a>
          <a href="https://infinite-sierra-30164.herokuapp.com/" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        {/* item 2 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>          
            </div>
          <h3>The CODE QUIZ</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/SarahLabrotLientz/Code-Quiz" target="_blank" className='btn'>Github</a>
          <a href="https://sarahlabrotlientz.github.io/Code-Quiz/" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        {/* item 3 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt=""/>          
            </div>
          <h3>MYSQL CMS</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/SarahLabrotLientz/Employee-Profile-Generator" target="_blank" className='btn'>Github</a>
          <a href="https://watch.screencastify.com/v/WWa58kjBX4MilSudn3s3" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
         {/* item 4 */}
         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt=""/>          
            </div>
          <h3>MY ANIME</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/SarahLabrotLientz/MyAnime" target="_blank" className='btn'>Github</a>
          <a href="https://sarahlabrotlientz.github.io/MyAnime/" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        {/* item 5 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt=""/>          
            </div>
          <h3>ME vs U</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/SarahLabrotLientz/ME-vs-U" target="_blank" className='btn'>Github</a>
          <a href="https://drive.google.com/file/d/1TiS1dTVe8c9P8PACOCvahzIOs225Cjea/view" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        {/* item 6 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt=""/>          
            </div>
          <h3>DAY PLANNER</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/SarahLabrotLientz/work_day_planner" target="_blank" className='btn'>Github</a>
          <a href="https://sarahlabrotlientz.github.io/work_day_planner/" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio