
import AboutText from '@/components/AboutText';
import Contact from '@/components/Contact';
import Featured from '@/components/Featured';
import Name from '@/components/Name';
import Skills from '@/components/Skills';
import Preloader from '@/components/loader/Preloader';
import dynamic from 'next/dynamic';





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">

      <Name />

      <AboutText />
      <Skills />
      {/* @ts-expect-error Server Component */}
      <Featured />
      <Contact />
    </main>
  )
}
