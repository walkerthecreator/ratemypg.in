import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Card from "@/components/Card"


export default function Home() {
    return (
        <>
            <NavBar></NavBar>
            <main className="flex flex-col justify-around items-center min-h-screen p-24">

                <h1 className="text-5xl font-bold">Search your Accomodation</h1>

                <div className="w-2/4 flex justify-center">
                    <input type="text" className="border rounded-full p-1 px-4 bg-zinc-800 w-3/4" placeholder="Seach for your pg" />
                    <button className="bg-blue-700 p-1 px-4 text-white rounded-full ms-2">search</button>
                </div>

                <section id="pgs">
                    <Card></Card>
                </section>

            </main>
            <Footer></Footer>
        </>
    )
}
