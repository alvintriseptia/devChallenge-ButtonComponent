import React, { useState } from 'react'
import 'tailwindcss/tailwind.css'

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [menu, setMenu] = useState(false);
    return (
        <nav>
            <div className="pt-10 flex items-center justify justify-between md:justify-start text-white">
                <div className="w-2/12 flex space-x-2">
                    <span className="p-1 px-3 rounded inline-block bg-gray-500">E</span>
                    <p className="self-center">Epictrus</p> 
                </div>   
                <div onClick={() => setMenu(!menu)} className="toggle md:hidden z-10 cursor-pointer fixed right-4 top-10">
                    <svg className="fill-current text-white" viewBox="0 0 100 80" width="30" height="30">
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="60" height="10"></rect>
                        <rect y="60" width="80" height="10"></rect>
                    </svg>
                </div>

                {/* Mobile Navbar */}
                {menu ? 
                    <div className="bg-gradient-to-b from-body1 to-body2 w-screen h-screen fixed bottom-0 top-0 left-0 right-0">
                        <div className="flex flex-col text-2xl space-y-10 mt-20 items-center  transition-all">
                            <div className="text-right relative">
                                <input className="bg-search w-full bg-gray-800 text-white pl-8 py-2 rounded-2xl" placeholder="Search" />
                            </div>
                            <ul className="flex flex-col space-y-10">
                                <li className=" hover:underline">UI Design</li>
                                <li className=" hover:underline">Front-end</li>
                                <li className=" hover:underline">Back-end</li>
                                <li className="relative cursor-pointer hover:underline" onClick={() => setDropdown(!dropdown)}>Lainnya
                                    {dropdown ? 
                                        <ul className="absolute mt-1 w-[100px] roudned-lg space-y-2 bg-gray-800">
                                            <li ><a className="border-b-2 px-2 py-1 flex border-gray-500" href="#">Internet</a></li>
                                            <li ><a className="border-b-2 px-2 pb-1 flex border-gray-500" href="#">Books</a></li>
                                            <li><a className="px-2 pb-1 flex" href="#">Open Source</a></li>
                                        </ul> 
                                    : null}
                                </li>
                            </ul>
                        </div>
                    </div>
                : null}
                

                {/* Desktop Navbar */}
                <div className="w-10/12 hidden md:flex items-center md:justify-between">
                    <ul className="flex space-x-4 justify-center md:justify-start md:space-x-16">
                        <li className=" hover:underline">UI Design</li>
                        <li className=" hover:underline">Front-end</li>
                        <li className=" hover:underline">Back-end</li>
                        <li className="relative cursor-pointer hover:underline" onClick={() => setDropdown(!dropdown)}>Lainnya
                            {dropdown ? 
                                <ul className="absolute mt-1 w-[100px] roudned-lg space-y-2 bg-gray-800">
                                    <li ><a className="border-b-2 px-2 py-1 flex border-gray-500" href="#">Internet</a></li>
                                    <li ><a className="border-b-2 px-2 pb-1 flex border-gray-500" href="#">Books</a></li>
                                    <li><a className="px-2 pb-1 flex" href="#">Open Source</a></li>
                                </ul> 
                            : null}
                        </li>
                    </ul>
                    <div className="text-right relative">
                        <input className="bg-search w-full bg-gray-800 text-white pl-8 py-2 rounded-2xl" placeholder="Search" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
