import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {useRef} from "react";

function  useDeleteAds(){
    const client = useQueryClient()
    const undoDelete = useRef<()=>void|null>();

    const {isPending, mutate, mutateAsync} = useMutation({

        mutationKey:['DeleteAds'],
        mutationFn:(data)=>{
            const deletePromise =  new Promise((resolve, reject)=>{
                const deleteTimeout = setTimeout(()=>{
                    axios.delete(`http://127.0.0.1:8000/ads/advertises/${data.id}/`)
                        .then(resolve)
                        .catch(reject)
                }, 8000)

                const clearDeleteTimeout = ()=>{
                    clearTimeout(deleteTimeout)
                    reject({reason:'undo'})
                }

                undoDelete.current = clearDeleteTimeout;

            })

            return deletePromise
        },
        onMutate:(data)=>{
            const oldState = client.getQueryData(['Ads'])
            if(oldState){
                const newData  = oldState.pages[0].results.filter(e=>e.id != data.id)
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

    return {mutate, mutateAsync, isPending, undoDelete}
}

export default useDeleteAds;