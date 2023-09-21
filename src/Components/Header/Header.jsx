import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="w-full p-2 px-10 grid grid-cols-3 border-b border-neutral-300">
            <div className="flex items-center">
                <Link to={'/'}>
                    <h1 className="font-black text-2xl select-none cursor-pointer text-red-500">Store</h1>
                </Link>
            </div>
            <div className="flex items-center">
                <form className="w-full">
                    <input
                        className="w-full text-lg p-1 pl-8 border-solid border-black border-2 focus:outline-none rounded"
                        autoComplete="off"
                        aria-label="Search contacts"
                        placeholder="Search"
                        type="search"
                        name="q"
                    />
                </form>
                <div className="absolute flex items-center pl-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
            </div>
            <div className="flex items-center justify-end">
                <Link to={'/cart'}>
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                </Link>
            </div>
        </header>
    )
}