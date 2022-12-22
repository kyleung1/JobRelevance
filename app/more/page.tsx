import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex flex-col items-center my-5">
        <h1 className="">Here are more websites for job searching</h1>
        <Link href="https://www.themuse.com/" className="text-blue-500 mt-5">The Muse</Link>
        <Link href="https://www.linkedin.com/" className="text-blue-500 mt-5">Linkedin</Link>
        <Link href="https://www.indeed.com/" className="text-blue-500 mt-5">Indeed</Link>
        <Link href="https://www.glassdoor.com/" className="text-blue-500 mt-5">Glassdoor</Link>
        <Link href="https://www.monster.com/" className="text-blue-500 mt-5">Monster</Link>
        <Link href="https://www.careerbuilder.com/" className="text-blue-500 mt-5">Careerbuilder</Link>
        <Link href="https://www.simplyhired.com/" className="text-blue-500 mt-5">Simplyhired</Link>
        <Link href="https://www.theladders.com/" className="text-blue-500 mt-5">Theladders</Link>
        <Link href="https://www.ziprecruiter.com/" className="text-blue-500 mt-5">Ziprecruiter</Link>
        <Link href="https://www.dice.com/" className="text-blue-500 mt-5">Dice</Link>
        <Link href="https://www.flexjobs.com/" className="text-blue-500 mt-5">Flexjobs</Link>
    </div>
  )
}

export default page