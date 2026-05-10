import num from "../data/data";
import { Cards } from "../components/Card";
import { useState, useEffect } from "react";
import noArtist from '../assets/empty-illustration.png'




function removeElement(id) {
  const data = JSON.parse(localStorage.getItem("fav"));

  let newArry = data.filter((line) => line !== id);

  localStorage.setItem("fav", JSON.stringify(newArry));
}

export function Planning() {
  const [favArtist, setFavArtist] = useState(
    JSON.parse(localStorage.getItem("fav")) || [],
  );

  const [data, setData] = useState([]);
  useEffect(() => {
    const fileters = num.filter((line) => favArtist.includes(line.id));
    setData(fileters);
  }, [favArtist]);

  if (!favArtist.length){
    return (
      <div className="flex justify-center ">
        <img className="size-70" src={noArtist} alt="" />
      </div>
    );
  }

  return (
    <>
    
    <h1 className="flex  justify-center tra">Planning Artist</h1>
    <div className="flex gap-20 flex-wrap justify-center mt-20">

     
      {data.map((favori) => (
        <Cards
          key={favori.id}
          name={favori.name}
          image={favori.image}
          time={favori.time}
          id={favori.id}
          setRem={(id) => {
            setFavArtist(favArtist.filter((element) => element !== id));
            removeElement(id);
          }}
          classNameConfige={
            "text-white px-10 py-0.5 bg-red-500 rounded-2xl mt-13 border-2 "
          }
          buttonName={"remove"}
        />
      ))}
    </div>
      </>
  );

}