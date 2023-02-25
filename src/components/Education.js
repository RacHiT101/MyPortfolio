import React from 'react'

export const Education = ({year,college,qualification,marks}) => {
  return (
    <div className='  px-3 py-3'>
        <div className='flex px-4'>
        <div className='bg-blue-600 text-white border-white border-2 rounded-md px-4 py-1'>{year}</div>
        <div className='text-blue-700 font-medium px-4 py-1'> {qualification}  -   {marks}  </div>
        </div>

        <div className='flex w-max'>
        <div className='px-4 py-2 font-medium text-blue-600'>{college}</div>
        </div>
        
    </div>
  )
}
