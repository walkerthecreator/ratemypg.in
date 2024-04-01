
export default async function Page(){
    const response = await fetch('http://localhost:3000/api/pg')
    const data = await response.json()
    
    return <div>
        <h1>pgs</h1>
        {
            data.pgs.map((item , index) => {
                return <h1 key={index}>{item.name}</h1>
            })
        }   
    </div>
}

