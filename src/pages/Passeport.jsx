import logo from '../assets/paspor.png'
import qrCode from '../assets/qrCode.svg'


export const Passeport = () => {
    return(
        <>
            <div className="bg-[#282d67] py-4 px-5 rounded-lg w-96 mx-auto text-white shadow-md shadow-black hover:translate-y-2 hover:scale-[1.05] duration-500">
                <div className='flex items-center gap-4 mb-4'>
                    <img className='rounded-full size-30' src={logo} alt="" />
                    <div>
                        <h1 className='text-4xl font-bold mb-2'>Mawazin</h1>
                        <p className='text-gray-500 text-sm'>10/08/2026 22:30</p>
                    </div>
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex items-center gap-4'>
                        <p>Code:</p>
                        <p className='font-bold'>#MZ-sdf26g1sf35sf6</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p>First name:</p>
                        <p className='font-bold'>Mohammed</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p>Last name:</p>
                        <p className='font-bold'>Chdig</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p>Entry date:</p>
                        <p className='font-bold'>08/08/2026</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p>Expire date:</p>
                        <p className='font-bold'>12/08/2026</p>
                    </div>
                    <div className='p-4 flex justify-center w-full'>
                        <img className='w-32 h-32 rounded-xl' src={qrCode} alt="" />
                    </div>
                </div>
               
            </div>
        </>
    )
}