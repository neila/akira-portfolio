import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Graph from '../components/Graph';
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dateFormat from 'dateformat';


const Title = ({section, color}) => <div class="mt-5 mb-7 text-center flex-grow-0"><h1 className={color}> {section} </h1></div>

export default function ideas({ allPostsData_f }) {
    return (
        <div>
            <Head>
                <title>XDEA</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* logo */}
            <Header />
            
            <Title section="ἸΔΈΑ" color="text-[#FFDF00]"/>

            {/*-- content - */}
            <div className="min-h-full p-8">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* intro */}
                    <section className="lg:flex items-start">
                            <div className="lg:w-4/5 mx-auto leading-snug space-y-5">
                                <p> My biological brain is far too <a href='https://doi.apa.org/doiLanding?doi=10.1037%2F0278-7393.20.5.1063'>forgetful</a>. 
                                    The raw thoughts that continuously pass through my mind can only accumulate for so long. 
                                    Despite the constant mental wrestling, I feel often left stranded in the ponderer's void, with no wisdom to bear.</p>
                                <p>I find this quite unfortunate, since all brilliant ideas are raw thoughts at the point of its inception. 
                                    I created this space to nurture these seeds of imagination, so that they can grow into something bigger. 
                                    In the conscious and continuous effort to acknolwedge and appreciate the everchanging present, lies the art of spontaneous creativity. 
                                    I named this page after the <a href='https://en.wikipedia.org/wiki/Idea'>ancient Greek word</a>, to which we still owe its use today.</p>
                                <div className="relative lg:w-3/5 mx-auto">
                                    <blockquote className="relative p-4 text-xl italic border-l-4 text-center">
                                        <p className="mb-4">"Ego cogito, ergo sum"</p>
                                        <cite className="text-base ml-16">- René Descartes</cite>
                                    </blockquote>
                                </div>
                            </div>
                    </section>

                    <ul className='space-y-2 flex flex-col px-0'>
                        
                        {allPostsData_f.map(({ id, date, tags}) => (
                            <postlink key={id}>
                                <Link href={`/ideas/${encodeURIComponent(id)}`} passHref>
                                    <div>
                                        <h3 className=' truncate'>{id}</h3>
                                        <small className=' truncate'>{dateFormat(date, "yyyy-mm-dd", true)}, {tags}</small>
                                    </div>
                                </Link>
                            </postlink>
                        ))}
                    </ul>

                </div>
            </div> 

            <div id="graph-container"> 
                <Graph />
            </div >

            {/* Lower menu + copyright */}
            <Footer />
        </div>
    )
}

export async function getStaticProps() {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const fileNames = fs.readdirSync(postsDirectory, 'utf8')

    // ALL NOTES TO BE PUBLISHED MUST BE IN /posts. THE DIRECTORY CANNOT HAVE ANY NESTED FOLDERS.

    const allPostsData = fileNames.map(fileName => {

        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/,'')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })

    const sorted_allPostsData = allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
    const allPostsData_f = JSON.parse(JSON.stringify(sorted_allPostsData))

    return {
      props: {
        allPostsData_f
      }
    }
  }