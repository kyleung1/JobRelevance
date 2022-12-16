"use client";
import React from 'react'
import { useRef, useEffect} from 'react';
import { RootObject } from '../../types';

//https://www.themuse.com/developers/api/v2
const API = "https://www.themuse.com/api/public/jobs";

function hi() {
    console.log("hi")
}

const page = async () => {
    // const data: RootObject = await getlistings();
    // console.log(data.page)
    
    return (
        <div className='flex flex-col'>
            {/* {data.results[0].contents} */}
            <label>Enter a location. (optional)</label>
            <input type="text" className="border-2 border-black rounded-md m-0.5 w-4/12"></input>
            <label>Choose a job category.</label>
            <select name="category" className='w-4/12 border-2 border-black rounded-md'>
                <option value="Accounting%20and%20Finance">Accounting and Finance</option>
                <option value="Arts">Arts</option>
                <option value="Business%20Operations">Business Operations</option>
                <option value="Data%20and%20Analytics">Data and Analytics</option>
                <option value="Data%20Science">Data Science</option>
                <option value="IT">IT</option>
                <option value="Science%20and%20Engineering">Science and Engineering</option>
                <option value="Software%20Engineer">Software Engineer</option>
                <option value="Software%20Engineering">Software Engineering</option>
                <option value="Videography">Videography</option>
                <option value="Writing%20and%20Editing">Writing and Editing</option>
            </select>
            <label>Enter a skill to search for in the chosen job category.</label>
            <input type="text" className="border-2 border-black rounded-md m-0.5 w-4/12" required></input>
            <button className='p-3 w-2/12 text-white border-2 rounded-md bg-sky-500 hover:bg-sky-700 hover:cursor-pointer'
                >Evaluate!</button>
        </div>
    )
}

export default page

// async function getlistings() {
//     try{
//         const res1 = await fetch(API + '?category=Software%20Engineering&location=Seattle%2C%20WA&page=3&api_key=' +
//         process.env.THE_MUSE, {cache: "no-store"});
//         if (!res1.ok) {
//             throw new Error("Failed to fetch data")
//         }
//         const jobs: RootObject = await res1.json();
//         return jobs;
//     } catch (err) {
//         console.log(err)
//     }
// }

// async function termSearch() {

// }