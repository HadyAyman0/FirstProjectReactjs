import React from 'react'

export default function About() {
    return (
        <>

            <section className='bg-[#2ebb9e] text-white'>
                <div className='flex justify-center  h-screen container  gap-10 flex-col items-center '>
                    <h2 className='uppercase text-center text-5xl mb-5 text-white'>ABOUT COMPONENT</h2>
                    <div className='flex gap-5 justify-center text-white'>
                        <i class="fa-solid fa-equals text-2xl"></i>
                        <i class="fa-regular fa-star text-2xl"></i>
                        <i class="fa-solid fa-equals text-2xl"></i>
                    </div>
                    <div className='grid grid-cols-12 text-center gap-8'>
                        <div className='lg:col-span-6 col-span-12 '>
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className='lg:col-span-6 col-span-12'>
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>



                </div>

            </section>


        </>
    )
}
