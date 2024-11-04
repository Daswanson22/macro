import React from 'react'
import OasisLogo from '../assets/images/sql-oasis.png'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {

  const navigate = useNavigate()
  const home = () => {
    navigate('/')
}
  return (
    <div>
        <nav className="bg-off-white text-navy-blue p-4 flex items-center justify-between text-xl px-[5%] shadow-nav-shadow font-archivo">
            <div onClick={home} className='w-[100px] h-[100px] cursor-pointer'>
                <img src={OasisLogo} alt="" />
            </div>

            <div className='flex gap-8 font-semibold'>
                <Link to="/about" className='cursor-pointer hover:text-light-blue duration-300 ease-in-out'>Features</Link>
                <Link to="/forum" className='cursor-pointer hover:text-light-blue duration-300 ease-in-out'>Forum</Link>
                <Link to="/contact" className='cursor-pointer hover:text-light-blue duration-300 ease-in-out'>Pricing</Link>
                <Link to="/dashboard" className='cursor-pointer hover:text-light-blue duration-300 ease-in-out'>Dashboard</Link>
            </div> 

            <div className='flex flex-col lg:flex-row lg:gap-8 gap-2 text-white'>
                <Link to="/pricing" className='bg-gradient-to-r from-navy-blue to-light-blue rounded-lg w-[12ch] py-2 text-center hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl duration-300 ease-in-out'>Get Started</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar