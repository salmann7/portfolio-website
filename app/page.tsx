'use client';

import AboutMe from '@/components/about-me';
import Hero from '@/components/hero'
import { useEffect, useState } from 'react';

export default function Home() {
  const [ mounted, setMounted ] = useState(false);

    useEffect(()=> {
        setMounted(true);
    },[])

    if(!mounted){
        return null;
    }
  return (
    <>
    <Hero />
    <AboutMe />
    </>
  )
}
