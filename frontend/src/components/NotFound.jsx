import React from 'react'

function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center text-black'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-7xl text-center font-bold'>404</h1>
          <h2 className='text-2xl text-center'>Page Not Found</h2>
        </div>
    </div>
  )
}

export default NotFound