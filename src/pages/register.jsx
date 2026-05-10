import { useState } from "react"

import { useNavigate } from "react-router-dom"


const Register = () => {
    const [forstName, setForstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const usenavigate = useNavigate()


    function setData(){
        
        if(!forstName || !lastName  || !email  || !password || password.length < 8 || !email.includes("@")){
            alert("error")
        }
        
        const localeStarageData = JSON.parse(localStorage.getItem('user')) || {};
        
        if(localeStarageData.email === email) {
            alert('error')
            return
        }else{
            localStorage.setItem("user", JSON.stringify({forstName, lastName, email, password, isLogedIn: false}));
            usenavigate('/login')
        }
        
        
        
    }


    return (
            <div className="bg-[#282d67] py-4 px-5 rounded-lg w-110 mx-auto text-white shadow-md shadow-black">
        <div className="flex justify-center mb-5">
            <h1 className="font-bold text-4xl">Register</h1>
        </div>
        <div className="ml-2 mb-5">
            <h3 className="text-white mb-2 text-sm">Forst Name:</h3>
            <div class="w-full max-w-sm min-w-[200px]">
                <input value={forstName} onChange={e => setForstName(e.target.value)} className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email..." />
            </div>
        </div>
        <div className="ml-2 mb-5">
            <h3 className="text-white mb-2 text-sm">Last Name:</h3>
            <div class="w-full max-w-sm min-w-[200px]">
                <input value={lastName} onChange={e => setLastName(e.target.value)} className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email..." />
            </div>
        </div>
        <div className="ml-2 mb-5">
            <h3 className="text-white mb-2 text-sm">Email:</h3>
            <div class="w-full max-w-sm min-w-[200px]">
                <input value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email..." />
            </div>
        </div>

        <div className="ml-2 ">
            <h3 className="text-white mb-2 text-sm">Password:</h3>
            <div className="w-full max-w-sm min-w-[200px]">
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Password..." />
            </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
            <button onClick={setData} className="bg-amber-50 text-black py-1 px-8 rounded-md hover:opacity-85 ml-32">Register</button>
            
        </div>
            
    </div>
    )
}

export default Register