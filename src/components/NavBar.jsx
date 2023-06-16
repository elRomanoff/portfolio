import React, { useEffect } from 'react'

export default function NavBar({state, setState, setFilter}) {

  let underlineClass = 'pink-text before:content-[""] before:absolute before:bg-pink-400 before:h-1 before:top-14 before:z-10 before:rounded-lg'
  const classes = {}

  useEffect( ()=> {
    //codigo a completar aqui
  },[state])

  const getWidth = (index) => {
    if (index === 0) {
      if(state === 3){
        return "w-3/4"
      }
      else if (state === 2){
        return "w-1/2"
      }
      else if (state === 1){
        return "w-1/4"
      }
      else {
        return "w-0"
      }
    } else {
      if(state === 3){
        return "w-0"
      }
      else if (state === 2){
        return "w-1/4"
      }
      else if (state === 1){
        return "w-1/2"
      }
      else {
        return "w-3/4"
      }
    }
    return ""
  };


  return (
    <>
        <div className='text-3xl flex justify-between mt-10 w-full'>
          <div className={`flex justify-center text-end w-1/4`} onClick={() => {setState(0); setFilter("")}}>
            <b className={`relative h-full before:w-full ${state === 0 ? underlineClass : ""}`}>Projects</b>
          </div>          
          <div className='w-1/2 flex justify-between'>
            <div className={`flex justify-center relative w-1/2`} onClick={() => setState(1)}>
              <b className={`relative h-full before:w-full ${state === 1 ? underlineClass : ""}`}>Filters</b>
            </div>
            <div className={`flex justify-center relative w-1/2`} onClick={() => {setState(2); setFilter("nothing")}}>
              <b className={`relative h-full before:w-full ${state === 2 ? underlineClass : ""}`}>Contact</b>
            </div>
          </div>

          <div className={`flex justify-center text-end w-1/4`} onClick={() => setState(3)}>
            <b className={`relative h-full before:w-full ${state === 3 ? underlineClass : ""}`}>View CV</b>
          </div>
        </div>

        <div className='flex justify-between relative'>
          <div className={`line h-0.5 bg-gray-600 ${getWidth(0)} relative top-5 transition-all`}></div>
          <div className={`line h-0.5 bg-gray-600 ${getWidth(1)} relative top-5 transition-all`}></div>
        </div>
    </>
  )
}
