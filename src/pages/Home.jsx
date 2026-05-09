import image from "../assets/img.jpg";
import playlmg from "../assets/playImg.jpg";
import haf1 from '../assets/7-49.jpg'
import haf2 from '../assets/P191.jpg'
import haf3 from '../assets/Ph1-63.jpg'



function Home() {
  return (
    <>
      <div className="flex justify-center">
        <img className="w-300 h-140 shadow-md shadow-black" src={image} />
      </div>
      <div className="flex justify-center mt-20 ">
        <img
          className="flex w-230 h-120 shadow-md shadow-black"
          src={playlmg}
        />
      </div>

      <div className="flex justify-center text-5xl font-mono">
        <h1 className="mt-30 text-white">STAGES</h1>
      </div>

      <div className="flex gap-30 w-100 h-50 mt-20 ml-25 font-mono ">
        <img className="shadow-lg shadow-black rounded-xl hover:translate-y-2 hover:scale-[1.05] duration-500" src={haf1} alt="" />
        <img className="shadow-lg shadow-black rounded-xl hover:translate-y-2 hover:scale-[1.05] duration-500" src={haf2} alt="" />
        <img className="shadow-lg shadow-black rounded-xl hover:translate-y-2 hover:scale-[1.05] duration-500" src={haf3} alt="" />
      </div>

      <div className="mt-20">
        <nav className="flex gap-20 justify-center text-white py-5">
          <a href="https://github.com/penny0102">Github</a>
          <a href="https://youtu.be/lbwC8Ix7nxU?si=XJ8osWlpJuivi_pb">Youtube</a>
        </nav>
      </div>
    </>
  );
}

export default Home;
