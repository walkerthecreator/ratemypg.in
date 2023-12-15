import Image from "next/image"
import avatar from "@/assets/avatar.jpg"

const ReviewCard = () => {
    
    return (
        <div className="w-96 p-4 bg-zinc-800 border border-gray-600 rounded-lg">
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas dolor error eos laudantium quibusdam quae! Amet unde corrupti minus, nobis animi perspiciatis quis ad consequuntur quo earum eum tenetur fugit at voluptatum voluptate illo nulla voluptates provident! Est qui nostrum maxime.</p>
            <div className="flex gap-2 items-center mt-4">
                <Image src={avatar} className="rounded-full" height={30} width={30} alt="user avatar"></Image>
                <h2 className="text-xl font-semibold">Rahul Pg</h2>
            </div>
        </div>
    )
}

export default ReviewCard