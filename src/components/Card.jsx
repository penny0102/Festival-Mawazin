export function Cards({name,  image, time, id, setRem, buttonName, classNameConfige}){
    return (
        <>
        <div className=''>
            <div>
            <img className='max-h-60 w-60 rounded-2xl shadow-md shadow-black' src={image}/>
            </div>
        
            <div className='bg-[#282d67] rounded-2xl text-center py-4 px-5 font-mono mt-5 h-60 shadow-md shadow-black'>
                <h1 className='text-white'>{name}</h1>
                <h1 className='mt-10 text-white'>{time}</h1>
                <button className={classNameConfige} onClick={() => setRem(id)}>{buttonName}</button>
            </div>
        </div>
        </>
    )
}