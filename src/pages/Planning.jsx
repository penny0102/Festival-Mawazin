import num from "../data/data";
import { Cards } from "../components/Card";
import { useState, useEffect } from "react";

function removeElement(id){
    const data = localStorage.getItem('fav')
}

export function Planning(){
    const [data, setData] = useState([]);
    
    
    if(!localStorage.getItem('fav')){
        return <div className="flex justify-center">
            <p className="text-white text-2xl">No artist</p>
        </div>
    };
    useEffect(() => {
      const fast = JSON.parse(localStorage.getItem('fav'));
      const fileters = num.filter(line => fast.includes(line.id));
      setData(fileters);
    }, []);
    
    return (
       
        <div className="flex gap-5 justify-center">
             {data.map(favori => 
                <Cards key={favori.id} name={favori.name} image={favori.image} time={favori.time} id={favori.id}/> 
            )}
        </div>
           
        
    )
}


