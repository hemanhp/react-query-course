import {Advertise} from "./repo/models.ts";
import AdsCard from "./AdsCard.tsx";

function AdsList({adsList}:{adsList:Advertise[]}){
    return (<div>
        {adsList.map(a=><AdsCard ads={a} key={a.id} />)}
    </div>)
}
export default AdsList;