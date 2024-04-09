

const Footer = () => {
    return <div className="bg-zinc-800 text-white w-full m-0 md:px-24 p-4">
        <div className="flex max-sm:flex-col justify-around">

            <div className="w-full md:w-2/6">
                <h1 className="text-xl mb-2 font-semibold">what is <span className="text-blue-400">ratemypg</span> ?</h1>
                <p className="text-zinc-200">ratemypg is a <span className="font-semibold text-white">review system</span> that allow tenats to <span className="font-semibold text-white">read reviews</span> before moving in to accomodation or write a review about your experience.</p>
            </div>

            <div className="mt-10 md:m-0">
                <h2 className="text-xl font-semibold mb-2">QuickLinks</h2>
                <ul>
                    <li>instagram</li>
                    <li>twitter</li>
                    <li>gmail</li>
                </ul>
            </div>


        </div>


            <h1 className="text-7xl md:text-7xl lg:text-[250px] font-satoshi bg-clip-text text-transparent bg-gradient-to-b from-zinc-500 to-zinc-800 text-center font-semibold m-0 ">ratemypg</h1>
        </div>
}

export default Footer