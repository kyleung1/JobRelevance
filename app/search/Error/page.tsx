import React from 'react'

const Error = () => {
  return (
    <div> 
        <h1 className="text-red-600 text-3xl">Error: Something went wrong with your search.</h1>
        <ul>
            <li>Perhaps you did not select a category?</li>   
        </ul>
     </div>
  )
}

export default Error