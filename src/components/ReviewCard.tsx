import SingleStar from "./SingleStar"


const ReviewCard = () => {
    
    return (
        <div className="bg-zinc-900 border border-zinc-800 w-80 h-40 p-3 rounded-lg overflow-hidden ">

        <div className="flex items-center justify-between">
            <h2 className="font-medium">New Lucky Building</h2>
            <span className="p-1 bg-zinc-800 rounded-md text-xs">Room</span>
        </div>

        <div className="flex w-30 gap-1">
            <SingleStar />
            <SingleStar />
            <SingleStar />
        </div>

        <p className="text-sm text-zinc-300 mt-3">Lorem ipsum dolor sit amet consectetur odio, nesciunt impedit porro delectus doloremque ex aperiam.</p>
</div>
    )
}

export default ReviewCard