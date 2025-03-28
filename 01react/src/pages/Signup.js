import Regisjs from '../script/register'
import { useState } from 'react';
import '../style/login.css'


export const SignUp = () => {
    const [userName, setUser] = useState('');
    const [userPass, setPass] = useState('');
    const [userEmail, setEmail] = useState('');

    function submit() {
        console.log(userName);
        console.log(userPass);
        console.log(userEmail);
    }

    return (
        <>
            <div className="w-full h-[80vh] flex justify-center items-center">
                <div className="f rounded-2xl">
                    <form className="border h-[100%] rounded-3xl lg:w-[45rem] lg:pr-3 lg:items-center flex-col w-[19rem] px-3 py-2">
                        <div className='lg:flex'>
                            <div className='lg:w-[50%]'>
                                <h1 className="text-center font-bold text-[#01ffff]">Register</h1>
                                <label id='label' className="label mx-1 my-3">User Id</label>
                                <div className='w-full pr-2 lg:pr-3'>
                                    <input value={userName} onChange={(e) => { setUser(e.target.value) }} id='user' className="user w-full mr-6 lg:mr-0 ml-1 my-3 border-gray-400 border-1 rounded-2xl lg:px-4 py-1" type="text" /><br />
                                </div>
                                <label id='label' className="label mx-1 my-3">Password</label><br />
                                <div className='w-full pr-2 lg:pr-3'>
                                    <input value={userPass} onChange={(e) => { setPass(e.target.value) }} id='pass' className="password w-full mr-6 lg:mr-0 ml-1 my-3 border-gray-400 border-1 rounded-2xl lg:px-4 py-1" type="password" />
                                </div>
                                <label id='label' className="label mx-1 my-3">Email</label>
                                <div className='w-full pr-2 lg:pr-3'>
                                    <input value={userEmail} onChange={(e) => { setEmail(e.target.value) }} id='email' className="email w-full mr-6 lg:mr-0 ml-1 my-3 border-gray-400 border-1 rounded-2xl lg:px-4 py-1" type="email" /><br />
                                </div>
                                <br />
                                <center><button onClick={submit} className="mt-5 border rounded-2xl px-4 py-1 capitalize hover:border-[#01ffff] hover:text-[#01ffff] transition-all">log In</button></center>
                            </div>
                            <div className='lg:w-[50%] loginData'>
                                hello
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Regisjs />
        </>
    )
}