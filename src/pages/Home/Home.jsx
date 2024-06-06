import React from 'react'

export default function Home() {
    return (
        <>
            <section className='bg-[#2ebb9e]'>
                <div className='flex justify-center  h-screen container  gap-10 flex-col items-center '>
                    <picture>
                        <img className='w-full' src="https://mahmoudelmougy.github.io/Simple-React-SPA/static/media/avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg" alt="" />
                    </picture>
                    <div className='text-center'>
                        <h2 className='uppercase text-5xl mb-5 text-white'>START FRAMEWORK</h2>
                        <div className='flex gap-5 justify-center text-white'>
                        <i class="fa-solid fa-equals text-2xl"></i>
                        <i class="fa-regular fa-star text-2xl"></i>
                        <i class="fa-solid fa-equals text-2xl"></i>
                        </div>
                        <p className='mt-5'>Graphic Artist - Web Designer - Illustrator</p>
                    </div>

                </div>

            </section>



        </>
    )
}
