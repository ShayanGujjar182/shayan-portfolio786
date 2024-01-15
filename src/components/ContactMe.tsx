'use client'
import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import {useForm, SubmitHandler} from 'react-hook-form'

type Inputs = {
    name:string;
    email:string;
    subject : string;
    message : string
}

function ContactMe() {
    const {register, handleSubmit } = useForm<Inputs>();
    const onSubmit : SubmitHandler<Inputs>= (formData) => {
        window.location.href = `mailto:gujjarshayan019@gmail?subject=${formData.subject}&body=Hi,my name is ${formData.name}.${formData.message} (${formData.email})`
    }
  return (
    <div className='h-screen flex relative flex-col w-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-around mx-auto items-end'>
        <h3 className="absolute top-20 lg:top-8 uppercase  tracking-[20px] text-gray-500 text-2xl text-ellipsis">Contact</h3>
        <div className="flex flex-col  space-y-14 lg:space-y-8 w-full mt-12 justify-evenly">
            <h4 className="text-xl w-full font-semibold text-center">
                I have got just what you need. {" "} <span className='decoration-main_color/50 underline'>lets talk</span>
            </h4>
            <div className="space-y-3 md:space-y-9">
                <div className="flex items-center space-x-5  justify-center">
                    <PhoneIcon className='text-main_color h-7 w-7 animate-pulse'/>
                    <p className='text-base'>+923077046908</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className='text-main_color h-7 w-7 animate-pulse'/>
                    <p className='text-base'>gujjarshayan019@gmail.com</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className='text-main_color h-7 w-7 animate-pulse'/>
                    <p className='text-base'>123 Developer Lane</p>
                </div>
            </div>
            <form onSubmit={
                handleSubmit(onSubmit)
            } className='flex flex-col space-y-2 md:w-fit md:mx-auto'>
                <div className="flex md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row  ">
                    <input {...register('name')} placeholder='Name' className='contactInput' type='text'/><input {...register('email')} placeholder='Email' className='contactInput' type='email'/>
                </div>
                <input {...register('subject')} type="text"  placeholder='Subject' className='contactInput' />
                <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                    <button type='submit' className='bg-main_color   py-2  md:py-5 px-5 md:px-10 rounded-md text-black font-bold text-lg'>
                        Submit
                    </button>

            </form>
        </div>
      
    </div>
  )
}

export default ContactMe
