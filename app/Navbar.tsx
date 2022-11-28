import React from 'react'
import Link from "next/link";

const navbar = () => {
  return (
    <nav>
        <Link href="/">Home</Link>
        <Link href="dashboard">Dash</Link>
    </nav>
  )
}

export default navbar