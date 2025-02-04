import React from 'react'

// setting background as image for fullsscren

const page = () => {
  return (
    <div className='bg-cover bg-center h-full bg-no-repeat'
    style={{
        backgroundImage: 'url(/images/prototype.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}
    >
        <div className='flex flex-col pop items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold'>Example Prototype</h1>
        </div>
    </div>
  )
}


export default page
