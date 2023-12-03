import {Advertise} from "./repo/models.ts";
import AdsCard from "./AdsCard.tsx";

function AdsList({adsList, onItemSelected}:{adsList:Advertise[], onItemSelected:(a:Advertise)=>void}){
    return (<div className={"grid md:grid-cols-2 lg:grid-cols-6 gap-4 "}>
        {adsList.map(a=><AdsCard ads={a} key={a.id} onItemSelected={onItemSelected} />)}
    </div>)
}
export default AdsList;