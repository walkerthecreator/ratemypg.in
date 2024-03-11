"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { pg } from "@/types/type";

const varient = {
  input: "p-1 px-2 rounded text-sm mb-4 shadow-lg text-black",
};

interface formDataType {
  name: string;
  owner: string;
  sector: string;
  location: string;
  type: "pg" | "room" | "flat";
}

interface switchType{
  index : number ,
  next : () => void ,
  prev : () => void 
}


interface handler{
  next : ()=> void ,
  prev? : ()=> void ,
}


const AddPg = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [ pgData , setPgData ] = useState({name : "" , owner : "" ,  sector : ""})
  const [ select , setSelect] = useState({type : "pg" , location : "" })

  const { data : session } = useSession()

  async function handleSubmit(){
    const resp = await axios.post('/api/pg/add-new-pg' , { ...pgData , ...select , user : session?.user.id })
    console.log(resp)
  }

  // function handleChange(e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> ){
  function handleChange(e : React.ChangeEvent<HTMLInputElement> ){
    const {name , value } = e.target 
    // setPgData( (prev) => ({
    //     ...prev ,
    //     [name] : value
    //   }) )

    setPgData({
      ...pgData , 
      [name] : value
    })
  }

  function handleSelect(value : string , name : string){
          setSelect((prev) => ({
            ...prev ,
            [name] : value
          }))
  }
 

  function ComponentLoader({ index , next , prev }: switchType ) {

      switch (index) {
        case 1:
          return <InputName next={next}/>;
        case 2:
          return <InputPgLocation next={next} prev={prev}/>
        case 3:
          return <OwnerInfo next={next} prev={prev}/>
        default :
            return <>
              <h1 className="text-7xl font-medium">Your Submission have been <span className="text-emerald-400">Submitted</span> </h1>
              <a href="/pg" className="text-blue-500">go home</a>
            </> 
    }
  }

    const InputName = ({next}:handler) => {
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Enter Pg name  </CardTitle>
            <CardDescription>Enter Pg information</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Pg Name <span className="text-red-500">*</span> </Label>
                  <Input type="text" id="name" placeholder="Name of your Pg" autoFocus value={pgData.name} name="name" onChange={handleChange}/>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="accom">Accomodation Type <span className="text-red-500">*</span> </Label>

                  <Select onValueChange={(value)=>{ handleSelect(value , "type") }} name="type" value={select.type}>
                    <SelectTrigger id="accom">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="pg">Pg</SelectItem>
                      <SelectItem value="room">Room</SelectItem>
                      <SelectItem value="flat">Flat</SelectItem>
                    </SelectContent>
                  </Select>

                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <button onClick={ next } className="bg-blue-700 p-1 px-4 text-white rounded-md">
              Next
            </button>
          </CardFooter>
        </Card>
      );
    };

    const InputPgLocation = ({ next , prev } : handler ) => {
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Enter Pg Location</CardTitle>
            <CardDescription>Enter Pg information</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Sector <span className="text-red-500">*</span> </Label>
                  <Input id="name" placeholder="34a" name="sector" autoFocus value={pgData.sector} onChange={handleChange}/>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="accom">City <span className="text-red-500">*</span></Label>
                  <Select onValueChange={(value) => { handleSelect(value , "location") }} name="location" value={select.location}>
                    <SelectTrigger id="accom">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="chandigarh">Chandigarh</SelectItem>
                      <SelectItem value="mohali">Mohali</SelectItem>
                      <SelectItem value="panchkula">Panchkula</SelectItem>
                      <SelectItem value="zirakpur">Zirakpur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <button onClick={ prev } className="bg-zinc-100 p-1 rounded-md px-2 text-zinc-500">back</button>
            <button onClick={ next } className="bg-blue-700 p-1 px-4 text-white rounded-md">
            Next</button>
          </CardFooter>
        </Card>
      )
    }

    const OwnerInfo = ({ next , prev } : handler ) => {
      return  (
        <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Owner Info</CardTitle>
          <CardDescription>Enter Pg Owner Information</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Owner Name</Label>
                <Input id="name" placeholder="Nitin " name="owner" autoFocus value={pgData.owner} onChange={handleChange} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <button onClick={ prev } className="bg-zinc-100 p-1 rounded-md px-2 text-zinc-500">back</button>
          <button onClick={ ()=>{ next() ; handleSubmit()  } } className="bg-blue-700 p-1 px-4 text-white rounded-md">
          submit</button>
        </CardFooter>
      </Card>
      )
    }


  return <div className="mx-auto h-screen w-96 flex items-center gap-10 justify-center flex-col">
    <Progress className="bg-gray-400 border border-gray-700" value={currentIndex * 25 }></Progress>

    <ComponentLoader 
      index={currentIndex} 
      next={()=>{ setCurrentIndex(currentIndex + 1) }} 
      prev={()=>{ setCurrentIndex(currentIndex - 1) }}
    />

  </div>   
};


export default AddPg;
