import React from 'react'
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import email from "../assets/email.png"

const Contact = () => {
  return (
    <div id='Contact' className='flex flex-col md:flex-row justify-around bg-[#915EFF] text-white p-10 md:p-5 items-center mx-4 md:mx-20 rounded-2xl'>
            <div>
                <h1 className='text-2xl md:text-4xl font-bold'>Contact me</h1>
                <h3 className='text-lg md:text-2xl font-normal'>Reach me out at!</h3>
            </div>
    
            <ul className='text-sm md:text-xl space-y-3 mt-4 md:mt-0'>
                <li className='flex gap-1 items-center'>
                    <img src={github} alt="" className='w-5 h-5' />
                    <a href='https://github.com/Chahnapatel09' target="_blank" rel="noopener noreferrer" className='text-sm md:text-md'>GitHub chahna</a>
                </li>
                <li className='flex gap-1 items-center'>
                    <img src={linkedin} alt="" className='w-5 h-5'/>
                    <a href='https://www.linkedin.com/in/chahna09/' target="_blank" rel="noopener noreferrer" className='text-sm md:text-md'>LinkedIn</a>
                </li>
                <li className='flex gap-1 items-center'>
                    <img src={email} alt="" className='w-5 h-5'/>
                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=chahnanpatel@gmail.com' className='text-sm md:text-md'>Gmail</a>
                </li>
            </ul>
        </div>
  )
}

export default Contact