
import AniText from "@/components/AniText";
import AnimSmallText from "@/components/AnimSmallText";
import AnimatedTagList from "@/components/AnimatedTagList";
import { getSingleProject } from "@/components/utils/getdata";
import Link from "next/link";
import React from "react";



export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getSingleProject(params.slug)
  return (
    <div className="w-full text-white  ">



      <div style={{ backgroundColor: `${data?.color}` }} className="flex  w-full h-full  gap-4 flex-col   justify-center">
        <div className="flex flex-col my-7 p-4  ">
          <div>
            <div className=" space-y-3 mt-10 lg:mt-16">
              <Link href='/projects'><button className=" border-b w-fit " >Back to all works</button></Link>
              <div className=" lg:w-10/12  ">
                <div className={"text-5xl text-left flex flex-wrap  lg:text-6xl  "}>
                  <AnimSmallText>

                    {data.title}
                  </AnimSmallText>

                </div>

              </div>


            </div>
          </div>

          <div className="text-inherit text-xl lg:text-3xl italic   lg:w-8/12">

            <div className="text-xl   ">



              {data.shortDescription}

            </div>


          </div>
          <div className="my-7 justify-between w-full p-4 flex-col gap-4 flex border-t ">
            <div className="flex flex-row gap-5 items-center  font-xl">


              <a
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                }}
                className='whitespace-nowrap'
                href={data.liveLinks}>Live Link ↗</a>

              <a
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                }}
                href={data.github}>Github ↗</a>
            </div>
            <div className=" gap-5  font-xl">

              <AnimatedTagList tags={data.techStack.split(',')} />

            </div>



          </div>

          <div className="flex w-fit flex-row  overflow-scroll md:overflow-hidden">

            <img src={data.image} className="h-48 md:h-64 lg:h-96" />
            <img src={data.image2} className="h-48 md:h-64 lg:h-96 " />

          </div>

          <div className="text-xl">



            {data.description}

          </div>
        </div>
      </div>
    </div>
  );
}





