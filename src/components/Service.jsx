import React from 'react'
import softDev from '../assets/software.png'

import { PhoneIcon, CodeIcon, ArrowRightIcon } from '@heroicons/react/outline'
import { ChipIcon, DatabaseIcon } from '@heroicons/react/solid'
import team from '../assets/back-img.jpg'
import soft from '../assets/back-img.jpg'
import cyber from '../assets/back-img.jpg'
import data from '../assets/back-img.jpg'
const Service = ()=>{
    return(


        <div name='service' className='w-full mt-24'>
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
                        <div className='p-8'><CodeIcon className='w-24 p-4 bg-white rounded-lg mt-[-4rem]' /> 
                            <h3 className='font-bold text-2xl my-6'>Software Development</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam,</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact us <ArrowRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>

                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'><ChipIcon className='w-24 p-4 bg-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Cyber security & Cloud solution</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam,</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact us <ArrowRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>

                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'><DatabaseIcon className='w-24 p-4 bg-white rounded-lg mt-[-4rem]' />
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

    )
}

export default Service;