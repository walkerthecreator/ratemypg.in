import { getAuthSession } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

type Props = {};



const NavBar =  async (props : Props ) => {

    const session = await getAuthSession()

    return <>
        <nav className="w-screen fixed md:top-4 flex ">
            <div className="border z-10 border-zinc-700 p-1 px-4 mx-auto w-full md:w-2/4 flex justify-between md:rounded-md bg-zinc-900">
                    <Link href='/' className="font-medium cursor-pointer hover:text-blue-400">
                        ratemypg
                    </Link>
                    <ul className="w-2/4 md:w-1/4 flex justify-between">
                        <Link href="/pg" className="hover:text-blue-300">Pg</Link>
                        <Link href="/sector"><li >Sector</li></Link> 
                        <Link href="/about"><li >About</li></Link>   
                    </ul>
            </div>
                 {
                    ( session ) ?

                    <span className="mr-10 rounded-md w-36 flex items-center gap-2">
                        <Image src={session.user.image as string} className="rounded-full" height={28} width={28} alt="user"/>
                        <p className="text-semibold ">{session.user.name?.split(" ")[0]}</p>
                    </span>

                    :

                    <Link href='/auth/signin' className="mr-10 font-satoshi font-semibold text-black px-6 p-1 bg-zinc-100 rounded-lg">
                        login
                    </Link> 
                }  
        </nav>
    </>
}

export default NavBar