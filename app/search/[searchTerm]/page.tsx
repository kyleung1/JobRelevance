import React from 'react'

type PageProps = {
  params: {
    evalTerms: string;
  };
};

//https://www.themuse.com/developers/api/v2
const API = "https://www.themuse.com/api/public/jobs";
let full_API = "";
// full_API = API + "?category=" + category + "&location=" + location + "&page=1&api_key=" + process.env.THE_MUSE;
// full_API = API + "?category=" + category + "&page=1&api_key=" + process.env.THE_MUSE;
// full_API = "";

async function getlistings(evalTerms: string) {
    // try{
    //     const res1 = await fetch(API + '?category=Software%20Engineering&location=Seattle%2C%20WA&page=3&api_key=' +
    //     process.env.THE_MUSE, {cache: "no-store"});
    //     if (!res1.ok) {
    //         throw new Error("Failed to fetch data")
    //     }
    //     const jobs: RootObject = await res1.json();
    //     return jobs;
    // } catch (err) {
    //     console.log(err)
    // }
}

const results = async ({ params: { evalTerms } }: PageProps) => {
  // const evalTermsSplit = evalTerms.split("-");
  // const evalResults = await getlistings(evalTerms);
  console.log(evalTerms)
  return (
    <div>
      <h1>Results</h1>
      {evalTerms}
    </div>
  )
}

export default results