import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faArrowRight, faUser, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import ButtonIcon from '../components/ButtonIcon'
import Container from '../components/Container'
function MainHero() {
  const [email, setEmail] = useState('')
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className='min-h-[600px] flex items-center justify-center'>
      <div className='flex items-center px-[12%] h-full gap-6'>
        <div className='w-[50%] flex flex-col gap-6'>
            <h1 className='text-7xl font-bold text-navy-blue'>Viewing your <span className=' text-light-blue'>SQL Database</span> never got easier</h1>
            <h3 className='text-navy-blue text-opacity-45 text-2xl font-semibold'>The simplest platform to manipulate, monitor and test your data.</h3>
            <button className='text-off-white text-lg font-light flex flex-col gap-2'>
                <input type="text" value={email} onChange={handleEmailChange} placeholder="tom@cruise.com" className='border-solid border border-navy-blue border-opacity-50 text-navy-blue p-2 w-[30ch]'/>
                <ButtonIcon handler={() => console.log('clicked')} icon={faArrowRight} text='Join Waitlist' style='bg-navy-blue p-2 w-[30ch] flex items-center justify-center gap-2 hover:bg-white duration-300 ease-in'/>
            </button>
        </div>
        <div className='w-[50%] h-[400px] border-solid border border-black'>

        </div>
      </div>
    </div>
  )
  
}

function ItemCard({ icon, title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex gap-2 items-center hover:-translate-x-1 hover:-translate-y-1 duration-300 ease-in-out">
      <div className="w-[50px] h-[50px] flex items-center justify-center rounded-md">
        <FontAwesomeIcon icon={icon} className="text-3xl text-light-blue text-opacity-50" />
      </div>
      <div>
        <h3 className="text-2xl text-light-blue font-semibold cursor-pointer">{title}</h3>
        <div
          className="text-lg overflow-hidden max-h-0 hover:max-h-20 hover:animate-slideUp duration-300 ease-in-out"
        >
          <p className="text-md font-light text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  );

}

function Home() {
  return (
      <Container>
        <MainHero />
        <div id="table-hero" className='h-[400px] bg-navy-blue text-off-white px-[5%]'>
          <div className='px-[9%] py-[12%]'>
            <h2 className='text-5xl font-semibold pb-8'>Connect, View, Edit.</h2>
            <ItemCard icon={faTable} title="Create" description="Create new databases, tables, and row entries through a no-code interface" />
            <ItemCard icon={faUser} title="Test" description="Use for any development environment to view your SQL database" />
            <ItemCard icon={faFileDownload} title="Export Data" description="Export your data as a CSV or Excel sheet" />
          </div>
        </div>
      </Container>
        
  )
}

export default Home