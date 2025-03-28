import { useState } from 'react';
import LoginSR from '../script/loginsc'
import '../style/login.css';


export const Login = () => {
    const [userName, checkUser] = useState('');
    const [userPass, checkPass] = useState('');

    function on() {
        console.log(userName);
        console.log(userPass);
    }


    return (
        <>
            <div className="w-full h-[80vh] flex justify-center items-center">
                <div className="f rounded-2xl">
                    <form className="border rounded-3xl lg:w-[45rem] lg:pr-3 lg:items-center flex-col w-[19rem] px-3 py-2 h-[20rem]">
                        <div className='lg:flex'>
                            <div className='lg:w-[50%]'>
                                <h1 className="text-center font-bold text-[#01ffff]">Welocome</h1>
                                <label id='label' className="label mx-1 my-3">User Id & Email</label>
                                <div className='w-full pr-2 lg:pr-3'>
                                    <input value={userName} onChange={(e) => { checkUser(e.target.value) }}  id='user' className="text-black user w-full mr-6 lg:mr-0 ml-1 my-3 border-gray-400 border-1 rounded-2xl lg:px-4 py-1" type="text" /><br />
                                </div>
                                <label id='label' className="label mx-1 my-3">Password</label><br />
                                <div className='w-full pr-2 lg:pr-3'>
                                    <input value={userPass} onChange={(e) => { checkPass(e.target.value) }}  id='pass' className="text-black password w-full mr-6 lg:mr-0 ml-1 my-3 border-gray-400 border-1 rounded-2xl lg:px-4 py-1" type="password" />
                                </div>
                                <br />
                                <center><a href='asa' onClick={on} className="mt-5 border rounded-2xl px-4 py-1 capitalize hover:border-[#01ffff] hover:text-[#01ffff] transition-all">log In</a></center>
                            </div>
                            <div className='lg:w-[50%] loginData'>
                                hello
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <LoginSR />
        </>
    )
}