import React from 'react'
import { Meteors } from "@/components/magicui/meteors";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from '@/components/magicui/shimmer-button'; 
const Page = () => {
    return (
        <div className='h-screen w-screen bg-black text-white flex justify-center items-center'>
            <Meteors />

            <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  New Project Coming
                </span>
              </ShimmerButton>
              {/* <div className='bg-re  p-5 bg-yellow-200 light:bg-green-200 rounded-lg mt-5'>
                fnjak
              </div> */}
        </div>
    )
}

export default Page