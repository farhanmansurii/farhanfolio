import Marquee from './Marquee'
import ProjectCard from './ProjectCard'
import { Project, getData } from './utils/getdata'

import Link from 'next/link'
export default async function Featured() {
  const data = await getData()
  const featuredData = data.filter((e: Project) => e.isFeatured === true)
  return (
    <div className='bg-[#f4f4f4]  text-[#1a1a1a] overflow-hidden'>
      <Marquee text='Featured Projects' />
      <div className='flex  flex-col h-full  w-full'>
        {featuredData.map((data: Project, i: number) =>

          <ProjectCard key={i} data={data} index={i} />
        )}
        <div className='w-10/12 mx-auto lg:px-20 text-xl  relative items-center justify-between flex  py-10 '
        >
          <Link href={'/projects'} className='px-6 py-2 rounded-full bg-[#1a1a1a] font-thin text-white uppercase'>View all projects  ↗</Link>
        </div>
      </div>
    </div>
  )
}


