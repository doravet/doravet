import React from 'react'
import AddPoll from '../../../../public/dashboard/overview/addPoll'
import Button from '@/components/form/Button'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import doravetABI from "../../../contract/doravetABI.json"

const CreatePoll = ({ createPoll }) => {
  const { config } = usePrepareContractWrite({
    address: '0xf68F6B997D8c51A1622eEFF57AD6A1628c2F60E6',
    abi: doravetABI,
    functionName: 'getCampaign',
  })
  const { write } = useContractWrite(config)
  return (
    <aside className='h-[70vh]  justify-center items-center flex '>
      <div className='md:w-[400px] py-8 flex flex-col items-center rounded-lg border'>
        <AddPoll />
        <p className='text-center mx-6 my-4'>
          <span className='block'> Welcome Youngy, lets get started.</span>
          <span className='block'>Create a poll</span>
        </p>
        <Button handleClick={createPoll} disabled={!write} onClick={() => write?.()} text={'Create Poll'} style='text-white w-[200px] my-4' />
      </div>
    </aside>
  )
}

export default CreatePoll