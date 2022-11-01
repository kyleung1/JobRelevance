import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = ({jobs}: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {jobs.results.map((job: any) => {
        return <li key={job.id}>{job.name}</li>
      })}

    </div>
  )
}

//https://www.themuse.com/developers/api/v2
export const getStaticProps: GetStaticProps = async (context) => {
  const museApi = "https://www.themuse.com/api/public";
  let res = await fetch(museApi + "/jobs?category=Software%20Engineering&location=Seattle%2C%20WA&page=3&api_key=" + process.env.THE_MUSE);
  const jobs = await res.json();
  return {
    props: {
      jobs: jobs,
    }
  }
}

export default Home
