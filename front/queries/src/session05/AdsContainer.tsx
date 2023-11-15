import {useQuery, useQueryClient} from "@tanstack/react-query";
import AdsList from "./AdsList.tsx";
import useAds from "./repo/useAds.tsx";
import {useState} from "react";
import usdAdsPaginated, {AdsPageParams} from "./repo/usdAdsPaginated.tsx";

function AdsContainer(){
     const queryClient = useQueryClient()
    // const [filter, setFilter] = useState('all')
    const [pageParams , setPageParams] = useState<AdsPageParams>({
        page:1,
        ad_type:'all'
    })


    const { data, totalItem} = usdAdsPaginated(pageParams)

        return<>.
            <span onClick={()=>queryClient.cancelQueries({queryKey:['Ads', pageParams]})}>Cancel</span>
            <input type="text" onChange={(e=>setPageParams({...pageParams, search:e.target.value}))}/>
            <span>Total Item : {totalItem}</span>
            <span  onClick={()=>setPageParams({ad_type:pageParams.ad_type, page:pageParams.page+1})}> Next Page</span>
                        <span  onClick={()=>setPageParams({ad_type:pageParams.ad_type, page:pageParams.page-1})}> Prev Page</span>

            <div>
                <span onClick={()=>setPageParams({ad_type:'all', page:1})}>All</span> |
                <span  onClick={()=>setPageParams({ad_type:'buy', page:1})}>Buy</span> |
                <span  onClick={()=>setPageParams({ad_type:'sell', page:1})}>Sell</span> |
            </div>
            {data && <AdsList adsList={data} />}
        </>


}

export default AdsContainer