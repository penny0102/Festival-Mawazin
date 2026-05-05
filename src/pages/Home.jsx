import image from '../assets/img.jpg'
import playlmg from '../assets/playImg.jpg'
import sa3d from '../assets/artist/sa3d.jpg'
import morphine from '../assets/artist/oardefault.jpg'
import freanch from '../assets/artist/OIP-4136016057.jpg'
import drake from '../assets/artist/OIP-976544070.jpg'


const num = [
    {
      name : 'Saad Lamjarred',
      image : sa3d,
      time : '13/8/2026'
    },
    {
      name : 'Saad Lamjarred',
      image : morphine,
      time : '18/8/2026'
    },
    {
      name : 'Saad Lamjarred',
      image : freanch,
      time : '19/8/2026'
    },
    {
      name : 'Saad Lamjarred',
      image : drake,
      time : '20/8/2026'
    }
  ]




function Home() {

  return (
    <>
      <div className='flex justify-center'>
          <img className='w-300 h-140' src={image}/>
      </div>
      <div className='flex justify-center mt-20'>
        <h1 className='text-white'>hello</h1>
        <img className='flex w-230 h-120 shadow-lg shadow-white' src={playlmg}/>
      </div>

      <div className='flex justify-center text-5xl font-mono'>
        <h1 className='mt-30 text-white'>STAGES</h1>
      </div>

      <div className='flex gap-30  mt-30 ml-55 font-mono'>
        
        {num.slice(0, 3).map((data) => {
          return  <div className=''>
                      <div>
                        <img className='max-h-60 w-60 rounded-2xl shadow-lg shadow-white' src={data.image}/>
                      </div>
                    
                      <div className='bg-white rounded-2xl text-center py-4 px-5 font-mono mt-5 h-30'>
                          <h1 className='text-black'>{data.name}</h1>
                          <h1 className='mt-10'>{data.time}</h1>
                      </div>
                  </div>
        })}
      </div>
      <div className='flex gap-5 justify-center bg-white '>
        <nav>
          <a href="">Github</a>
          <a href="">Youtube</a>
        </nav>
      </div>
    
    </>
 
    
       
  )
}

export default Home