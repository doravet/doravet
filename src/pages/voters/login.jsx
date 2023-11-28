import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import TextInput from '@/components/form/TextInput';
import Button from '@/components/form/Button';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

const VoterLogin = () => {
  const [modal, setModal] = useState(false);
  const router = useRouter();

  const handleRegister = () => {
    setModal(true);
    console.log('modal clicked');
  };

  const handleWalletConnect = () => {
    router.push('/connect');
  };

  return (
    <>
      <main className={`flex h-screen p-5 ${poppins.className}`}>
        <section className="w-full lg:w-2/4 h-full flex justify-center items-center">
          <form className="md:w-[400px]">
            <aside className="mb-8">
              <h3 className="capitalize text-xl text-[#262626]">Register</h3>
              <p className="text-[#4F4F4F] my-2">
                Enter your details to register on the platform
              </p>
            </aside>
            <div className="my-5">
              <TextInput
                label={'Campaign ID'}
                type="text"
                placeholder={'Campaign ID'}
              />
            </div>
            <Button fullWidth text="Connect" handleClick={handleRegister} />
          </form>
        </section>
        <section className="w-3/4 h-full  hidden lg:block ">
          <article className="bg-[#F0F8FF] h-full rounded-lg flex justify-center items-center">
            <Image
              src={'/register/register.png'}
              width={700}
              height={700}
              alt="login "
            />
          </article>
        </section>
      </main>
      {modal && (
        <aside className="absolute top-0 left-0 w-screen h-screen bg-[#00000099] flex flex-col justify-center items-center">
          <article className="md:w-[400px] ">
            <div
              className="text-right flex justify-end cursor-pointer"
              onClick={() => setModal(false)}
            >
              <p className="bg-white rounded-full py-1 px-3 mb-4">x</p>
            </div>
            <section className="rounded-md bg-white py-6 px-8">
              <h4 className="text-center my-10">
                Connect wallet to complete registeration
              </h4>
              <div className="w-2/3 mx-auto">
                <Button
                  fullWidth
                  text="Connect wallet"
                  handleClick={handleWalletConnect}
                />
              </div>
            </section>
          </article>
        </aside>
      )}
    </>
  );
};

export default VoterLogin;
