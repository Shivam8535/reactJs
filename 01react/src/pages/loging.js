import { useState } from 'react';
import LoginSR from '../script/loginsc'
import '../style/login.css';


export const Login = () => {
    const [email, checkUser] = useState('');
    const [password, checkPass] = useState('');

    const on = async () => {
        console.log(email);

        let response = await fetch('http://localhost:4040/api/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log("A")
        let result = await response.json();
        console.warn(result);
        if (result.success) {
            alert('Login successful!');
        } else {
            alert(`Login failed: ${result.message}`);
        }
    }


    return (
        <>
            <div className="w-full h-[80vh] flex justify-center items-center">
                <div className="f rounded-2xl">
                    <form className="border rounded-3xl lg:w-[45rem] lg:pr-3 lg:items-center flex-col w-[19rem] px-3 py-2 h-[20rem]">
                        <div className='lg:flex'>
                            <div className='lg:w-[50%]'>
                                <h1 className="text-center font-bold text-[#01ffff]">Welocome</h1>
                                <label id='label' className="label mx-1 my-3">Email</label>
                                <div className='w-full pr-2 lg:pr-3'>
                                    <input name='email' onChange={(e) => { checkUser(e.target.value) }} id='user' className="text-black user w-full mr-6 lg:mr-0 ml-1 my-3 border-gray-400 border-1 rounded-2xl lg:px-4 py-1" type="email" /><br />
                                </div>
                                <label id='label' className="label mx-1 my-3">Password</label><br />
                                <div className='w-full pr-2 lg:pr-3'>
                                    <input name='passqord' onChange={(e) => { checkPass(e.target.value) }} id='pass' className="text-black password w-full mr-6 lg:mr-0 ml-1 my-3 border-gray-400 border-1 rounded-2xl lg:px-4 py-1" type="password" />
                                </div>
                                <br />
                                <center><p onClick={on} className="mt-5 border rounded-2xl px-4 py-1 capitalize hover:border-[#01ffff] hover:text-[#01ffff] transition-all">log In</p></center>
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