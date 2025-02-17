import Link from "next/link"

function NavBar(){

    return (
        <nav className="flex justify-center gap-20 p-5 bg-slate-100 font-bold">
            <Link href="/">
                Home
            </Link>
            <ul>
                <li>
                    <Link href="/users">
                        Users
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar