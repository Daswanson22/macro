import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import OasisLogo from '../assets/images/sql-oasis.png'
function Footer() {
  return (
    <footer className='bg-navy-blue text-off-white px-[5%] py-[40px] text-md'>
      <div className='flex items-start justify-between py-4'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-center gap-2 font-light text-md'>
            <div>
              <img src={OasisLogo} className='w-[96px] h-[96px] rounded-md'></img>
            </div>
            <div className='flex flex-col items-start justify-start'>
              <p className='font-bold font-archivo text-light-blue'>Viewing your SQL database never got easier</p>
              <p>Copyright © 2024 - All rights reserved</p>
              <div className='flex space-x-4 pt-2'>
                <Link href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </Link>
                <Link href='https://twitter.com/' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faTwitter} size="lg"/>
                </Link>
                <Link href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faInstagram} size="lg"/>
                </Link>
                <Link href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                </Link>
              </div>    
            </div>  
          </div> 
        </div>

        <div className='flex justify-between w-[50%]'>
          <div className='flex flex-col gap-1 text-off-white font-light'>
            <span className='font-bold font-archivo text-slate-400'>LINKS</span>
            <Link to='/privacy-policy'>Login</Link>
            <Link to='/terms-of-service'>Pricing</Link>
            <a href="mailto:daswanson22@gmail.com">Support</a>
            <Link to='/forum'>Forum</Link>
          </div>

          <div className='flex flex-col space-y-2 text-off-white font-light'>
            <span className='font-bold font-archivo text-slate-400'>LEGAL</span>
            <Link to='/privacy-policy'>Privacy Policy</Link>
            <Link to='/terms-of-service'>Terms of Service</Link>
            <Link to="/licenses">Licenses</Link>
          </div>

          <div className='flex flex-col space-y-2 text-off-white font-light'>
            <span className='font-bold font-archivo text-slate-400'>BY THE MAKER OF SQL OASIS</span>
            <Link to='https://primepicksfantasy.com'>Prime Pick</Link>
            <Link to='https://wws-alliances.org'>World Wide Strategic Alliances</Link>
            <Link to="https://torqsports.com">Torqsports</Link>
          </div>
        </div>

        <div>

        </div>
      </div>
    </footer>
  )
}

export default Footer