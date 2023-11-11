import {useQuery} from "@tanstack/react-query";
import AdsList from "./AdsList.tsx";
import useAds from "./repo/useAds.tsx";
import {useState} from "react";

function AdsContainer(){

    const [filter, setFilter] = useState('all')

    const { data} = useAds(filter)

    if(data) {
        return<>
            <div>
                <span onClick={()=>setFilter('all')}>All</span> |
                <span  onClick={()=>setFilter('buy')}>Buy</span> |
                <span  onClick={()=>setFilter('sell')}>Sell</span> |
            </div>
        <AdsList adsList={data} />
        </>
    }
    return <h1>Loading</h1>

}

export default AdsContainer