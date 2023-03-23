import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router";
export default function Nav(){
    const [query,getQuery] = useState();
    const router = useRouter();
    const currentRoute = router.pathname;
    console.log(currentRoute);
    console.log(router.path)


    const handleChange = (e) => getQuery(e.target.value)

    const handleSubmit = (e) => {
      e.preventDefault();
      router.push(`/search/${query}`);
    }

    return (
        <nav className="navbar navbar-expand-md py-2 bg-dark navbar-dark">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Link className="navbar-brand" href="/">DevTown_</Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={currentRoute === '/sports' ? 'active nav-link' : 'nav-link'} aria-current="page" href="/sports">Sports</Link>
                </li>
                
                <li className="nav-item">
                  <Link className={currentRoute === '/entertainments' ? 'active nav-link' : 'nav-link'} href="/entertainments">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className={currentRoute === '/business' ? 'active nav-link' : 'nav-link'} href="/business">Business</Link>
                </li>
              
              </ul>
            </div>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
                  <input className="form-control me-2" type="search" placeholder="Search News" aria-label="Search" style={{width: "250px",borderRadius: "2px"}} onChange={handleChange} />
                  <button className="btn btn-outline-light rounded-0" type="submit">Search</button>
              </form>
          </div>
        </nav>
    )
}