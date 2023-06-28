import React, { useEffect, useState } from "react"
import './App.css';
import "./index.css"
import img from "./asd.jpg"
import Content from "./components/Content"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Filters from "./components/Filters"
import ShowCv from "./components/ShowCv"

function App() {

  const [state, setState] = useState(0)
  const [filter, setFilter] = useState("")


  return (
    <>
      <div className="content w-[860px] m-auto text-white tracking-wide">
        <div className='upper_banner relative'>
          <img src={img} alt=""/>
          <div className="w-full absolute top-0 flex flex-col justify-between h-full roman">
            <div className="text-6xl my-10 violet-bg w-content px-10">
              Facundo Romano
            </div>
            <div className="text-6xl my-10 text-right violet-bg w-content px-10">
              Front-end Developer
            </div>
          </div>
        </div>
        <div className='flex column flex-col'>
          <NavBar state={state} setState={setState} setFilter={setFilter}/>
          {state === 1 ? <Filters setFilter = {setFilter}/> : <></>}
          {state === 3 ? <ShowCv/> : <Content filter={filter}/>}
          <Footer/>
        </div>

      </div>
    </>
  );
}

export default App;