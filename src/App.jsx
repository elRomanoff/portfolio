import React, { useEffect, useState } from "react"
import './App.css';
import "./index.css"
import img from "./asd.jpg"
import Content from "./components/Content"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Filters from "./components/Filters"

function App() {

  const [state, setState] = useState(0)
  const [filter, setFilter] = useState("")


  return (
      <div className="content w-[860px] m-auto text-white tracking-wide">
        <div className='upper_banner'>
          <img src={img} alt=""/>
        </div>
        <div className='flex column flex-col'>
          <NavBar state={state} setState={setState} setFilter={setFilter}/>
          {state === 1 ? <Filters setFilter = {setFilter}/> : <></>}
          <Content filter={filter}/>
          <Footer/>
        </div>

      </div>
  );
}

export default App;