
export declare interface pg{
    _id : string ,
    name : string ,
    owner : string ,
    type : "pg" | "room" | "flat" ,
    sector : number ,
    location : string ,
    postedBy : string 
}

export declare interface suggestion {
    name : String ,
    _id : String
}
