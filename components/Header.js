import Link from "next/link"
export default function Header({results}){
    return (
        <header>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
                <figure>
                    <img src={results[4]?.multimedia[0]?.url} alt={results[0]?.multimedia[4]?.caption} className="img-fluid" id="news-feed--heading"/>
                    <figcaption>
                        <p>{results[4].org_facet}</p>
                        <h3>
                            <a href={results[4]?.url}>
                                {results[4]?.title}
                            </a>
                        </h3>
                        <p style={{fontWeight: "normal"}}>{results[4]?.abstract}</p>
                    </figcaption>
                </figure>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col">
                    <figure>
                        <img src={results[1]?.multimedia[0]?.url} alt={results[1]?.multimedia[0].caption} className="img-fluid" id="news-feed--subimage"/>
                        <figcaption>
                            <p>{results[1].org_facet}</p>
                            <h4>
                                <Link href={results[1]?.url}>
                                    {results[1]?.title}
                                </Link>
                            </h4>
                            
                        </figcaption>
                    </figure>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <figure>
                            <img src={results[2]?.multimedia[0]?.url} alt={results[2]?.multimedia[0].caption} className="img-fluid" id="news-feed--subimage"/>
                            <figcaption>
                                <p>{results[2].org_facet}</p>
                                <h5>
                                    <Link href={results[2]?.url}>
                                        {results[2]?.title}
                                    </Link>
                                </h5>
                                
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-md-6 col-sm-12">
                    <figure>
                            <img src={results[3]?.multimedia[0]?.url} alt={results[3]?.multimedia[0].caption} className="img-fluid" id="news-feed--subimage"/>
                            <figcaption>
                                <p>{results[3].org_facet}</p>
                                <h5>
                                    <Link href={results[3]?.url}>
                                        {results[3]?.title}
                                    </Link>
                                </h5>
                                
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <hr className="my-5"></hr>
        </header>
    )
}