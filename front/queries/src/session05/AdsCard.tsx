import {Advertise} from "./repo/models.ts";

function AdsCard({ads, onItemSelected}:{ads:Advertise, onItemSelected:(a:Advertise)=>void}){
    return (<div className={"bg-white relative shadow-sm rounded hover:shadow-2xl"}>
        <img className={"w-full h-32 object-cover object-center"} src={ads.image} alt={ads.title}/>
        <div className={"absolute top-0 left-0 m-2"}>
            <span className={"rounded-full px-2 py-2 bg-blue-400"}>{ads.ad_type}</span>
        </div>
        <div className="p-5" onClick={()=>onItemSelected(ads)}>
            <h2>{ads.title}</h2>
            <h2>{ads.description}</h2>
            <h2>{ads.price}</h2>
        </div>
    </div>)
}
export default AdsCard;