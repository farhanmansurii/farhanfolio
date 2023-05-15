

import Marquee from '@/components/Marquee';
import ProjectCard from '@/components/ProjectCard';
import { Project, getData } from '@/components/utils/getdata';

import Link from 'next/link';
import React from 'react'

export default async function projects() {
  const data = await getData();

  return (
    <main className="flex w-full py-10 text-black bg-[#f4f4f4] h-full  gap-4  font-neue flex-col   justify-center">
      <Marquee text='All projects' />
      <div
        className="text-lg   h-full  gap-5 flex  flex-col"
      >
        {data.map((e: Project, i: number) => (
          <Link href={`/${e.slug}`} key={e._id}>

            <ProjectCard data={e} index={i} />
          </Link>
        ))}
      </div>
    </main>
  )
}
