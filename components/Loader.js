import Image from "next/image"
import loading from "../public/loading.svg"

export default function Loader(){
    return (
        <div className="container">
            <div style={{textAlign: "center",margin: "250px auto"}}>
                <Image src={loading} width={144}></Image>
                <h5 style={{color: "red"}}>Loading ...</h5>
            </div>
        </div>
    )
}