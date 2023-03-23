import { useState } from "react"
import Header2 from "@/components/Header2";
import Link from "next/link";
export default function Entertainments({results,total}){
    const [loading,setLoading] = useState(13);

    function handleClick(e){
        e.preventDefault();
        setLoading(loading + 8);
    }

    return (
        <div className="container py-5">
            <Header2 results={results} />
            <div className="row gx-5 gy-5">
                {
                    results.slice(5,loading).map(result => {
                        return (
                        
                                <div className="col-md-3 col-sm-12" key={result.url}>
                                    <Link href={result.url}>
                                        <div className="text-center mx-auto">
                                            <img src={result?.multimedia[0]?.url} className="img-fluid" alt={result?.multimedia[0]?.caption} style={{height: "200px"}} />
                                        </div>
                                        <h6 className="text-center mt-3">{result?.title}</h6>
                                    </Link>
                                </div>
                            
                        )
                    })
                }
            </div>
            <div className="text-center mt-3">
            {
                loading < total && (
                    <button onClick={handleClick} className="btn btn-secondary pb-2">Load More ...</button>
                )
            }
            </div>
        </div>
    )
}
const API_KEY = "KY925oKxGn0Kuvm8pmLN8ZT8GGiSkn3A"
export async function getStaticProps(){
    const URL = `https://api.nytimes.com/svc/topstories/v2/style.json?api-key=${API_KEY}`

    const response = await fetch(URL);
    const data = await response.json();


    return {
        props: {
            results: data.results,
            total: data.num_results
        }
    }
}