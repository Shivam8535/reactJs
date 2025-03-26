import LoginSR from '../script/loginsc'
import '../style/login.css'

export const Login = () => {
    return (
        <>
            <div className="w-full h-[80vh] flex justify-center items-center">
                <div className="">
                    <form className="border rounded-3xl lg:w-[16rem] flex-col w-[18rem] px-3 py-2 h-[20rem]">
                        <h1 className="text-center">Welocome</h1>
                        <label id='label' className="label mx-1 my-3">User Id & Email</label>
                        <input id='user' className="user  mx-1 my-3 border-gray-400 border-1 rounded-2xl lg:px-4 py-1" type="text" /><br />
                        <label id='label' className="label mx-1 my-3">Password</label><br />
                        <input id='pass' className="password mx-1 my-3 border-gray-400 border-1 rounded-2xl lg:px-4 py-1" type="password" />
                        <br />
                        <center><button className="mt-5 border rounded-2xl px-4 py-1 capitalize hover:border-cyan-300 hover:text-cyan-300">log In</button></center>
                    </form>
                </div>
            </div>
            <LoginSR />
        </>
    )
}