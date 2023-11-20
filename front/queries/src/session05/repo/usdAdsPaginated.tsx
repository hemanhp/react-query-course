import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Advertise} from "./models.ts";

export type AdsPageParams = {
    ad_type?:string
    page:number
    search?:string
}
function useAdsPaginated(pageParams:AdsPageParams){

    let totalItem = 0;
        const {isPending, data} = useQuery({
            // enabled:(pageParams.search!=null && pageParams.search.length>2),
        queryKey: ['Ads',pageParams ],
        queryFn: async function({queryKey,signal}){
            const url = 'http://127.0.0.1:8000/ads/advertises/paged/'
            const {page, ad_type, search} = queryKey[1] as AdsPageParams
            let queryParams:AdsPageParams = {page:page, search}
            if(ad_type !='all'){
               queryParams.ad_type = ad_type
            }


            const result = await axios.get<{count:number, results:Advertise[]}>(url, {params:queryParams, signal})
            return result.data
        },
            select:(result) =>{
            totalItem = result.count;
                return result.results
            }

    })
    return {data, isPending, totalItem}
}

export default useAdsPaginated