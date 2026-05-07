import image from '../assets/img.jpg'
import playlmg from '../assets/playImg.jpg'
import num from '../data/data'
import { Cards } from '../components/Card'

function setStorage(id){
  const storage = JSON.parse(localStorage.getItem("fav")) || []
  
  if(storage.includes(id)) return;
  storage.push(id)
  localStorage.setItem("fav", JSON.stringify(storage))
}

function Home() {
  
  return (
    <>
      <div className='flex justify-center'>
          <img className='w-300 h-140 shadow-md shadow-black' src={image}/>
      </div>
      <div className='flex justify-center mt-20 bg'>
        
        <img className='flex w-230 h-120 shadow-md shadow-black' src={playlmg}/>
      </div>

      <div className='flex justify-center text-5xl font-mono'>
        <h1 className='mt-30 text-white'>STAGES</h1>
      </div>

      <div className='flex gap-30  mt-30 ml-55 font-mono'>
        
        {num.slice(0, 3).map(data => <Cards key={data.id} name={data.name} image={data.image} time={data.time} id={data.id} setStorage={setStorage}/>)}
      </div>
      <div className='mt-20'>
        <nav className='flex gap-20 justify-center text-white py-5'>
          <a href="https://github.com/penny0102">Github</a>
          <a href="https://youtu.be/lbwC8Ix7nxU?si=XJ8osWlpJuivi_pb">Youtube</a>
        </nav>
      </div>
    </>   
  )
}

export default Home