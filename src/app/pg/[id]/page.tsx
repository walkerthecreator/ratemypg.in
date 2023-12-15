import axios from "axios"

const SinglePg = ({params}) => {
    const id = params.id
    console.log("id" , id)
    // let data = await axios.get(`/api/pg/${id}` )

    return(
        <>
        <div>
            <h1>Single Pg </h1>
        </div>
        </>
    )
} 

export default SinglePg