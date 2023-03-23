import Link from "next/link"
export default function Footer(){
    return (
        <footer className="bg-dark text-center">
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)",color: "white"}}>
            © 2020 Copyright : 
            <Link className="text-light" href="https://mdbootstrap.com/"> DevTown_ News Agency</Link>
            </div>
        </footer>
    )
}