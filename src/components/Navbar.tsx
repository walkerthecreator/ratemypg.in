import Link from "next/link"


const NavBar = () => {
    return <>
        <nav className="w-screen fixed top-4 flex">
            <div className="border border-zinc-700 p-1 px-4 mx-auto w-2/4 flex justify-between rounded-md bg-zinc-900">
                <h1 className="font-medium cursor-pointer hover:text-blue-400">
                    <Link href='/'>
                        ratemypg
                    </Link>
                    </h1>
                <ul className="w-1/4 flex justify-between">
                    <Link href="/pg" className="text-blue-300">Pg</Link>
                    <li >Sector</li>
                    <li >About</li>
                </ul>
            </div>
            {/* <button className="mr-10 font-satoshi font-semibold text-s px-6 p-1 bg-gradient-to-br from-zinc-900 via-zinc-700 border border-zinc-700 to-zinc-900 rounded-lg">
                <Link href='/auth/signup'>login</Link>
                </button> */}
        </nav>
    </>
}

export default NavBar