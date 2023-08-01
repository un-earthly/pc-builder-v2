import React, { useState } from 'react'
import { auth, signout } from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
export default function Navbar() {
    const [user] = useAuthState(auth);
    const { data: session } = useSession();
    const [btnActv, setBtnActv] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
            <div className="md:h-16 p-4 mx-auto md:px-4 container flex flex-col md:flex-row items-center md:justify-between justify-center">
                <Link href="/">
                    <div className="text-indigo-500 flex items-center justify-center md:order-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        <span className='font-semibold'>
                            ZABUILD
                        </span>

                    </div>
                </Link>
                <div className="md:max-w-lg w-full relative flex items-center justify-center order-2" >
                    <button
                        className="text-indigo-700 mx-4 duration-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center"
                    >
                        <Link href="/pc-builder">

                            Pc Builder</Link>
                    </button>

                    <button
                        className="duration-100 text-indigo-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        Categories
                        <svg
                            className={`w-4 h-4 ml-2 ${isOpen ? 'transform rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="bg-white text-base z-50 list-none text-indigo-700 divide-y divide-gray-100 rounded shadow my-4 top-10 absolute" id="dropdown">
                            <ul className="py-1" aria-labelledby="dropdown">
                                <li>
                                    <Link href="/category/cpu" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                                        CPU
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/motherboard" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                                        Motherboard
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/ram" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                                        RAM
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/psu" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                                        Power Supply Unit
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/storage" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                                        Storage
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/monitor" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                                        Monitor
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/others" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                                        Others
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="order-2 md:order-3">
                    {user ? (
                        <div className='flex items-center justify-center flex-col relative '>
                            <div onClick={() => setBtnActv(!btnActv)} className='rounded-full cursor-pointer flex items-center justify-center bg-teal-500 capitalize h-10 w-10'>
                                {user.email?.slice(0, 1)}
                            </div>
                            {
                                btnActv ? <div className='bg-gray-900 top-8 hover:bg-gray-950 duration-100 px-6 py-1  rounded-md mt-4 absolute'>
                                    <button className='text-teal-500 w-20 font-semibold' onClick={() => signout()}>Sign Out</button>
                                </div> : ""
                            }

                        </div>
                    ) : session ? (
                        <div className='flex items-center justify-center flex-col relative '>
                            <div onClick={() => setBtnActv(!btnActv)} className='rounded-full cursor-pointer flex items-center justify-center bg-teal-500 capitalize h-10 w-10'>
                                {session?.user?.email?.slice(0, 1)}
                            </div>
                            {
                                btnActv ? <div className='bg-gray-900 top-8 hover:bg-gray-950 duration-100 px-6 py-1  rounded-md mt-4 absolute'>
                                    <button className='text-teal-500 w-20 font-semibold' onClick={() => signOut()}>Sign Out</button>
                                </div> : ""
                            }

                        </div>
                    ) : (
                        <Link href="/login">
                            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Login</span>
                            </button></Link>
                    )}
                </div>
            </div>
        </nav >
    )
}
