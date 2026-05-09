import num from "../data/data";
import { Cards } from "../components/Card";

function setStorage(id) {
  const storage = JSON.parse(localStorage.getItem("fav")) || [];

  
  storage.push(id);
  localStorage.setItem("fav", JSON.stringify(storage));
}

export function Programes() {
  
  return (
    <>
    
      
    <ul className="flex gap-15 justify-center items-center">
      <li className="bg-blue-300 py-3 px-3 border-2 border-black rounded-2xl"><a href=""></a>10</li>
      <li className="bg-blue-300 py-3 px-3 border-2 border-black rounded-2xl"><a href=""></a>20</li>
      <li className="bg-blue-300 py-3 px-3 border-2 border-black rounded-2xl"><a href=""></a>30</li>
      <li className="bg-blue-300 py-3 px-3 border-2 border-black rounded-2xl"><a href=""></a>40</li>
      <li className="bg-blue-300 py-3 px-3 border-2 border-black rounded-2xl"><a href=""></a>50</li>
    </ul>
    <div className="flex justify-center mt-15 text-2xl bg-amber-50 w-50 ml-145 rounded-xl font-mono shadow-md shadow-black border-2 border-black">
      <h1>select artist</h1>
    </div>
    <div className="flex gap-30 flex-wrap  mt-20 ml-55 font-mono">
      {num.map((data) => (
        <Cards
          key={data.id}
          name={data.name}
          image={data.image}
          time={data.time}
          id={data.id}
          setRem={setStorage}
          buttonName={"add"}
          classNameConfige={
            "text-white px-10 py-0.5 bg-blue-500 rounded-2xl mt-13 border-2"
          }
        />
      ))}
    </div>
    </>
  );
}
