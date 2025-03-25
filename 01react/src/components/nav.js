import '../style/output.css';


export const Nav = () => {
    return (
        <header class="p-2 @container">
            <nav class=" p-2 md:w-full w-full flex justify-between">
                <div class="left p-1 pl-2 font-bold rounded-4xl w-30 text-indigo-600">
                    <p><span>VYOMREX</span></p>
                </div>
                <div class="center">
                    <div class="search">
                        <input type="text" placeholder="Search" class="border px-4 p-1 md:w-[25rem] rounded-2xl" />
                    </div>
                </div>
                <div class="right flex md:w-[calc(100%-80rem)] justify-between">
                    <a href='#'><div class="item1 border rounded-2xl text-center m-1 w-[5rem]">ProjectS</div></a>
                    <a href='/'><div class="item2 border w-[4rem] p-1 pl-2 font-medium text-indigo-400 border-none underline underline-offset-2 cursor-pointer rounded-2xl"><p>HOME</p></div></a>
                    <div class="item3 border px-[8rem] py-4 rounded-2xl"></div>
                    <div class="item4 border w-[4rem] p-4 rounded-2xl"></div>
                    <div class="item5 rounded-full p-4 border mr-[2rem] cursor-pointer"></div>
                </div>
            </nav>
        </header>
    )
}