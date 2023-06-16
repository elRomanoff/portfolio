import React, { useState, useEffect } from "react";

import DetailsComponent from "./DetailsComponent";
import generic from "../generic.png"

export default function Content({filter}) {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await fetch("https://api.github.com/users/elRomanoff/repos");
                const data = await response.json();
                if (Array.isArray(data))setRepositories(data);
            } catch (error) {
                console.error("Error fetching repositories:", error);
            }
        };
        fetchRepositories();
    }, []);

    const filtered = repositories.filter(x => filter ? x.topics.includes(filter) : true)

    return (
    <ul className='text-center'>
        {filtered.map((repo) => (
        <li className='mt-20' key={repo.id}>
            <h2 className='font-bold text-3xl capitalize my-6'><span className="pink-text text-2xl">•</span> {repo.name}</h2>
            <div className='w-full h-36 rounded-full object-center overflow-hidden my-3 relative'>
                <img className="relative bottom-20 w-full" src={`https://raw.githubusercontent.com/elRomanoff/${repo.name}/master/descarga.png`} alt="" onError={(e)=>{e.target.src = generic}}/>
            </div>
            <b className='text-2xl block my-6'>Link: <a className="pink-text" target="_blank"  rel="noreferrer" href={repo.homepage}>{repo.name}</a></b>
            {/* <b className='text-sm block'>Github Link: <span className="pink-text">github.com/doki-doki</span></b> */}
            <p className='grey-text leading-6 my-5 text-xl mx-20'>Herramientas utilizadas: {repo.topics.join(", ")}</p>
            <DetailsComponent description={repo.description}/>
        </li>
        ))}
    </ul>
  )
}
