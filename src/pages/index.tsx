import Head from 'next/head';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { CarShow } from '../components/CarShow';
import { Menu } from '../components/Menu';
import { Loading } from '../components/Loading';

export default function Home() {
  const [ isOnMenu, setIsOnMenu ] = useState(true);
  const [ quality, setQuality ] = useState(0);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      {isOnMenu ? (
        <Menu setQuality={setQuality} setIsOnMenu={setIsOnMenu} />
      ) : (
        <Suspense fallback={<Loading />}>
          <Canvas className='!min-h-screen h-full w-full' shadows={quality >= 1 ? true : false}>
            <CarShow quality={quality} />
          </Canvas>
        </Suspense>
      )}
    </>
  )
}
