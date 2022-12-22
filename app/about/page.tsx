import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl my-5">About Us</h1>
      <p className="w-9/12 text-center">Welcome to Job Relevance Evaluator! We understand that finding the right job can
        be a daunting task, and it's important to ensure that you are applying for positions that are
        relevant to your skills and experience. That's where we come in. Our website allows you to 
        search for a specific term and see how frequently it appears in job descriptions online. 
        This can help you gauge the demand for a particular skill or type of work, and make informed
        decisions about where to focus your job search efforts. With the Job Relevance Evaluator, 
        you can easily find out which jobs are the most relevant to you, and take the first step 
        towards finding your dream career. </p>
      <p className="w-9/12 text-center my-5">
        This project was made by <Link href="https://www.linkedin.com/in/kyle-leung412/" className="text-blue-500">
        Kyle Leung</Link>. The project repository can be found <Link href="https://github.com/kyleung1/JobRelevance" 
        className="text-blue-500">here</Link>.
      </p>
    </div>
  )
}

export default page