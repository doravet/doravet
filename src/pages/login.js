import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/form/Button';
import React, { useState, useEffect } from 'react'
import { AllUserCampaigns } from "@/components/contracts/call";

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })






export default function Login() {
  const router = useRouter()
  const handleSubmit = () => router.push("/dashboard/overview")

  const [isProfile, setIsProfile] = useState(false);
  const fetchProfile = async () => {
    const profile = await  AllUserCampaigns('0x9b901cac3fe40056635fe1e5bb53a6e3e06cc582');
    console.log(profile)
    if (profile) {
        setIsProfile(true);
    }
  };
  
  
  
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <main
      className={`flex h-screen p-5 ${poppins.className}`}
    >
      <section className='w-full lg:w-2/4 h-full flex justify-center items-center'>
        <form className='md:w-[400px]' onSubmit={handleSubmit}>
          <aside className='mb-8'>
            <h3 className='capitalize text-xl text-[#262626]'>Log in</h3>
            <p className='text-[#4F4F4F] my-2'>
              Connect your wallet to access your account
            </p>
          </aside>
          
          <div className='my-5 mx-auto'>
          <Button fullWidth text="Login" onClick={() => fetchProfile()}/>
          </div>

          
          <p className='text-[16px] my-3 cursor-pointer'>
            <span>Don’t have an account?</span>
            <Link href={'register'} className='cursor-pointer'>
              <span className='text-[#095494] inline-block ml-2'>Register</span>
            </Link>

          </p>
        </form>
      </section>
      <section className='w-3/4 h-full  hidden lg:block '>
        <article className='bg-[#F0F8FF] h-full rounded-lg flex justify-center items-center'>
          <Image
            src={'/login/login.png'}
            width={500}
            height={500}
            alt='login '
          />
        </article>
      </section>

    </main>
  )
}
