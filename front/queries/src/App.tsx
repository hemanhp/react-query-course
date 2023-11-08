import './App.css'
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/react-query/build/modern";
import DataList from "./session02/DataList.tsx";
import {useState} from "react";

function App() {

  const [flag, setFlag] = useState(true)

    const client = useQueryClient()

  return (<>
    {flag && <>
    <DataList />

  <DataList />
      </>
      }
      <span onClick={()=>setFlag(!flag)}>Clik to Toggle</span>
  </>)
}

export default App
