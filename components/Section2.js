import Link from "next/link"
export default function Section2({results}){
    return(
        <>
        <section className="container bg-light p-5" style={{borderRadius: "5px"}}>
            <div style={{display: "flex", alignItems: "baseline"}}>
                <h1 className="heading">Sports</h1>
                <p className="ms-auto"><Link href="/sports">See More</Link></p>
            </div>
            <hr/>
            <div className="row mt-5 gy-5">

                {
                    results.slice(0,4).map(result => {
                        return (
                            <div key={result.url} className="col-md-6 col-sm-12 col-lg-3">
                                <div className="card">
                                    <img src={result?.multimedia[0]?.url} alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <h5>{result?.title.slice(0,40)+ " ..."}</h5>
                                        <p className="card-text">{result?.abstract.slice(0,60)+' ...'}</p>
                                        <a className="btn btn-primary" href={result?.url} target="_blank">See Post</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        <hr className="my-5" />
        </>
    )
}

