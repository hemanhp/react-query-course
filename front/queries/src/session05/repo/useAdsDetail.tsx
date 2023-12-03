import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Advertise} from "./models.ts";
import axios from "axios";

function useAdsDetail(ads:Advertise){
    const queryClient = useQueryClient()
        const {isPending, data} = useQuery({
        queryKey: ['Ads',ads.id ],
        staleTime: 0,
        initialData:ads,
        queryFn: async function({queryKey}){

            const url = 'http://127.0.0.1:8000/ads/advertises/'+queryKey[1]

            const result = await axios.get(url)
            return result.data;
        },

    })
    return {data, isPending}
}

export default useAdsDetail