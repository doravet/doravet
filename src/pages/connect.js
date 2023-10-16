import React, { useState } from 'react'
import Finger from '../../public/dashboard/icons/Finger'
import Link from 'next/link'
import Button from '@/components/form/Button'
import Profile from '../../public/dashboard/icons/Profile'
import RadioButtons from '@/components/connect/radioButtons'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import doravetABI from "../contract/doravetABI.json"


const Connect = () => {
  const { config } = usePrepareContractWrite({
    address: '0x450aCa0a50401121a9A2a6C679c29eFBd340DCc1',
    abi: doravetABI,
    functionName: 'registerVoter',
  })
  const { write } = useContractWrite(config)
 
  
  return (
    <section
      className={`h-screen  w-full bg-[#FAFAFA]`}
    >
      <nav className='flex p-6  justify-between bg-white' >
        <div className='flex gap-2 justify-center items-center'>
          <Finger />
          <h3 className='text-[23.25px] text-[#095494] font-bold'>Doravet</h3>
        </div>
        
            <div className='flex items-center'>
              <p className='mx-4'>Support</p>

              <ConnectButton disabled={!write} onClick={() => write?.()}/>
            </div>
         
            <div className='flex items-center'>
              <p className='mx-4 text-blue-500'>View result</p>
              <p className='mx-4'>Support</p>
              <p className='mx-4 bg-[#F5F2F6] p-2 rounded-md flex items-center'>Oxbaaf...75cec7 <span className='h-5 w-5 mx-3 inline-block rounded-full bg-blue-600'></span></p>
              <Profile />
            </div>
        
      </nav>
      <main className='py-[100px]'>
       
          <section className='text-center '>
            <h3 className='font-bold text-[25px]'>Welcome to <span className='uppercase'>employee of the year</span> poll</h3>
            <p className='text-[#4F4F4F] my-5'>Connect you wallet to get started</p>

            <div className='mx-80 px-72'><ConnectButton/></div>

          </section>
      
          <section className='md:w-[500px] mx-auto '>
            <h3 className='text-center font-semibold my-5'>Employee of the year poll</h3>
           
                <form className='p-3 border rounded-md'>
                  <p className='my-3'>Employee of the year</p>
                 
                    {/* [1, 2, 3].map((radio) => ( 
                      <RadioButtons key={radio} id={radio} />*/}
                  
                  <Button text={"Submit"} />
                </form>
            
                <section className='p-3 border rounded-md'>
                  <p className='text-[#4F4F4F] my-5 text-center'>Thank you for voting. Result will be available at the end of the polls.</p>
                  <Link href={'/'} className='text-[#095494] text-center block'>
                    <span>&lt;</span>
                    <span className='mx-3'>Return to Home</span>
                  </Link>
                </section>
             
          </section>
        
      </main >

    </section >
  )
}

export default Connect