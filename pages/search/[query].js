import Search from "../api";
import Link from "next/link";
import Category from "@/components/Category";
export default function News({ query, results}){
    return (
        <div className="container">
            <h1 className="py-4">Searching Results: <span style={{color: "red"}}>{query}</span> </h1>
            <div className="row gx-5 gy-5 py-5">
                <div className="col-8">
                    <div className="row gx-5 gy-5">
                        {results.map(result => {
                            return (
                                <>
                                    <div className="col-md-3 col-sm-12">
                                        <img src={result.image} className="img-fluid" alt={result.caption} />    
                                    </div> 
                                    <div className="col-md-9 col-sm-12">
                                        <Link href={result.url} target="_blank">
                                            <h4 style={{color: "gray"}}>{result.title}</h4>
                                            <p>{result.paragraph}</p>
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

const API_KEY = "KY925oKxGn0Kuvm8pmLN8ZT8GGiSkn3A";
export async function getServerSideProps({ params }){
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`;

    const results = await Search(URL);

    return {
        props: {
            query: params.query,
            results
        }
    }
}