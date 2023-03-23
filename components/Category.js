import Link from "next/link"
export default function Category(){
    return (
        <>
            <h4 className="entertainment mb-3">Category</h4>
            <div className="category">
                <Link href="/entertainments">Entertainment</Link>
                <Link href="/sports">Sports</Link>
                <Link href="/category/science">Science</Link>
                <Link href="/category/art">Art</Link>
                <Link href="/category/world">World</Link>
            </div>
        </>
    )
}