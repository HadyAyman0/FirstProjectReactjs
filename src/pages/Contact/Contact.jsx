import React from 'react';
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";


export default function Contact() {
    return (
        <>
            <section>
                <div className="container  flex flex-col justify-center items-center  h-screen my-5">
                    <h2 className='uppercase text-center font-semibold text-5xl mb-5 text-gray-900'>CONTACTS SECTION</h2>
                    <div className='flex gap-5  justify-center text-gray-900'>
                        <i class="fa-solid fa-equals text-2xl"></i>
                        <i class="fa-regular fa-star text-2xl"></i>
                        <i class="fa-solid fa-equals text-2xl"></i>
                    </div>
                    <div className="flex  my-5   w-[70%] flex-col gap-6">
                        <Input color="blue" label="User Name" />
                        <Input color="purple" label="User Age" />
                        <Input color="indigo" label="User Email" />
                        <Input color="teal" label="User Password" />
                        <Button>Send Message</Button>
                    </div>
                </div>
            </section>
        </>
    )
}
