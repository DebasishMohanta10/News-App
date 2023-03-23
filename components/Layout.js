import Nav from "./Nav";
import Footer from "./Footer";
import Router from "next/router";
import { useState } from "react";
import Loader from "./Loader";
export default function Layout({children}){
    const [loading,setLoading] = useState(false)
    Router.events.on('routeChangeStart',(url) => {
        setLoading(true)
    })

    Router.events.on('routeChangeComplete',(url) => {
        setLoading(false)
    })
    return (
        <>
            <Nav />
            {
                loading ? (<Loader />) : (
                    <>
                        <main>{children}</main>
                        <Footer />
                    </>
                ) 
            }
        </>
    )
}