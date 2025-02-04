'use client'
import Image from 'next/image'
import React from 'react'
import { IoPerson } from "react-icons/io5";

// in this navbar for every fontsize and gap size padding you have to use clamp for all the max limit of clamp for all is 200rem and always that propery use in style={{}} thats it.

const Navbar = ({ credits }) => {
    const totalCredits = 8000
    const percentage = (credits / totalCredits) * 100

    return (
        <div className='flex inter h-fit  top-0 left-0 right-0 z-50 w-full justify-between items-center'
            style={{
                padding: 'clamp(0.5rem, 0.6vw, 20rem)'
            }}
        >



            <div className='flex items-center w-fit'
                style={{
                    gap: 'clamp(0.5rem, 0.75vw, 20rem)'
                }}
            >
                <div className='flex items-center '>
                    <Image

                        src='/images/logo.png'
                        alt='logo'
                        width={50}
                        height={50}
                        style={{
                            width: 'clamp(1rem, 2.75vw, 100px)',
                            height: 'auto'
                        }}
                        priority
                    />
                </div>
                <div className='flex items-center font-semibold '
                    style={{
                        fontSize: 'clamp(0.5rem, 1.25vw, 20rem)'
                    }}
                >
                    Searchleads
                </div>
            </div>
            <div className='flex items-center h-full flex gap-4'
                style={{
                    gap: 'clamp(0.5rem, 0.75vw, 20rem)',
                    fontSize: 'clamp(0.5rem, 0.95vw, 20rem)'
                }}
            >

                <button className='bg-white text-black rounded-xl font-medium flex items-center gap-1.5'
                    style={{
                        padding: 'clamp(0.25rem, 0.5vw, 20rem) clamp(0.5rem, 0.75vw, 20rem)',
                        minWidth: 'clamp(4rem, 5vw, 8rem)',
                        height: 'clamp(2rem, 2.5vw, 3rem)',
                        fontSize: 'clamp(0.875rem, 1vw, 1rem)'
                    }}
                >
                    <span className='font-bold'>
                        {credits}
                    </span>
                    <span>Credits</span>
                    <div 
                        className="circular-progress"
                        style={{
                            width: 'clamp(1rem, 1.5vw, 2rem)',
                            height: 'clamp(1rem, 1.5vw, 2rem)',
                            background: `radial-gradient(closest-side, white 70%, transparent 71% 100%),
                                        conic-gradient(#F28100 ${percentage}%, #f4f4f4 0)`
                        }}

                    />
                </button>
                <button className='bg-white aspect-square text-black rounded-xl text-xl flex  items-center justify-center'

                    style={{
                        padding: 'clamp(0.25rem, 0.5vw, 20rem) clamp(0.5rem, 0.75vw, 20rem)',
                        height: 'clamp(2rem, 2.5vw, 3rem)'
                    }}
                ><IoPerson /></button>
            </div>




        </div>
    )
}

export default Navbar
