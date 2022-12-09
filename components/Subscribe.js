import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-gradient-to-br from-background to-backgroundTwo  mt-8 rounded-3xl border-spacing-1 border border-backgroundOne '>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-blue">Subscribe to the GPA DAO for latest blockchain jobs.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <input 
            type="text"
            placeholder='Email Please'
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white/80 px-5 py-3 text-base font-medium text-black outline-none"
            />
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-lightPink px-5 py-3 text-base font-medium text-black hover:bg-indigo-50"
            >
              JOIN NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe