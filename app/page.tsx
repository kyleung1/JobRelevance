"use client";
import React from 'react'
import Link from "next/link"

const HomePage = () => {
  return (
    <div>
    <main className='flex flex-col items-center'>
        <p className='text-center w-5/12 my-7'>Have you ever wondered how relevant your technical skills are in the job market?
          The Job Relevance Evaluator will look up job postings in your selected field and evaluate how
          relevant it is.</p>
        <Link href="/search">
          <button id="start-btn" className='w-60 my-7 border-2 rounded-lg bg-sky-500
            hover:bg-sky-700 hover:cursor-pointer'>
            <p className='p-4 text-white'>Get Started</p>
          </button>
        </Link>
        <Link href="/more">
          <button className='w-60 my-7 border-2 rounded-md bg-sky-500 hover:bg-sky-700 hover:cursor-pointer'>
            <p className='p-4 text-white'>More Resources</p>
          </button>
        </Link>
        
      </main>
    </div>
  )
}
export default HomePage