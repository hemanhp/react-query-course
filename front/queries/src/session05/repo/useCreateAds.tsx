import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

function  useCreateAds(){
    const client = useQueryClient()
    const {mutate, mutateAsync} = useMutation({
        mutationFn:(data)=>{
            return axios.post('http://127.0.0.1:8000/ads/advertises/', data,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
        },
        onSuccess:()=>{
            client.invalidateQueries({queryKey:['Ads']})
        }
    })

    return {mutate, mutateAsync}
}

export default useCreateAds;