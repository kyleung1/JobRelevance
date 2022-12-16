import React from 'react'
import Link from "next/link";

const navbar = () => {
  return (
    <nav className='bg-sky-300 flex justify-around'>
        <Link href="/" className="p-2 hover:bg-sky-500">Home</Link>
        <Link href="about" className="p-2 hover:bg-sky-500">About</Link>
    </nav>
  )
}

export default navbar