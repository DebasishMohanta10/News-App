import Link from "next/link"
export default function Section1({results,populars}){
    return (
        <>
        <section className="my-5">
            
            <div className="row gy-5 gx-5">
                <div className="col-md-8 col-sm-12">
                    <h4 className="entertainment">Entertainment</h4>
                    <div className="row py-4">
                        <div className="col-md-6 col-sm-12">
                            <img src={results[0]?.multimedia[0]?.url} alt="" className="img-fluid"/>
                            <h4 className="mt-3" style={{fontWeight: "bold", color: "gray"}}>{results[0]?.title}</h4>
                            {/* <p>{results[0]?.abstract}</p> */}
                            <p><small>{results[0].byline}</small> ,<span>{results[0].published_date.slice(0,10)}</span></p>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-md-12">
                            {
                                results.slice(1,5).map(result => {
                                    return (
                                        <div key={result.url} className="row gx-5 gy-5">
                                            <div className="col-4">
                                                <img src={result?.multimedia[0]?.url} alt="" className="img-fluid"/>
                                            </div>
                                            <div className="col-8">
                                                <h5 style={{fontWeight: "bold", color: "gray"}}>{result?.title}</h5>
                                                <p><small>{result?.byline}</small></p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="mt-3"><a href="/entertainments">Explore More</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h4 className="entertainment mb-3">Populars</h4>
                    {
                        populars.slice(0,8).map((popular,index) => {
                            return (
                                <div key={popular.url} className="row gy-5">
                                    <div className="col-2">
                                        <h3 style={{textAlign: "center",alignContent: "center"}}>{index+1}</h3>
                                    </div>

                                    <div className="col-10">
                                        <p>{popular.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
        <hr className="my-5"></hr>
        </>
    )
}