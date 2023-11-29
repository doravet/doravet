import Button from '@/components/form/Button'
import TextInput from '@/components/form/TextInput'
import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form';
import Delete from '../../../../public/dashboard/icons/Delete';
import Modal from '@/components/modal';
import QuestionFields from './questionFields';
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import doravetABI from "../../../contract/doravetABI.json"

const PollForm = () => {
  const [open, setOpen] = useState(false);
  const { config } = usePrepareContractWrite({
    address: '0x9b901cac3fe40056635fe1e5bb53a6e3e06cc582',
    abi: doravetABI,
    functionName: 'createCampaign',
  })
  const { write } = useContractWrite(config)

  const toggleModal = () => {
    setOpen(prev => !prev)
  }


  const { control, register, formState, handleSubmit } = useForm({
    defaultValues: {
      Question: '',
      Options: [
        {
          values: [{ option: '', id: "" }]
        }
      ]
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: "Questions",
  });

  console.log(fields)
  return (
    <>
      <aside className='justify-center mt-10 flex mb-[130px]'>
        <form className='md:w-[500px] flex flex-col  '>
          <section className='rounded-lg border p-4 bg-white my-4'>
            <TextInput label={'Title'} placeholder={'e.g Headies Award,Presidential Election'} type={'text'} />
            <TextInput label={'Description'} placeholder={'Describe what the poll is about'} type={'text'} />
            <div className='flex justify-between items-center  w-full gap-4'>
              <TextInput label={'Start Date'} placeholder={'Start date of poll'} type={'date'} />
              <TextInput label={'End date'} placeholder={'End date of poll'} type={'date'} />
            </div>
          </section>
          <form>
           
          </form>
          <section className='rounded-lg border p-4 bg-white flex justify-between items-center gap-10'>
            
            <Button text={'Launch Poll'}  onClick={() => write?.()}/>
          </section>
        </form>
      </aside>
      <Modal open={open} toggleModal={toggleModal}>
        <section className='text-center py-3'>
          <p className='bg-[#FFDDDD] flex justify-center items-center w-10 h-10 rounded-full mx-auto my-3'>
            <Delete />
          </p>
          <h3 className='font-bold'>Delete Poll?</h3>
          <p className='text-[14px] w-[300px] mx-auto my-4'>Are you sure you want to delete this poll? This action cannot be undone</p>
          <div className='flex justify-evenly items-center w-[300px] mx-auto'>
            <Button text={'Yes,Delete'} className={'bg-red-600'} />
            <Button text={'Cancel'} handleClick={toggleModal} className={' bg-[#EAE9E9]'} color='text-[#4F4F4F]' />
          </div>
        </section>
      </Modal>
    </>
  )
}

export default PollForm


{/* {fields.map((field, index) => (
            <>
              <input
                key={field.id}
                placeholder={`Options ${index + 1}`}
                className='w-full py-3 border border-gray-300 px-3 text-[12px] my-2 rounded-md capitalize'
                {...register(`field.Options.${index}`)}
              />
              {
                fields.length - 1 === index && (
                  <>
                    <p onClick={() => append({ option: "my name", id: 1 })}>Add Option</p>
                    {index > 0 && (<p onClick={() => remove(index)}>Remove Option</p>)}
                  </>
                )
              }
            </>
          ))} */}