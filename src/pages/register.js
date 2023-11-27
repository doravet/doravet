import Button from '@/components/form/Button'
import TextInput from '@/components/form/TextInput'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import doravetABI from "../contract/doravetABI.json";


const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

const Register = () => {
  const { config } = usePrepareContractWrite({
    address: '0x9b901cac3fe40056635fe1e5bb53a6e3e06cc582',
    abi: doravetABI,
    functionName: 'join',
})
const { data, isLoading, isSuccess, write } = useContractWrite(config)
  return (
    <main
      className={`flex h-screen p-5 ${poppins.className}`}
    >
      <section className='w-full lg:w-2/4 h-full flex justify-center items-center'>
        <form className='md:w-[400px]'>
          <aside className='mb-8'>
            <h3 className='capitalize text-xl text-[#262626]'>Register</h3>
            <p className='text-[#4F4F4F] my-2'>
              Enter your details to register on the platform
            </p>
          </aside>
          <div className='my-5'>
            <TextInput
              label={'Email address'}
              type="email"
              placeholder={'email address'}
            />
          </div>
          <div className='my-5 flex gap-4'>
            <div className='w-1/2'>
              <TextInput
                label={'First Name'}
                type="text"
                placeholder={'first name'}
              />
            </div>
            <div className='w-1/2'>
              <TextInput
                label={'Last Name'}
                type="text"
                placeholder={'last name'}
              />
            </div>

          </div>
          <div className='my-5'>
            <TextInput
              label={'Name of organization '}
              type="text"
              placeholder={'Name of organization '}
            />
          </div>
         
         
          <Button fullWidth text="Register" onClick={() => write?.()} />
         
          <p className='text-[16px] my-3 '>
            <span>Already have an account?</span>
            <Link href={'login'}>
              <span className='text-[#095494] inline-block ml-2'>Log In</span>
            </Link>
          </p>
          <p className='text-[14px]'>
            <span>By signing up you accept our</span>
            <span className='text-[#095494] inline-block ml-1'>terms and conditions </span> &
            <span className='text-[#095494] ml-1'>privacy policy </span>
          </p>

        </form>
      </section>
      <section className='w-3/4 h-full  hidden lg:block '>
        <article className='bg-[#F0F8FF] h-full rounded-lg flex justify-center items-center'>
          <Image
            src={'/register/register.png'}
            width={700}
            height={700}
            alt='login '
          />
        </article>
      </section>

    </main>
  )
}

export default Register