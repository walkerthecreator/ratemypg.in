

export default function Page({params} : { params : { id : string } }){
    const id = params.id
    return <div>
        <h1 className="bg-blue-500 p-1- text-white">Hello Number{ id }</h1>
    </div>
}