import React from 'react'

function Work() {
  return (
    <div className="w-[60%] mx-auto flex flex-col justify-center mt-15">
        <div className='text-center'>
            <h1 className='text-black text-2xl font-bold'>How We Work</h1>
        </div>

        <div className='mt-10 flex justify-center flex-wrap gap-'>
            <div className='h-45 w-62 text-left bg-gray-800 text-[#47bec6] border p-5'>
                <h1 className='font-bold text-[25px] text-white'>Understand</h1>
                <p>we dive into your goal, workfolw and challenges</p>
            </div>

        </div>
    </div>
  )
}

export default Work