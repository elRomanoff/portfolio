import React from 'react'
import js from "../javascript.png"
import tailwind from "../tailwind.png"
import responsive from "../responsive.png"
import react from "../react.png"
import game from "../game.png"
import sound from "../sound.webp"

export default function Filters({setFilter}) {
    
  return (
    <div className='mt-20 text-center'>
        <div className='flex w-full justify-between flex-wrap'>
        <div className="relative" onClick={() => setFilter("vanilla-javascript")}>
          <img className='w-[200px] filter brightness-70 hover:brightness-100' src={js} alt="" />
          <div className="absolute text-2xl inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
            <b>Vanilla</b>
          </div>
        </div>
        <div className="relative" onClick={() => setFilter("react")}>
          <img className='w-[200px] filter brightness-70 hover:brightness-100' src={react} alt="" />
          <div className="absolute text-2xl inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
            <b>React</b>
          </div>
        </div>
        <div className="relative" onClick={() => setFilter("responsive")}>
          <img className='w-[200px] filter invert-100 brightness-70 hover:brightness-100' style={{ filter: 'invert(100%)' }} src={responsive} alt="" />
          <div className="absolute text-2xl inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
            <b>Responsive</b>
          </div>
        </div>
        <div className="relative" onClick={() => setFilter("tailwindcss")}>
          <img className='w-[200px] filter brightness-70 hover:brightness-100' src={tailwind} alt="" />
          <div className="absolute text-2xl inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
            <b>Tailwindcss</b>
          </div>
        </div>
        <div className="relative" onClick={() => setFilter("game")}>
          <img className="w-[200px] filter brightness-70 hover:brightness-100" src={game} alt="" />
          <div className="absolute text-2xl inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
            <b>Game</b>
          </div>
        </div>
        <div className="relative" onClick={() => setFilter("sound")}>
          <img className="w-[200px] filter brightness-70 hover:brightness-100" src={sound} alt="" />
          <div className="absolute text-2xl inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
            <b>Sound</b>
          </div>
        </div>
        </div>
    </div>
  )
}
