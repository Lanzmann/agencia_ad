import React from 'react'
import Button from './Button'

function Header() {
    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-tomato p-6">
                <div id="logo" className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">ad.</span>
                </div>
                <div id="menu" className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div id="links" className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Portfolio
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Planos
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                            Contato
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header