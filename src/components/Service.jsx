import React from 'react'
import softDev from '../assets/software.png'

import { PhoneIcon, ArrowRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import team from '../assets/back-img.jpg'
import cmu from '../assets/back-img.jpg'
import auca from '../assets/back-img.jpg'
import collegio from '../assets/back-img.jpg'
const Service = ()=>{
    return(


        <div name='education' className='w-full mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={team} alt="" />
            </div>
            <div className='max-w-[1240px-] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-5xl pt-8 text-slate-300 uppercase text-center'>Our Srvices</h2>
                    <h1 className='text-5xl mt-4 font-bold text-white'> We build accessible and secure system</h1>
                    <p className='py-4 text-3xl text-slate-300'>We help people build software system that include people with disabilities, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 sm:pt-20 text-black '>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'><img src={cmu} className='w-24 p-4 bg-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Software Development</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam,</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact us <ArrowRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>

                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'><img src={auca} className='w-24 p-4 bg-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Cyber security & Cloud solution</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam,</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact us <ArrowRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>

                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'><img src={collegio} className='w-24 p-4 bg-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Data Analytics and visualisation</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam,</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact us <ArrowRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    



        // <div className='bg- py-8'>
        //     <h1 className='text-5xl font-bold text-white'> We build accessible and secure system</h1>
        // <div className='grid md:grid-cols-3 '>
            
        //     <div className='flex flex-col justify-between border-solid border-1 rounded-md border-gray-400 p-8 mx-4 md:w-[20rem] shadow-lg shadow-gray-500  '>
        //         <h1 className='text-3xl font-semibold'>Software Development</h1>
        //         <div className='flex justify-center'><img src={softDev} alt="/" className='w-[20rem]' /></div>
        //         <p> We build secure sytem that are accessible to all induviduals, Inclusion is all we provide</p>
        //     </div>

        //     <div className='flex flex-col justify-between border-solid border-1 rounded-md border-gray-400 p-8 mx-4 md:w-[20rem] shadow-lg shadow-gray-500  '>
        //         <h1 className='text-3xl font-semibold'>Software Development</h1>
        //         <div className='flex justify-center'><img src={softDev} alt="/" className='w-[20rem]' /></div>
        //         <p> We build secure sytem that are accessible to all induviduals, Inclusion is all we provide</p>
        //     </div>

        //     <div className='flex flex-col justify-between border-solid border-1 rounded-md border-gray-400 p-8 mx-4 md:w-[20rem] shadow-lg shadow-gray-500  '>
        //         <h1 className='text-3xl font-semibold'>Software Development</h1>
        //         <div className='flex justify-center'><img src={softDev} alt="/" className='w-[20rem]' /></div>
        //         <p> We build secure sytem that are accessible to all induviduals, Inclusion is all we provide</p>
        //     </div>
        // </div>
        // </div>
    )
}

export default Service;