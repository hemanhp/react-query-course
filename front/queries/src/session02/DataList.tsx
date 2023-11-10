import {useQuery} from "@tanstack/react-query";
import TimeAgo from 'react-timeago'
function DataList(){
    const result =useQuery({
    queryKey:['Posts'],
    queryFn: async function(){
      const data = await fetch('http://127.0.0.1:8000/ads/advertises/')
      return data.json()
    }
  })


    if(result.data){

    }

  return (
    <>
        <h1>{result.fetchStatus}</h1>
        <h3>{result.status}</h3>
        <h3><TimeAgo date={result.dataUpdatedAt} /></h3>

      <ul>
        {result.data?.map(e=><li key={e.id}>{e.title}</li>)}
      </ul>
    </>
  )
}

export default DataList