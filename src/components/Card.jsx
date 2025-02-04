// i want to add image as background-image of card

import React from 'react'



const Card = ({type,text}) => {
    return (
        <div 
            className='relative w-full rounded-2xl overflow-hidden' 
            style={{ 
                height: '200px',
                backgroundImage: 'url(/images/card.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Badge */}
            <div className="bg-white absolute top-3 left-3 text-[#F28100] font-semibold px-4 py-1 rounded-full text-base w-fit shadow-sm flex items-center z-10">
                <span>{type}</span>
                <span className="mx-1">•</span>
                <span>3 Min read</span>
            </div>

            <div className="bg-transparent absolute bottom-2 left-3 text-black font-semibold  rounded-full text-xl w-fit shadow-sm flex items-center z-10">
                <span>{text}</span>
        

            </div>

            {/* Optional Overlay */}
            <div className="absolute inset-0 ">
                <div className='flex flex-col pop items-center justify-center h-full'>
                    {/* Content here */}
                </div>
            </div>
        </div>
    )
}

export default Card
