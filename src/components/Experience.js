import React from 'react'

export const Experience = ({year,company,description}) => {
  return (
    <div className='px-3 my-2 '>
        <div className='flex px-4'>
         <div className='bg-blue-600 text-white border-white border-2 rounded-lg px-4 py-1'>{year}</div>
         <div className='px-4 py-1 text-xl font-medium text-blue-600'>{company}</div>
        </div>

        <div className='text-blue-600 font-normal px-4 py-1 w-11/12'>{description}</div>
    </div>
  )
}
