import React, { useState } from 'react'
import Finger from '../../public/dashboard/icons/Finger'
import Link from 'next/link'
import Button from '@/components/form/Button'
import Profile from '../../public/dashboard/icons/Profile'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import doravetABI from "../contract/doravetABI.json";


const contestants = [
  {
    name: "Paschal",
    value: "chukwu"
  },
  {
    name: "Olamide",
    value: "ifedola"
  },
  {
    name: "Ifeoluwa",
    value: "ife"
  },
]

const Connect = () => {

  const [isConnected, setIsConnected] = useState(true)
  const [voteComplete, setVoteComplete] = useState(false)
  const [viewResult, setViewResult] = useState(false)
  const [contestant, setContestant] = useState("")

  const handleVote = () => {
    if (contestant) {

      setVoteComplete(true)
    }
  }
  const { config } = usePrepareContractWrite({
    address: '0xf68F6B997D8c51A1622eEFF57AD6A1628c2F60E6',
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

        {
          !isConnected ? (
            <div className='flex items-center'>
              <p className='mx-4'>Support</p>

              <ConnectButton disabled={!write} onClick={() => write?.()} />
            </div>
          ) : (
            <div className='flex items-center'>
              <p className='mx-4 text-blue-500'>View result</p>
              <p className='mx-4'>Support</p>
              <p className='mx-4 bg-[#F5F2F6] p-2 rounded-md flex items-center'>Oxbaaf...75cec7 <span className='h-5 w-5 mx-3 inline-block rounded-full bg-blue-600'></span></p>
              <Profile />
            </div>
          )
        }




      </nav>
      <main className='py-[100px]'>

        {
          !isConnected ? (
            <section className='text-center '>
              <h3 className='font-bold text-[25px]'>Welcome to <span className='uppercase'>employee of the year</span> poll</h3>
              <p className='text-[#4F4F4F] my-5'>Connect you wallet to get started</p>

              <div className='mx-80 px-72'><ConnectButton /></div>

            </section>
          ) : (
            <section className='md:w-[640px] mx-auto '>
              <h3 className='text-center font-semibold my-5'>Employee of the year poll</h3>
              {
                !viewResult ? (
                  <article>
                    {
                      !voteComplete ? (
                        <form className='p-3 border rounded-md'>
                          <p className='my-3 font-semibold'>Employee of the year</p>
                          {
                            contestants.map((contest, id) => (
                              <label className='flex items-center gap-x-2 my-3 border-t py-3' key={id} onClick={() => setContestant(contest)}>

                                <input type="radio" name="employee_of_the_year" value={contest.value} />
                                <p>{contest.name}</p>
                              </label>
                            ))
                          }
                          <Button text={"Submit"} handleClick={handleVote} />
                        </form>
                      ) : (
                        <section className='p-3 border rounded-md'>
                          <p className='text-[#4F4F4F] my-5 text-center'>Thank you for voting. Result will be available at the end of the polls.</p>
                          <p className='text-[#095494] text-center block'>
                            <span className='mx-3 cursor-pointer' onClick={() => setViewResult(true)}>View Results</span>
                          </p>
                        </section>
                      )
                    }
                  </article>
                ) : (
                  <article className='flex gap-x-3 items-start'>
                    <section className=' w-4/6'>
                      {
                        contestants.map((contests, id) => (
                          <div className='bg-white border rounded-md py-3 px-4 my-6' key={id}>
                            <p className='flex justify-between items-center my-2 font-semibold'>
                              <span>{contests.name} {contests.value}</span>
                              <span>65%</span>
                            </p>
                            <p className='rounded-lg h-2 overflow-hidden bg-[#D9D9D9]'>
                              <span className='h-full w-1/2 bg-[#095494] block rounded-md'></span>
                            </p>
                            <span className='inline-block text-sm'>6 votes</span>
                          </div>
                        ))
                      }
                    </section>
                    <section className='bg-white border rounded-md py-3 px-4 w-2/6 my-6'>
                      <p className='font-semibold my-2'>Total Votes - 33</p>
                      <p className='font-semibold my-2'>Registered Voters - 33</p>
                    </section>
                  </article>
                )
              }






            </section>
          )
        }



      </main >

    </section >
  )
}

export default Connect