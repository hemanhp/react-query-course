import {useQuery, useQueryClient} from "@tanstack/react-query";
import AdsList from "./AdsList.tsx";
import useAds from "./repo/useAds.tsx";
import {useEffect, useRef, useState} from "react";
import usdAdsPaginated, {AdsPageParams} from "./repo/usdAdsPaginated.tsx";
import useInfiniteAds from "./repo/useInfiniteAds.tsx";
import {Advertise} from "./repo/models.ts";
import AdsDetail from "./AdsDetail.tsx";

function AdsContainer(){
     const queryClient = useQueryClient()
    // const [filter, setFilter] = useState('all')
    const [pageParams , setPageParams] = useState<AdsPageParams>({
        page:1,
        ad_type:'all'
    })

    const loadingTarget = useRef(null)

    // const { data, totalItem} = usdAdsPaginated(pageParams)
    const { data,hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteAds()
    const [showDrawer, setShowDrawer] = useState(false)
    const [selectAds, setSelectedAds] = useState<Advertise| null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if(hasNextPage && entries[0].isIntersecting){
                    fetchNextPage()
                }
            },{
                threshold:1
            }
        )

        if(loadingTarget.current){
            observer.observe(loadingTarget.current)
        }

        return ()=>{
            if(loadingTarget.current){
            observer.unobserve(loadingTarget.current)
        }
        }


    }, [loadingTarget, hasNextPage, fetchNextPage]);

        return<>.
            <span onClick={()=>queryClient.cancelQueries({queryKey:['Ads', pageParams]})}>Cancel</span>
            <input type="text" onChange={(e=>setPageParams({...pageParams, search:e.target.value}))}/>
            {/*<span>Total Item : {totalItem}</span>*/}
            <span  onClick={()=>setPageParams({ad_type:pageParams.ad_type, page:pageParams.page+1})}> Next Page</span>
                        <span  onClick={()=>setPageParams({ad_type:pageParams.ad_type, page:pageParams.page-1})}> Prev Page</span>

            <span onClick={()=>setShowDrawer(!showDrawer)}>OpenDrawer</span>

            <div>
                <span onClick={()=>setPageParams({ad_type:'all', page:1})}>All</span> |
                <span  onClick={()=>setPageParams({ad_type:'buy', page:1})}>Buy</span> |
                <span  onClick={()=>setPageParams({ad_type:'sell', page:1})}>Sell</span> |
            </div>
            {data && <AdsList adsList={data} onItemSelected={(a)=>{

                setSelectedAds(a);
                setShowDrawer(true);
            }} />}

            {/*{ hasNextPage && <span onClick={()=>fetchNextPage()}>Load More</span>}*/}
            {isFetchingNextPage && <span className={"block mx-auto w-12 h-12 border-8 border-blue-700 rounded-full border-t-transparent animate-spin"}></span> }

            <div ref={loadingTarget}></div>
            <div className={`fixed h-screen top-0 left-0 bg-white transition-all duration-200 ${showDrawer? 'w-1/5': 'w-0'}`}>
                { showDrawer && selectAds && <AdsDetail ads={selectAds} />}
                {showDrawer && <span onClick={()=>{setShowDrawer(false); setSelectedAds(null);}}> Close</span>}
            </div>
        </>


}

export default AdsContainer