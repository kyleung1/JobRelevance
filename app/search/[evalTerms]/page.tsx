import React from 'react'
import { Result, RootObject } from '../../../types';

type PageProps = {
  params: {
    evalTerms: string;
  };
};

//https://www.themuse.com/developers/api/v2
const API = "https://www.themuse.com/api/public/jobs";

let searchG = "";

async function getlistings(evalTerms: string) {
    try{
        const evalTermsSplit = evalTerms.split("-");
        const search = evalTermsSplit[0];
        const category = evalTermsSplit[1];
        let location = "";
        if (evalTermsSplit.length === 3) {
          location = evalTermsSplit[2];
        }
        searchG = search;
        const APILOC = API + "?category=" + category + "&location=" + location + "&page=1&api_key=" + process.env.THE_MUSE;
        const APINOLOC = API + "?category=" + category + "&page=1&api_key=" + process.env.THE_MUSE;
        if (evalTermsSplit.length === 3) {
          const res1 = await fetch(APILOC, {cache: "no-store"});
          const jobs: RootObject = await res1.json();
          return jobs;
        } else {
          const res1 = await fetch(APINOLOC, {cache: "no-store"});
          const jobs: RootObject = await res1.json();
          return jobs;
        }
    } catch (err) {
        console.log(err)
    }
}

function evaluateSkill(listings: RootObject) {
  const search = searchG;
  let re: RegExp = new RegExp(search, "gi");
  let total = 0;
  for (let i = 0; i < listings.results.length; i++) {
    let content = listings.results[i].contents;
    let matches: RegExpMatchArray | null = content.match(re);
    let count: number = matches ? matches.length : 0;
    total += count;
  }
  return total;
}

const results = async ({ params: {evalTerms}}: PageProps) => {
  const listings = await getlistings(evalTerms);
  let evalResults;
  if (listings?.timed_out !== undefined) {
    evalResults = evaluateSkill(listings);
  }
  const evalTermsSplit = evalTerms.split("-");
  let category = evalTermsSplit[1];
  let location = "a general search";
  if (evalTermsSplit.length === 3) {
    location = evalTermsSplit[2];
  }
  return (
    <div className="m-10">
      <h1>Results</h1>
      <p>
        The term <span className="text-orange-500">{searchG}</span> appeared <span className="text-orange-500">
          {evalResults}</span> times while searching through <span className="text-orange-500">{category}</span> job 
          listings in <span className="text-orange-500">{location}</span>.
      </p>
    </div>
  )
}

export default results