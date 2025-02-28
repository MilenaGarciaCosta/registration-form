import '../styles/nav.css'
import { Link } from 'react-router-dom'
import main_icon from '../assets/app-main-icon.svg'

const Nav = () => {
    return (
        <>
            <nav className="bg-white dark:bg-sky-950 w-full z-20 top-0 start-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={main_icon} className="h-8 main-icon" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">InstaCoders</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link to='/cadastrar'>
                            <button class="btn-entrar bg-sky-950 text-cyan-100 font-medium rounded-full cursor-pointer px-10 py-4 text-lg border-1 border-sky-300 transition-all ease-in-out duration-200">Entrar</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav