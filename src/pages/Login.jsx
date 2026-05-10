import { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let usenavigate = useNavigate()


    function getFormData(){
        const data = JSON.parse(localStorage.getItem("user")) || {};
        if(!data || data.isLogedIn) {
            alert("no data");
        }else{
            if(email !== data.email || password !== data.password || !email || !password){
                alert('relode');
            }else{
                //alert('login sec')
                data.isLogedIn = true;
                console.log(data)
                localStorage.setItem('user', JSON.stringify(data))
                console.log('nono')
                usenavigate('/')
            }
        }



    }
  
    return (
    <div className="bg-[#282d67] py-4 px-5 rounded-lg w-110 mx-auto text-white shadow-md shadow-black">
        <div className="flex justify-center mb-5">
            <h1 className="font-bold text-4xl">Login</h1>
        </div>
        <div className="ml-2 mb-5">
            <h3 className="text-white mb-2 text-sm">Email:</h3>
            <div className="w-full max-w-sm min-w-[200px]">
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
            <button onClick={getFormData} className="bg-amber-50 text-black py-1 px-8 rounded-md hover:opacity-85">Login</button>
            <Link to='/register' className="py-1 px-8 rounded-md border border-white hover:opacity-85">Register</Link>
        </div>
            
    </div>
  )
}
export default Login