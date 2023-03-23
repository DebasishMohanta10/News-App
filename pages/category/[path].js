import { handler } from "../api"
import Link from "next/link"
import Category from "@/components/Category"
export default function News({results,title}) {
  return (
    <div className="container">
            <h1 className="py-4">Category: <span style={{color: "red"}}>{title}</span> </h1>
            <div className="row gx-5 gy-5 py-5">
                <div className="col-8">
                    <div className="row gx-5 gy-5">
                        {results.slice(1,).map(result => {
                            return (
                                <>
                                    <div className="col-md-3 col-sm-12">
                                        <img src={result.multimedia && result?.multimedia[0]?.url} className="img-fluid" alt={result.multimedia && result?.multimedia[0]?.caption}/>    
                                    </div> 
                                    <div key={result.url} className="col-md-9 col-sm-12">
                                        <Link href={result.url} target="_blank">
                                            <h4 style={{color: "gray"}}>{result.title}</h4>
                                            <p>{result.abstract}</p>
                                        </Link>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="col-4">
                    <Category />
                </div>
            </div>
        </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { path: 'science' } },{ params: { path: 'art' } },{ params: { path: 'world' } }],
    fallback: true, // can also be true or 'blocking'
  }
}

const API_KEY = "KY925oKxGn0Kuvm8pmLN8ZT8GGiSkn3A"
export async function getStaticProps({params}){
  const SCIENCE_URL = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${API_KEY}`;

  const CULTURE_URL = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`;

  const WORLD_URL = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${API_KEY}` 

  switch(params.path){
    case 'science':
      return {
        props: {
          results: await handler(SCIENCE_URL),
          title: "Science"
        }
      }
    case 'art':
      return {
        props: {
          results: await handler(CULTURE_URL),
          title: "Art"
        }
      }
    case 'world':
      return {
        props: {
          results: await handler(WORLD_URL),
          title: "World"
        }
      }
    default:
      return {
        props: null
      }

  }

  return {
    props: {
      results: data.results
    }
  }
}