export function Cards({name,  image, time, id, setRem, buttonName, classNameConfige}){
    return (
        <>
        <div className=''>
            <div className="hover:translate-y-2 hover:scale-[1.05] duration-500">
            <img className='h-60 w-60 rounded-lg shadow-md shadow-black' src={image}/>
            </div>
            <div className='bg-[#282d67] rounded-lg text-center py-4 px-5 font-mono mt-5 h-50 shadow-md shadow-black border-2 border-black hover:translate-y-2 hover:scale-[1.05] duration-500'>
                <h1 className='text-white'>{name}</h1>
                <h1 className='mt-10 text-white'>{time}</h1>
                
                <button className={classNameConfige} onClick={() => setRem(id)}>{buttonName}</button>
            </div>
        </div>
        </>
    )
}