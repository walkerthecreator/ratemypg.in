
export declare interface pg{
    name : String ,
    owner : String ,
    type : "pg" | "room" | "flat" ,
    sector : number ,
    location : String
}

export declare interface suggestion {
    name : String ,
    _id : String
}