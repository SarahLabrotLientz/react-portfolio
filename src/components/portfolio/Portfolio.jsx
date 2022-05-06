import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'

import IMG10 from '../../assets/portfolio10.png'
import IMG11 from '../../assets/portfolio11.png'
import IMG12 from '../../assets/portfolio12.png'


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
          <h3>Jaguar Platinum</h3>
          <div className="portfolio__item-cta">
          <a href="https://www.jaguarusa.com/owners/siriusxm/index.html" target="_blank" className='btn btn-primary'>Live Site</a>
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
          <h3>Leinenkugel's</h3>
          <div className="portfolio__item-cta">
          <a href="https://www.leinie.com/home" target="_blank" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        {/* item 5 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt=""/>          
            </div>
          <h3>Motor Guide</h3>
          <div className="portfolio__item-cta">
          <a href="https://www.motorguide.com/" target="_blank" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        {/* item 6 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt=""/>          
            </div>
          <h3>Happy Habits</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/SarahLabrotLientz/HappyHabits" target="_blank" className='btn'>Github</a>
          <a href="https://hello-happy-habits.herokuapp.com/" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
                 {/* item 7 */}
                 <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG7} alt=""/>          
            </div>
          <h3>Kalahari Resorts & Conventions</h3>
          <div className="portfolio__item-cta">
          <a href="https://www.kalahariresorts.com/" target="_blank" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        {/* item 8 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG8} alt=""/>          
            </div>
          <h3>Walgreen's Photo</h3>
          <div className="portfolio__item-cta">
          <a href="https://photo.walgreens.com/store/SEM1?ext=gooPhoto_Brand_Top_Exact_BCG_NOV_tROAS_Walgreens_Photo-Exact_Top_walgreens_photo&sst=_k_CjwKCAjwjtOTBhAvEiwASG4bCAr9xoKQCRWce4zWNGjAqzMON2ogXvWYGsLXMARW_8EOcp2K8ActvxoC0k8QAvD_BwE_k_&ext=gooPhoto_Brand_Top_Exact_BCG_NOV_tROASWalgreens+Photo-Exact_Top_walgreens%20photo&gclsrc=aw.ds&&gclid=CjwKCAjwjtOTBhAvEiwASG4bCAr9xoKQCRWce4zWNGjAqzMON2ogXvWYGsLXMARW_8EOcp2K8ActvxoC0k8QAvD_BwE" target="_blank" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        {/* item 9 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG9} alt=""/>          
            </div>
          <h3>Green Acres Recycling</h3>
          <div className="portfolio__item-cta">
          <a href="http://www.greenacresrecycles.com/" target="_blank" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
                 {/* item 10 */}
                 <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG10} alt=""/>          
            </div>
          <h3>Glimsity.com</h3>
          <div className="portfolio__item-cta">
          <a href="https://glimsity.com/" target="_blank" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        {/* item 11 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG11} alt=""/>          
            </div>
          <h3>Kellogg's Nutri-Grain</h3>
          <div className="portfolio__item-cta">
          <a href="https://www.nutrigrain.com/en_US/home.html?utm_source=google&utm_medium=search&utm_campaign=NG%7CGoogle%7CSearch%7CSnack%7CBrand%7CUS%7CEvergreen%7CExact&gclid=CjwKCAjwjtOTBhAvEiwASG4bCBZ39atw9lSv_XSnUHTv1HqHEqSL4xufsTQHBi1ZKs97__OCyiIChhoCg2sQAvD_BwE" target="_blank" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        {/* item 12 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG12} alt=""/>          
            </div>
          <h3>DeVry University</h3>
          <div className="portfolio__item-cta">
          <a href="https://get-started.devry.edu/core/desktop/online-options?kwgrp=brand&ca.mp=GOOGLE&ab.sc=ps_adw_dvu_core-brand-desktop_208923_pfx&cmpid=ps_adw_dvu_core-brand-desktop_208923_pfx&vc=208923&utm_campaign=ps_adw_dvu_core-brand-desktop_208923_pfx&utm_content=208923-pfx&ca.kw=devry%20university-online&ca.target=aud-756505811473:kwd-356825105881&ca.cr=452848206458&ca.mt=e&cb.device=c&KWID=43700045510776737&SC_1=CjwKCAjwjtOTBhAvEiwASG4bCB_3Z00UQ7WSWflXyZElvdnmujgv2AHPexhibnGv016ELNKv_6PNDBoCKAQQAvD_BwE&SC_2=devry%20university-online&cid=1&utm_medium=cpc&utm_source=google&utm_term=devry%20university-online&ds_rl=1247960&gclid=CjwKCAjwjtOTBhAvEiwASG4bCB_3Z00UQ7WSWflXyZElvdnmujgv2AHPexhibnGv016ELNKv_6PNDBoCKAQQAvD_BwE&gclsrc=aw.ds" target="_blank" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio