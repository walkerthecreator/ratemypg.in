import Link from "next/link"


const NavBar = () => {
    return <>
        <nav className="w-screen fixed top-5">
            <div className="border border-zinc-700 p-1 px-4 mx-auto w-2/4 flex justify-between rounded-md bg-zinc-900">
                <h1 className="font-medium cursor-pointer hover:text-blue-400">ratemypg</h1>
                <ul className="w-1/4 flex justify-between">
                    <Link href="/pg" className="text-blue-300">Pg</Link>
                    <li >Sector</li>
                    <li >About</li>
                </ul>
            </div>
        </nav>
    </>
}

export default NavBar