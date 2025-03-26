import { Link } from 'react-router-dom';
import '../style/output.css';
export const Nav = () => {
    return (
        <>
            {/* < !--header -- > */}
            <header class="h-[2rem]">
                <nav>
                    <div class="left justify-center flex lg:block">
                        <ul class="flex [&>*]:flex">
                            <li><Link class="px-3 py-2 text-indigo-400 hover:bg-indigo-300" to='/'>Home</Link></li>
                            <li><Link to='/contact' class="px-3 py-2 hover:bg-indigo-300">Contact</Link></li>
                            <li><Link to='/product' class="px-3 py-2 hover:bg-indigo-300">Product</Link></li>
                            <li><Link to='/About' class="px-3 py-2 hover:bg-indigo-300">About</Link></li>
                            <li><Link to='/login' class="px-3 py-2 hover:bg-indigo-300">logIn</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}