import { Menu } from './Menu'
import React from 'react'

interface PageProps {
  children: JSX.Element | JSX.Element[]
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className='max-w-screen-lg min-h-screen p-2 m-auto'>
      <Menu />
      {children}
    </div>
  )
}