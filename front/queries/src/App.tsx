import './App.css'
import {useQuery} from "@tanstack/react-query";

function App() {

  const result =useQuery({
    queryKey:['Posts'],
    queryFn: async function(){
      const data = await fetch('http://127.0.0.1:8000/ads/advertises/')
      return data.json()
    }
  })

  console.log(result)

  if (result.isPending){
    return <h1>Loading</h1>
  }
  return (
    <>
      <ul>
        {result.data?.map(e=><li key={e.id}>{e.title}</li>)}
      </ul>
    </>
  )
}

export default App
