"use client";
import React, { FormEvent } from 'react'
import { useRef, useEffect, useState, RefObject} from 'react';
import { RootObject } from '../../types';
import { useRouter } from "next/navigation";

const Search = () => {
    // const data: RootObject = await getlistings();
    // console.log(data.page)
    const [search, setSearch] = useState("");
    const [category, setCat] = useState("");
    const [location, setLoc] = useState("");
    const router = useRouter();

    function handleSearch(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSearch("");
        setCat("");
        setLoc("");
        console.log(search)
        console.log(category)
        console.log(location)
        if (category === "") {
            router.push("/search/Error")
        } else if (location !== "") {
            router.push("/search/" + search + "-" + category + "-" + location);
        } else {
            router.push("/search/" + search + "-" + category);
        }
    }

    return (
        <div>
            {/* {data.results[0].contents} */}
            <form onSubmit={handleSearch} className='flex flex-col'>
                <label>Choose a job category.</label>
                <select name="category" className='w-4/12 border-2 border-black rounded-md'
                    value={category} onChange={(e) => setCat(e.target.value)}>
                    <option>-Select Category-</option>
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
                <input type="text" className="border-2 border-black rounded-md m-0.5 w-4/12" required
                    onChange={(e) => setSearch(e.target.value)}></input>
                <label><span className="font-semibold text-sky-500">(optional)</span> Enter a location in the format of city, country/state. Example is: 
                new york, NY.</label>
                <input type="text" className="border-2 border-black rounded-md m-0.5 w-4/12"
                    onChange={(e) => setLoc(e.target.value)}></input>
                <button className='p-3 w-2/12 text-white border-2 rounded-md bg-sky-500 
                    hover:bg-sky-700 hover:cursor-pointer'>Evaluate!</button>
            </form>
            
        </div>
    )
}

export default Search

// https://www.themuse.com/api/public/jobs?category=Software%20Engineering&location=Seattle%2C%20WA&page=3&api_key=3c366481db39baeef30e68f8883148d9cb4cf1a2846416fc53186df135f3636a
// e => to get type
// 3815

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