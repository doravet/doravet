import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Button from '@/components/form/Button'
import Finger from '../../public/dashboard/icons/Finger'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section
      className={`h-screen p-3 md:p-10 w-full ${inter.className}`}
    >
      <nav className='flex justify-between' >
        <div className='flex gap-2 justify-center items-center'>
          <Finger />
          <h3 className='text-[23.25px] text-[#095494] font-bold'>Doravet</h3>
        </div>
        <ul className='flex m-auto gap-16'>
          <li className='hidden md:inline-block'><Link href={""}>Feature</Link></li>
          <li className='hidden md:inline-block'><Link href={''}>FAQs</Link></li>
          <li className='hidden md:inline-block'><Link href={'/connect'}>Connect</Link></li>
        </ul>
        <Link href={'/login'}>
          <Button text={"Create New Poll"} /></Link>
      </nav>
      <main className='flex flex-col-reverse md:flex-row justify-between my-20'>
        <div className='md:w-[700px]'>
          <h3 className='text-[24px]'>Strategy for a better life.</h3>
          <h1 className='text-[30px] md:text-[48px] font-bold capitalize py-5' ><span className='text-[#095494]'>Cast your vote </span>in accordance with your conviction</h1>
          <h3 className='text-[18px] md:text-[22px] '>your voice is the catalyst for change. Join us on a transformative journey,
            empowering you to shape the future you desire..</h3>
          <div className='flex gap-5 py-10'>
            <Link href={'/login'}>
              <Button text={"Create New Poll"} />
            </Link>
            <Link href={'/voters/login'}>

              <Button text={"Vote in a Poll"} bg='primary-light' style='' color='primary' />
            </Link>
          </div>
        </div>
        <aside>
          <Image
            src={'/dashboard/images/Group 15 1.png'}
            width={600}
            height={600}
            alt='screenshot '
          />
        </aside>
      </main>

    </section>
  )
}

