import React, { useState } from 'react'
import { auth, signout } from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSession, signOut } from 'next-auth/react';
export default function Navbar() {
    const [user] = useAuthState(auth);
    const { data: session } = useSession();
    const [btnActv, setBtnActv] = useState(false)
    return (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
            <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                <div className="text-indigo-500 md:order-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                </div>
                <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                    <ul className="flex font-semibold justify-between">
                        <li className="md:px-4 md:py-2 text-indigo-500"><a href="#">Dashboard</a></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Search</a></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Explore</a></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">About</a></li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="order-2 md:order-3">
                    {/* */}
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
                        <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Login</span>
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}
