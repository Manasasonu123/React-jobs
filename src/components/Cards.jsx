import React from 'react'

//This is container of homecards

const Cards=({children, bg='bg-gray-100'})=>{
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md mx-7`}>
        {children}
    </div>
  )
}

export default Cards