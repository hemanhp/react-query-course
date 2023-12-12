import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

function  useUpdateAds(){
    const client = useQueryClient()


    const {mutate, mutateAsync} = useMutation({

        mutationKey:['Ads'],
        mutationFn:(data)=>{
            return axios.put(`http://127.0.0.1:8000/ads/advertises/${data.id}/`, data,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
        },
        onMutate:(data)=>{
            const oldState = client.getQueryData(['Ads'])
            if(oldState){
                const newData  = oldState.pages[0].results.map(e=>e.id == data.id ? data: e)
                client.setQueryData(['Ads'], {
                    pageParams:oldState.pageParams,
                    pages:[{...oldState.pages[0], results:newData}]
                })
            }
            return oldState
        },
        onError:(e, v, context)=>{
            client.setQueryData(['Ads'], context)
        },
        onSettled:()=>{

        },
        onSuccess:()=>{
            client.invalidateQueries({queryKey:['Ads']})
        }
    })

    return {mutate, mutateAsync}
}

export default useUpdateAds;