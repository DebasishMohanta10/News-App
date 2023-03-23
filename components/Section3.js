import Category from "./Category"
import Link from "next/link"
export default function Section3({results,populars}){
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                    <h4 className="entertainment mb-5">Business News</h4>
                    <div className="row gx-5 gy-5 px-3">
                        {
                            results.slice(0,4).map(result => {
                                return (
                                    <div key={result.url} className="col-6">
                                        <img src={result?.multimedia[0]?.url} alt={result?.multimedia[0]?.caption} className="img-fluid" style={{height: "250px"}} />
                                        <h4 className="mt-3"><Link href={result.url}>{result?.title}</Link></h4>
                                        <p>{result?.byline}</p>
                                    </div>
                                )
                            })
                        }
                        
                    </div>

                    
                </div>

                <div className="col-lg-4 col-sm-12">
                    <Category />

                    <h4 className="entertainment my-3">Recents</h4>
                    {
                        populars.slice(10,14).map(popular => {
                            return (
                                <div className="row gy-5">
                                    <div className="col-4">
                                        <img src={popular?.multimedia[0]?.url} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="col-8">
                                        <h5 style={{fontWeight: "bold", color: "gray"}}><Link href={popular?.url}>{popular?.title}</Link></h5>
                                        <p><small>{popular?.byline}</small></p>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <Link href="/business" className="mt-3">Explore ...</Link>
                </div>
            </div>
        </section>
    )
}