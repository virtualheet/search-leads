import React from 'react'
import Card from './Card'

const SideBoxBottom = () => {
  return (
    <div className='flex pop flex-col pop rounded-3xl bg-white h-fit w-full'>
    <div className='flex flex-col gap-4'
      style={{
        padding: 'clamp(1rem, 1vw, 2rem) clamp(1rem, 1vw, 2rem)'
      }}
    >
     <div className='flex flex-col gap-4'
          style={{
            gap: 'clamp(0.5rem, 1vw, 1.5rem)'
          }}
        >
          <div className="flex flex-col">
            <div
              className="text-black font-medium"
              style={{
                fontSize: 'clamp(0.75rem, 1.25vw, 100rem)',
                marginBottom: 'clamp(0.25rem, 0.25vw, 0.5rem)'
              }}

            >
              Learn
            </div>
            </div>
          </div>

          <Card type="Article" text="10 Tips to optimize your email infrastructure" />
          <Card type="Video" text="New Growth Hacks from Searchleads" />
    </div>
  </div>

  )
}

export default SideBoxBottom
