import '../style/output.css';


export const Nav = () => {
    return (
        <>
            {/* < !--header -- > */}
            <header class="h-[2rem]">
                <nav>
                    <div class="left justify-center flex lg:block">
                        <ul class="flex [&>*]:flex">
                            <li><a class="px-3 py-2 text-indigo-400 hover:bg-indigo-300" href='/'>Home</a></li>
                            <li><a class="px-3 py-2 hover:bg-indigo-300" href='/'>Contact</a></li>
                            <li><a class="px-3 py-2 hover:bg-indigo-300" href='/'>Product</a></li>
                            <li><a class="px-3 py-2 hover:bg-indigo-300" href='/'>About</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}