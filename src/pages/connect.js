import React, { useState } from 'react'
import Finger from '../../public/dashboard/icons/Finger'
import Link from 'next/link'
import Button from '@/components/form/Button'
import Profile from '../../public/dashboard/icons/Profile'

const Connect = () => {

  const [connect, setConnect] = useState(false);

  const handleConnectWallet = () => {
    setConnect(prev => !prev)
  }
  return (
    <section
      className={`h-screen  w-full bg-[#FAFAFA]`}
    >
      <nav className='flex p-6  justify-between bg-white' >
        <div className='flex gap-2 justify-center items-center'>
          <Finger />
          <h3 className='text-[23.25px] text-[#095494] font-bold'>Doravet</h3>
        </div>
        {
          !connect ? (
            <div className='flex items-center'>
              <p className='mx-4'>Support</p>
              <Link href={'/login'}>
                <Button text={"Connect wallet"} /></Link>
            </div>
          ) : (
            <div className='flex items-center'>
              <p className='mx-4'>View result</p>
              <p className='mx-4'>Support</p>
              <p className='mx-4 bg-[#F5F2F6] p-2 rounded-md flex items-center'>Oxbaaf...75cec7 <span className='h-5 w-5 mx-3 inline-block rounded-full bg-blue-600'></span></p>
              <Profile />
            </div>
          )
        }
      </nav>
      <main className='py-[100px]'>
        <section className='text-center '>
          <h3 className='font-bold text-[25px]'>Welcome to <span className='uppercase'>employee of the year</span> poll</h3>
          <p className='text-[#4F4F4F] my-5'>Connect you wallet to get started</p>

          <Button handleClick={handleConnectWallet} className='mx-auto' text={"Connect wallet"} />

        </section>
      </main >

    </section >
  )
}

export default Connect