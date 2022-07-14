import { React, Component } from "react";
import profile1 from "../assets/profile.jpg";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwithc
} from 'react-icons/fa'

const Team = () => {
  return (
    <div className="w-full bg-cyan-600">
      <div className='w-full text-white my-24'>
        <div className='max-w-[1240px] mx-auto py-4'>
          <div className='text-center py-4 text-slate-300'>
            <h3 className='text-5xl font-bold text-white'>Team</h3>
            <p className="text-white mt-4">Six tabs is a startup created by a group of 6 Engineers whose
              value is Professionalism, Integrity, Quality work, and
              Accessibility for all.</p>
            <h2 className="text-2xl my-4 text-white">Six Founders</h2>
          </div>
          <div className='grid md:grid-cols-3'>

            <div className='bg-white md:h-[32rem] text-slate-900 m-4 rounded-xl py-8 relative'>
              <span className='uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm'>CEO</span>
              <div className="flex justify-center"><img className="w-60" src={profile1} alt="/" /></div>
              <div><p className="text-xl font-semibold text-black mx-4">Yves Byiringiro</p></div>
              <div><p className="">Our CEO has great experience in Software engineering</p></div>
              <p className='text-2x py-4 text-slate-500'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam</p>
              <div className='flex justify-between mx-8 text-2xl'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />

              </div>
            </div>

            {/* -------------------------------------------------------------Marius-------------------------------------------- */}

            <div className='bg-white md:h-[32rem] text-slate-900 m-4 rounded-xl py-8 relative'>
              <span className='uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm'>CEO</span>
              <div className="flex justify-center"><img className="w-60" src={profile1} alt="/" /></div>
              <div><p className="text-xl font-semibold text-black mx-4">Yves Byiringiro</p></div>
              <div><p className="">Our CEO has great experience in Software engineering</p></div>
              <p className='text-2x py-4 text-slate-500'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam</p>
              <div className='flex justify-between mx-8 text-2xl'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />

              </div>
            </div>

            {/* --------------------------------------------------------Patrick ---------------------------------------------- */}


            <div className='bg-white md:h-[32rem] text-slate-900 m-4 rounded-xl py-8 relative'>
              <span className='uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm'>CEO</span>
              <div className="flex justify-center"><img className="w-60" src={profile1} alt="/" /></div>
              <div><p className="text-xl font-semibold text-black mx-4">Patrick Iradukunda</p></div>
              <div><p className="">Our CEO has great experience in Software engineering</p></div>
              <p className='text-2x py-4 text-slate-500'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam</p>
              <div className='flex justify-between mx-8 text-2xl'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />

              </div>
            </div>

            {/* ---------------------------------------------------Yves-------------------------------------------------------- */}


            <div className='bg-white md:h-[32rem] text-slate-900 m-4 rounded-xl py-8 relative'>
              <span className='uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm'>CEO</span>
              <div className="flex justify-center"><img className="w-60" src={profile1} alt="/" /></div>
              <div><p className="text-xl font-semibold text-black mx-4">Yves Habimana</p></div>
              <div><p className="">Our CEO has great experience in Software engineering</p></div>
              <p className='text-2x py-4 text-slate-500'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam</p>
              <div className='flex justify-between mx-8 text-2xl'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />

              </div>
            </div>

            {/* ---------------------------------------------------Ishimwe--------------------------------------------------- */}

            <div className='bg-white md:h-[32rem] text-slate-900 m-4 rounded-xl py-8 relative'>
              <span className='uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm'>CEO</span>
              <div className="flex justify-center"><img className="w-60" src={profile1} alt="/" /></div>
              <div><p className="text-xl font-semibold text-black mx-4">Theoneste Byagutangaza</p></div>
              <div><p className="">Our CEO has great experience in Software engineering</p></div>
              <p className='text-2x py-4 text-slate-500'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam</p>
              <div className='flex justify-between mx-8 text-2xl'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />

              </div>
            </div>

            {/* ---------------------------------------------Theo------------------------------------------------------------- */}
            <div className='bg-white md:h-[32rem] text-slate-900 m-4 rounded-xl py-8 relative'>
              <span className='uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm'>CEO</span>
              <div className="flex justify-center"><img className="w-60" src={profile1} alt="/" /></div>
              <div><p className="text-xl font-semibold text-black mx-4">Patrick Ishimwe</p></div>
              <div><p className="">Our CEO has great experience in Software engineering</p></div>
              <p className='text-2x py-4 text-slate-500'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam</p>
              <div className='flex justify-between mx-8 text-2xl'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />

              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
}

export default Team;
