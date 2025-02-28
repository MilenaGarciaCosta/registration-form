import '../styles/nav.css'
import { Link } from 'react-router-dom'
import main_icon from '../assets/app-main-icon.svg'

const Nav = () => {
    return (
        <>
            <nav className="bg-white dark:bg-sky-950 w-full z-20 top-0 start-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={main_icon} id='main-icon' className="h-8" alt="Logo" />
                        <span id='main-title' className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">InstaCoders</span>
                    </Link>
                    <div id='nav-button-group' className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center gap-5">
                        <Link to='/cadastrar'>
                            <button className="btn-entrar bg-sky-950 text-cyan-100 font-medium rounded-full cursor-pointer px-10 py-4 text-lg border-1 border-sky-300 transition-all ease-in-out duration-200">Entrar</button>
                        </Link>
                        <label className="mode-switch">
                            <input type="checkbox" />
                            <div className="slider">
                                <div className="circle"></div>
                            </div>
                        </label>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav