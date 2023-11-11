import './App.css'
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/react-query/build/modern";
import DataList from "./session02/DataList.tsx";
import {useState} from "react";
import AdsContainer from "./session05/AdsContainer.tsx";

function App() {

  const [flag, setFlag] = useState(true)


  return (<>
  <AdsContainer></AdsContainer>
  </>)
}

export default App
