import AboutText from '@/components/AboutText';
import Name from '@/components/Name';
import dynamic from 'next/dynamic';


const DynamicContact = dynamic(() => import('@/components/Contact'));
const DynamicSkills = dynamic(() => import('@/components/Skills'));
{/* @ts-expect-error Server Component */ }
const Featured = dynamic(() => import('@/components/Featured'));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      {/* <DynamicNavbar /> */}
      <Name />

      <AboutText />
      <DynamicSkills />

      <Featured />
      <DynamicContact />
    </main>
  )
}
