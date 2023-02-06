import React from 'react'

interface CardProps {
  title: string
  description: string
}

function Card({ title, description }: CardProps): JSX.Element {
  // if(!title) return null
  // if title is not provided, return null but this component will return jsx element.So it will throw type error.
  return (
    <div className='w-1/4 bg-lime-100 rounded p-5'>
      <h1 className='text-orange-500 font-bold font-mono'>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Card
