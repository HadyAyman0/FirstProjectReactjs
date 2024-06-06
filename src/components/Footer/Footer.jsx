import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className=' '>
      <section className='py-20 px-15 bg-[#2d3e4f] text-white'>
      <div className="container grid grid-cols-12 gap-5 items-center ">
          <div className='lg:col-span-4  text-center col-span-12'>
            <h3 className='uppercase text-2xl '>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <span>Clark, MO 65243</span>
          </div>
          <div className='lg:col-span-4   text-center col-span-12'>
            <h3 className='text-2xl'>AROUND THE WEB</h3>
            <div className='text-2xl flex gap-3 justify-center '>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className='lg:col-span-4  text-center col-span-12'>
            <h3 className='text-2xl'>ABOUT FREELANCER</h3>
            <p> Freelance is a free to use, licensed Bootstrap</p>
            <span>theme created by Route</span>

          </div>
        </div>
      </section>
      <section>
        <div className='bg-[#1b252f] text-center py-5 text-white uppercase font-extralight text-2xl'>
        <p>Made With Love <i class="fa-solid fa-heart-pulse text-red-600 fa-beat "></i> by Hady Ayman </p>
        </div>
      </section>
      </footer>
    </>
  )
}
