import {Advertise} from "./repo/models.ts";

function AdsCard({ads}:{ads:Advertise}){
    return (<div>
        <h1>{ads.title}</h1>
    </div>)
}
export default AdsCard;