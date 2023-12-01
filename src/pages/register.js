import Button from '@/components/form/Button'
import TextInput from '@/components/form/TextInput'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { join } from "@/components/contracts/call";


const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

const Register = () => {

  const [modal, setModal] = useState(false)
  const router = useRouter()
  const [isJoin, setIsJoin] = useState(false);
  
  const createJoin= async () => {
      await join('Ifeoluwa', 'Sanni', 'AminiTech', 'ifeoluwaayo5@gmail.com');

  }

  const fetchJoin = async () => {
      const join = await  join('0x9b901cac3fe40056635fe1e5bb53a6e3e06cc582');
      console.log(join)
      if (join) {
          setIsJoin(true);
      }
  };



  useEffect(() => {
      fetchJoin();
  }, []);


 
  const handleWalletConnect = () => {
    write?.()
    router.push("/dashboard/overview")
  }

  return (
    <>
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
                required />
            </div>
            <div className='my-5 flex gap-4'>
              <div className='w-1/2'>
                <TextInput
                  label={'First Name'}
                  type="text"
                  placeholder={'first name'}
                  required />
              </div>
              <div className='w-1/2'>
                <TextInput
                  label={'Last Name'}
                  type="text"
                  placeholder={'last name'}
                  required />
              </div>

            </div>
            <div className='my-5'>
              <TextInput
                label={'Name of organization '}
                type="text"
                placeholder={'Name of organization '}
                required />
            </div>


            <Button fullWidth text="Register" onClick={() => createJoin()}/>

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
      {modal && (
        <aside className='absolute top-0 left-0 w-screen h-screen bg-[#00000099] flex flex-col justify-center items-center'>

          <article className='md:w-[400px] '>
            <div className='text-right flex justify-end cursor-pointer' onClick={() => setModal(false)}>
              <p className='bg-white rounded-full py-1 px-3 mb-4'>
                x
              </p>
            </div>
            <section className='rounded-md bg-white py-6 px-8'>
              <h4 className='text-center my-10'>Connect wallet to complete registration</h4>
              <div className='w-full mx-24'>
                <ConnectButton handleClick={handleWalletConnect} />
              </div>
            </section>

          </article>
        </aside>
      )}
    </>
  )
}

export default Register