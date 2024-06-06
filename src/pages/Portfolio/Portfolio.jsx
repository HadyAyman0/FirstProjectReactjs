import React from 'react'

export default function Portfolio() {
    return (
        <>
            <section>
                <div className=' min-h-screen container mt-5'>
                    <h2 className='uppercase text-center text-5xl mb-5 font-semibold text-gray-800'>ABOUT COMPONENT</h2>
                    <div className='flex gap-5 justify-center text-gray-900'>
                        <i class="fa-solid fa-equals text-2xl"></i>
                        <i class="fa-regular fa-star text-2xl"></i>
                        <i class="fa-solid fa-equals text-2xl"></i>
                    </div>
                    <div className=' md:gap-8 gap-5  p-5  my-5 grid grid-cols-12'>
                        <div className='col-span-12 lg:col-span-4'>
                        <picture>
                            <img src="https://mahmoudelmougy.github.io/Simple-React-SPA/static/media/port1.4417330275f78faa31c3.png" alt="" />
                        </picture>
                        </div>
                        <div className='col-span-12 lg:col-span-4'>
                        <picture>
                            <img src="https://mahmoudelmougy.github.io/Simple-React-SPA/static/media/port2.6554473016d32b343f02.png" alt="" />
                        </picture>
                        </div>
                        <div className='col-span-12 lg:col-span-4'>
                        <picture>
                            <img src="https://mahmoudelmougy.github.io/Simple-React-SPA/static/media/port3.494a4a914b5471b41f3e.png" alt="" />
                        </picture>
                        </div>
                        <div className='col-span-12 lg:col-span-4'>
                        <picture>
                            <img src="https://mahmoudelmougy.github.io/Simple-React-SPA/static/media/port1.4417330275f78faa31c3.png" alt="" />
                        </picture>
                        </div>
                        <div className='col-span-12 lg:col-span-4'>
                        <picture>
                            <img src="https://mahmoudelmougy.github.io/Simple-React-SPA/static/media/port2.6554473016d32b343f02.png" alt="" />
                        </picture>
                        </div>
                        <div className='col-span-12 lg:col-span-4'>
                        <picture>
                            <img src="https://mahmoudelmougy.github.io/Simple-React-SPA/static/media/port3.494a4a914b5471b41f3e.png" alt="" />
                        </picture>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}
