import { React, Component } from "react";
import profile1 from "../assets/profile.jpg";
import { CheckIcon } from '@heroicons/react/solid';

const Team = () => {
  return (
    <div className="w-full bg-cyan-800">
      <div className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
        <div className='max-w-[1240px] mx-auto py-8'>
          <div className='text-center py-4 text-slate-300'>
            <h3 className='text-5xl font-bold text-white'>Team</h3>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam</p>

          </div>
          <div className='grid md:grid-cols-3'>

            <div className='bg-white text-slate-900 m-4 rounded-xl p-8 shadow-2xl relative'>
              <span className='uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm'>CEO</span>
              <div className="flex justify-center"><img className="w-80" src={profile1} alt="/" /></div>
              <div><p className="text-xl text-white mx-4">Yves Byiringiro</p></div>
              <div><p className="">Our CEO has great experience in Software engineering</p></div>
              <p className='text-2x py-8 text-slate-500'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam</p>
              <div className='text-2xl'>
                <button className='w-full py-4 my-4 '>Get Started</button>
              </div>
            </div>

            {/* -------------------------------------------------------------Marius-------------------------------------------- */}

            <div className='bg-white text-slate-900 m-4 rounded-xl p-8 shadow-2xl relative'>
              <span className='uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm'>CEO</span>
              <div className="flex justify-center"><img className="w-80" src={profile1} alt="/" /></div>
              <div><p className="text-xl text-white mx-4">Yves Byiringiro</p></div>
              <div><p className="">Our CEO has great experience in Software engineering</p></div>
              <p className='text-2x py-8 text-slate-500'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam</p>
              <div className='text-2xl'>
                <button className='w-full py-4 my-4 '>Get Started</button>
              </div>
            </div>

            {/* --------------------------------------------------------Patrick ---------------------------------------------- */}


            <div className='bg-white text-slate-900 m-4 rounded-xl p-8 shadow-2xl relative'>
              <span className='uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm'>CEO</span>
              <div className="flex justify-center"><img className="w-80" src={profile1} alt="/" /></div>
              <div><p className="text-xl text-white mx-4">Yves Byiringiro</p></div>
              <div><p className="">Our CEO has great experience in Software engineering</p></div>
              <p className='text-2x py-8 text-slate-500'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam</p>
              <div className='text-2xl'>
                <button className='w-full py-4 my-4 '>Get Started</button>
              </div>
            </div>

            {/* ---------------------------------------------------Yves-------------------------------------------------------- */}


            <div className='bg-white text-slate-900 m-4 rounded-xl p-8 shadow-2xl relative'>
              <span className='uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm'>CEO</span>
              <div className="flex justify-center"><img className="w-80" src={profile1} alt="/" /></div>
              <div><p className="text-xl text-white mx-4">Yves Byiringiro</p></div>
              <div><p className="">Our CEO has great experience in Software engineering</p></div>
              <p className='text-2x py-8 text-slate-500'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam</p>
              <div className='text-2xl'>
                <button className='w-full py-4 my-4 '>Get Started</button>
              </div>
            </div>

            {/* ---------------------------------------------------Ishimwe--------------------------------------------------- */}

            <div className='bg-white text-slate-900 m-4 rounded-xl p-8 shadow-2xl relative'>
              <span className='uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm'>CEO</span>
              <div className="flex justify-center"><img className="w-80" src={profile1} alt="/" /></div>
              <div><p className="text-xl text-white mx-4">Yves Byiringiro</p></div>
              <div><p className="">Our CEO has great experience in Software engineering</p></div>
              <p className='text-2x py-8 text-slate-500'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam</p>
              <div className='text-2xl'>
                <button className='w-full py-4 my-4 '>Get Started</button>
              </div>
            </div>

            {/* ---------------------------------------------Theo------------------------------------------------------------- */}
            <div className='bg-white text-slate-900 m-4 rounded-xl p-8 shadow-2xl relative'>
              <span className='uppercase px-3 py-1 bg-indigo-200 rounded-2xl text-sm'>CEO</span>
              <div className="flex justify-center"><img className="w-80" src={profile1} alt="/" /></div>
              <div><p className="text-xl text-white mx-4">Yves Byiringiro</p></div>
              <div><p className="">Our CEO has great experience in Software engineering</p></div>
              <p className='text-2x py-8 text-slate-500'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam</p>
              <div className='text-2xl'>
                <button className='w-full py-4 my-4 '>Get Started</button>
              </div>
            </div>
            

          </div>
        </div>
      </div>
      {/* <div className="mx-8">
        <h2 className="text-4xl text-white font-bold">What is 6Tabs?</h2>
        <p className="text-2xl text-white">
          Six tabs is a startup created by a group of 6 Engineers whose
          value is Professionalism, Integrity, Quality work, and
          Accessibility for all.
        </p>
        <h2 className="mt-4 text-2xl font-semibold">The Six Founders</h2>
      </div>
      <div className="grid md:grid-cols-3">
        <div className=" flex flex-col justify-center border-2 border-gray-500">
          <div className="flex justify-center"><img className="w-80" src={profile1} alt="/" /></div>
          <div><p className="text-xl text-white mx-4">Yves Byiringiro</p></div>
          <div><p className="">Our CEO has great experience in Software engineering</p></div>
        </div>
        <div>
          <img className="w-80" src={profile1} alt="/" />
        </div>
        <div>
          <img className="w-80" src={profile1} alt="/" />
        </div><div>
          <img className="w-80" src={profile1} alt="/" />
        </div><div>
          <img className="w-80" src={profile1} alt="/" />
        </div>
      </div> */}
      {/* <section className="team-section" style={{ backgroundColor: "#37517e" }}>
        <div className="container" v style={{ padding: "10px" }}>
          <div className="row">
            <div
              className="col-md-12 col-sm-12"
              style={{ textAlign: "center", color: "white" }}
            >
              <h2>What is 6Tabs?</h2>
              <p style={{}}>
                Six tabs is a startup created by a group of 6 friends whose
                value is Professionalism, Integrity, Quality work, and
                Accessibility for all.
              </p>
            </div>
          </div>
          <div
            className="row team-portfolio"
            style={{ textAlign: "center", color: "white" }}
          >
            <div className="col-12" style={{ padding: "10px" }}>
              <h3>The Six Founders</h3>
            </div>
            <div className="col-md-3 col-lg-3 col-xs-12 team">
              <Image
                src="/assets/img/hero-img.png"
                alt="Landscape picture"
                width={150}
                height={150}
              />
              <h5>Theonest Byagutangaza</h5>
            </div>
            <div className="col-md-3 col-lg-3 col-xs-12 team">
              <Image
                src="/assets/img/hero-img.png"
                alt="Landscape picture"
                width={150}
                height={150}
              />
              <h5>Marius Robert Rwandarushya</h5>
            </div>
            <div className="col-md-3 col-lg-3 col-xs-12 team">
              <Image
                src="/assets/img/hero-img.png"
                alt="Landscape picture"
                width={150}
                height={150}
              />
              <h5>Yves Byiringiro</h5>
            </div>
            <div className="col-md-3 col-lg-3 col-xs-12 team">
              <Image
                src="/assets/img/hero-img.png"
                alt="Landscape picture"
                width={150}
                height={150}
              />
              <h5>Patrick Iradukunda</h5>
            </div>
            <div className="col-md-3 col-lg-3 col-xs-12 team"></div>
            <div className="col-md-3 col-lg-3 col-xs-12 team">
              <Image
                src="/assets/img/hero-img.png"
                alt="Landscape picture"
                width={150}
                height={150}
              />
              <h5>Yves Habimana</h5>
            </div>
            <div className="col-md-3 col-lg-3 col-xs-12 team">
              <Image
                src="/assets/img/hero-img.png"
                alt="Landscape picture"
                width={150}
                height={150}
              />
              <h5>Patrick Ishimwe</h5>
            </div>
          </div>
          <div
            className="row goals-section"
            style={{ padding: "10px", color: "white", marginTop: "25px" }}
          >
            <div className="col-md-4 col-sm-4 col-xs-12">
              <h3>Vision</h3>
              <div className="vision">
                <p>
                  Our vision is to become a leading company in Africa that
                  creates secure and accessible IT software systems and provides
                  network security and cybersecurity support.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <h3>Mission</h3>
              <div className="mission">
                <ul>
                  <li>
                    Helping public and private institutions acquire quality
                    software systems.
                  </li>
                  <li>
                    Helping public and private institutions by supporting them
                    in securing their networks.
                  </li>
                  <li>
                    Provide consultancy in cybersecurity and Software
                    engineering.
                  </li>
                  <li>
                    Help companies/institutions understand why software
                    accessibility matters.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <h3>Values</h3>
              <div className="values">
                <ul>
                  <li>Professionalism </li>
                  <li>Integrity</li>
                  <li>Quality</li>
                  <li>Accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Team;
