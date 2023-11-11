export type Advertise = {
    id:number;
    ad_type: "sell"| "buy";
    title:string;
    description:string;
    image:string;
    price:number
}
