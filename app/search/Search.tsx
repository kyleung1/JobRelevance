"use client";
import React, { FormEvent } from 'react'
import { useRef, useEffect, useState, RefObject} from 'react';
import { useRouter } from "next/navigation";

const Search = () => {
    const [search, setSearch] = useState("");
    const [category, setCat] = useState("");
    const [location, setLoc] = useState("");
    const router = useRouter();

    function handleSearch(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSearch("");
        setCat("");
        setLoc("");
        const allInput = document.querySelectorAll("input");
        for (let i = 0; i < allInput.length; i++) {
            allInput[i].value = "";
        }
        if (category === "" || search === "") {
            router.push("/search/Error")
        } else if (location !== "") {
            router.push("/search/" + search + "-" + category + "-" + location);
        } else {
            router.push("/search/" + search + "-" + category);
        }
    }

    return (
        <div className="m-10">
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
                <label className="mt-5">Enter a skill to search for in the chosen job category.</label>
                <input type="text" className="border-2 border-black rounded-md m-0.5 w-4/12" required
                    onChange={(e) => setSearch(e.target.value)}></input>
                <label className="mt-5"><span className="font-semibold text-sky-500">(optional)</span> Enter a location in the format of city, country/state. 
                Example is: New York, NY.</label>
                <input type="text" className="border-2 border-black rounded-md m-0.5 w-4/12"
                    onChange={(e) => setLoc(e.target.value)}></input>
                <button className='p-3 w-2/12 text-white border-2 rounded-md bg-sky-500 
                   mt-5 hover:bg-sky-700 hover:cursor-pointer'>Evaluate!</button>
            </form>
            
        </div>
    )
}

export default Search

// e => to get type