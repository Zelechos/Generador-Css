"use client"
import { useState } from "react";
import Visualizer from "../visualizer/page";
import Historial from "../history/page";
import SingOutButton from "./signout";

const NavBar = (userInfo: any) => {

    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isVisualizerVisible, setVisualizerVisible] = useState(false);
    const [isHistorialVisible, setHistorialVisible] = useState(false);

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    }

    const toggleVisualizerVisibility = () => {
        setVisualizerVisible(!isVisualizerVisible);
        if (isHistorialVisible) {
            setHistorialVisible(!isHistorialVisible);
        }
        setIsNavVisible(!isNavVisible);
    }

    const toggleHistorialVisibility = () => {
        setHistorialVisible(!isHistorialVisible);
        if (isVisualizerVisible) {
            setVisualizerVisible(!isVisualizerVisible);
        }
        setIsNavVisible(!isNavVisible);
    }

    return (
        <>
            <div className="flex items-center fixed top-0 left-5 h-screen transition-transform -translate-x-full sm:translate-x-0 flex items-center bg-red-950">
                <button type="button" onClick={toggleNavVisibility} className={`absolute text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${isNavVisible ? 'left-60' : 'left-0'}`}>
                    <svg className={`w-4 h-4 ${isNavVisible ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
            </div>

            <aside id="default-sidebar" className={`fixed top-0 left-0 z-30 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 flex items-center ${isNavVisible ? "" : "hidden"}`} aria-label="Sidebar">

                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3 sm:h-7" alt="CSS Generator  Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Css Generator AI</span>
                    </a>

                    <ul className="space-y-2 font-medium">
                        <li>
                            <a onClick={toggleVisualizerVisibility} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Visualizador</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={toggleHistorialVisibility} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group  cursor-pointer">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Historial</span>
                            </a>
                        </li>
                        <li>
                            <SingOutButton/>
                        </li>
                        <li className="pb-3 sm:pb-4">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse inset-x-0 bottom-0 p-3 absolute">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src={userInfo.userImg} alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0 ">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {userInfo.userName}
                                    </p>
                                    <p className="text-sm text-gray-500  dark:text-gray-400">
                                        {userInfo.userEmail}
                                    </p>
                                </div>
                            </div>
                        </li>

                    </ul>

                    <div id="dropdown-cta" className="p-4 mt-2 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
                        <div className="flex items-center mb-3">
                            <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                            <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
                            Bienvenido al CSS Generator AI actualmente nos encontramos en la version v1.0.0!!
                        </p>
                        <a className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="https://github.com/Zelechos/Generador-Css">Conoce nuestro repositorio !!</a>
                    </div>
                </div>
            </aside>

            <div className={`${isVisualizerVisible ? "" : "hidden"}`}>
                <Visualizer userEmail={userInfo.userEmail} />
            </div>

            <div className={`${isHistorialVisible ? "" : "hidden"}`}>
                <Historial userEmail={userInfo.userEmail} />
            </div>
        </>
    );
}

export default NavBar;
