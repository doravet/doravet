import React from 'react'
import AddPoll from '../../../../public/dashboard/overview/addPoll'
import Button from '@/components/form/Button'


const CreatePoll = ({ createPoll }) => {
 
  return (
    <aside className='h-[70vh]  justify-center items-center flex '>
      <div className='md:w-[400px] py-8 flex flex-col items-center rounded-lg border'>
        <AddPoll />
        <p className='text-center mx-6 my-4'>
          <span className='block'> Welcome Youngy, lets get started.</span>
          <span className='block'>Create a poll</span>
        </p>
        <Button handleClick={createPoll}  text={'Create Poll'} style='text-white w-[200px] my-4' />
      </div>
    </aside>
  )
}

export default CreatePoll