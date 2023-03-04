import React from 'react'
import companyLogo1 from '../assets/companyLogo1.png'
import companyLogo2 from '../assets/companyLogo2.png'
import companyLogo3 from '../assets/companyLogo3.png'
import companyLogo4 from '../assets/companyLogo4.png'

const Companies = () => {
  return (
    <div className='w-full bg-white py-[50px]'>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto'>
        <h1 className='text-center text-2xl font-bold text-[#536E96]'>Trusted by over 25,000 teams around the world.</h1>
        <p className='text-center text-[#536E96] text-xl'>Leading companies use the same courses to help employees keep their skills fresh.</p>
        <div className='flex justify-center py-8 md:gap-8'>
          <img src={companyLogo1} alt="img1" />
          <img src={companyLogo2} alt="img2" />
          <img src={companyLogo3} alt="img3" />
          <img src={companyLogo4} alt="img4" />  
        </div>
      </div>
    </div>
  )
}

export default Companies