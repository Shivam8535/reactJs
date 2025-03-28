import { Link } from 'react-router-dom';
import '../style/output.css';
export const Nav = () => {
    return (
        <>
            {/* < !--header -- > */}
            <header className="h-[2rem]">
                <nav>
                    <div className="left flex  lg:justify-between lg:w-full">
                        <div className='flex lg:justify-between w-full'>
                            <ul className="flex [&>*]:flex" >
                                <li><Link className="rounded-4xl px-3 py-2 text-indigo-400 hover:bg-indigo-300" to='/'>Home</Link></li>
                                <li><Link to='/contact' className="rounded-4xl px-3 py-2 hover:bg-indigo-300">Contact</Link></li>
                                <li><Link to='/product' className="rounded-4xl px-3 py-2 hover:bg-indigo-300">Product</Link></li>
                                <li><Link to='/About' className="rounded-4xl px-3 py-2 hover:bg-indigo-300">About</Link></li>
                                <li><Link to='/project' className="rounded-4xl px-3 py-2 hover:bg-indigo-300">Project</Link></li>
                            </ul>
                            <ul className="flex [&>*]:flex">
                                <li><Link to='/login' className="rounded-4xl px-3 text-red-500 py-2 hover:bg-indigo-300">logIn</Link></li>
                                <li><Link to='/sign' className="rounded-4xl px-3 text-red-500 py-2 hover:bg-indigo-300">Sign</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}