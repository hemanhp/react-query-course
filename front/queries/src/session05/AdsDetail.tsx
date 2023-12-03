import {Advertise} from "./repo/models.ts";
import useAdsDetail from "./repo/useAdsDetail.tsx";

function AdsDetail({ads,}:{ads:Advertise}){
    const {data, isPending} = useAdsDetail(ads)
    if(isPending){
        return <span>Loading</span>
    }
    return (<div className={"bg-white relative shadow-sm rounded hover:shadow-2xl"}>
        <img className={"w-full h-32 object-cover object-center"} src={data.image} alt={data.title}/>
        <div className={"absolute top-0 left-0 m-2"}>
            <span className={"rounded-full px-2 py-2 bg-blue-400"}>{data.ad_type}</span>
        </div>
        <div className="p-5" >
            <h2>{data.title}</h2>
            <h2>{data.description}</h2>
            <h2>{data.price}</h2>
        </div>
    </div>)
}
export default AdsDetail;