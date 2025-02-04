import React from 'react'

// in this SideBox it start with form   foram contains form name input of applo link , input of number of leads , input of file anme  and a submit button

const SideBox = () => {
  return (
    <div className='flex pop flex-col pop rounded-3xl bg-white h-fit w-full'>
      <form className='flex flex-col gap-4'
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
              className="text-black font-bold  "
              style={{
                fontSize: 'clamp(0.75rem, 1.25vw, 100rem)',
                marginBottom: 'clamp(0.25rem, 0.25vw, 0.5rem)'
              }}
            >
              Get more Leads
            </div>

          </div>

          <div className="flex flex-col">
            <label
              htmlFor="apollo-link"
              className="text-black tracking-tighter font-semibold  "
              style={{
                fontSize: 'clamp(0.75rem, 0.85vw, 1rem)',
                marginBottom: 'clamp(0.25rem, 0.25vw, 0.5rem)'
              }}

            >
              Apollo Link{"*"}
            </label>
            <input
              id="apollo-link"
              type='text'
              placeholder='Enter apollo link'
              className='w-full bg-transparent border border-[#E7E5E4] text-black/70 rounded-lg outline-none  focus:border-[#F28100] transition-colors'
              style={{
                padding: 'clamp(0.5rem, 0.5vw, 1rem) clamp(0.5rem, 1vw, 1rem)',
                fontSize: 'clamp(0.875rem, 1vw, 1rem)'
              }}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="leads-count"
              className="text-black tracking-tighter font-semibold  "
              style={{
                fontSize: 'clamp(0.75rem, 0.85vw, 1rem)',
                marginBottom: 'clamp(0.25rem, 0.25vw, 0.5rem)'
              }}
            >
              Number of Leads{"*"}
            </label>
            <select
              id="leads-count"
              className='w-full bg-transparent font-semibold border border-[#E7E5E4] text-black/70 rounded-xl outline-none  focus:border-[#F28100] transition-colors appearance-none'
              style={{
                padding: 'clamp(0.5rem, 0.5vw, 1rem) clamp(0.5rem, 1vw, 1rem)',
                fontSize: 'clamp(0.875rem, 1vw, 1rem)'
              }}
            >
              <option defaultValue="100" disabled  className='text-black font-semibold'>Number of leads</option>
              <option value="100">100 Leads</option>
              <option value="200">200 Leads</option>
              <option value="500">500 Leads</option>
              <option value="1000">1000 Leads</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="apollo-link"
              className="text-black tracking-tight font-semibold  "
              style={{
                fontSize: 'clamp(0.75rem, 0.85vw, 1rem)',
                marginBottom: 'clamp(0.25rem, 0.25vw, 0.5rem)'
              }}
            >
              File Name{"*"}
            </label>
            <input
              id="apollo-link"
              type='text'
              placeholder='Leads to John Doe'
              className='w-full bg-transparent border border-[#E7E5E4] text-black/70 rounded-xl outline-none  focus:border-[#F28100] transition-colors'

              style={{
                padding: 'clamp(0.5rem, 0.5vw, 1rem) clamp(0.5rem, 1vw, 1rem)',
                fontSize: 'clamp(0.875rem, 1vw, 1rem)'
              }}
            />
          </div>
        </div>
      </form>

      <div className="w-full"
        style={{
          padding: '0 clamp(1rem, 1vw, 2rem) clamp(1rem, 1vw, 2rem)'
        }}
      >
      <div className="bg-[#F5F5F4] rounded-xl"
     
      >
        <button
          type='submit'
          className='w-full bg-[#F28100] text-white font-medium rounded-xl transition-colors hover:bg-[#F28100]/90  '
          style={{
            padding: 'clamp(0.5rem, 0.75vw, 1rem) clamp(0.5rem, 1vw, 1rem)',
            fontSize: 'clamp(0.875rem, 1vw, 1rem)',
          }}
        >
          Submit
        </button>
        <button
          type='submit'
          className='w-full font-medium text-[#A8A29A] rounded-xl   '
          style={{
            padding: 'clamp(0.5rem, 0.75vw, 1rem) clamp(0.5rem, 1vw, 1rem)',
            fontSize: 'clamp(0.875rem, 1vw, 1rem)',
          }}
        >
          {"-"}1000 Credits
        </button>
      </div>
      </div>
    </div>
  )
}



export default SideBox
