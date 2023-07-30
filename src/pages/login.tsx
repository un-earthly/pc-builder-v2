import { useState } from 'react';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth } from '../../firebase.init';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from "next/image"
import Social from '@/components/Social';
import { signIn } from 'next-auth/react';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const router = useRouter()

    if (typeof window !== 'undefined') {
        const referrer = document.referrer;
        sessionStorage.setItem('loginReferrer', referrer);
    }


    if (error) {
        return (
            <div className="flex items-center justify-center flex-col min-h-screen text-red-500 lg:text-3xl  bg-gray-100">
                <p>Error: {error.message}</p>
                <button className="px-10 py-2 bg-indigo-500 hover:bg-indigo-600 duration-100 text-white mt-3 text-base rounded-full " >
                    <Link href="/signup">Sign Up</Link></button>
            </div>
        );
    }
    if (loading) {
        return <div className="flex items-center justify-center flex-col min-h-screen text-teal-500 lg:text-3xl  bg-gray-100">
            <p>Loading...</p>
        </div>
    }
    const handleLogin = () => {
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        signInWithEmailAndPassword(email, password);

        if (user) {
            console.log(user)
            const loginReferrer = sessionStorage.getItem('loginReferrer');
            if (loginReferrer) {
                sessionStorage.removeItem('loginReferrer');
                router.push(loginReferrer);
            } else {
                router.push('/');
            }
        }


    };
    return (
        <div className="flex items-center justify-center flex-col min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4 text-indigo-500">Login</h1>
            <div className="w-full p-10 max-w-md pt-14 pb-7 bg-white text-black rounded-lg shadow">
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded focus:outline-none focus:shadow-outline"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded focus:outline-none focus:shadow-outline"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-10 transform focus:outline-none"
                            onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
                        >
                            {showPassword ? (
                                <Image height={20} width={20} alt="Eye" src={"/eye.svg"} />
                            ) : (
                                <Image height={20} width={20} alt="Eye-slash.svg" src={"/eye-slash.svg"} />

                            )}
                        </button>
                    </div>
                    <button
                        className="w-full bg-indigo-500 hover:bg-indigo-600 transition duration-150 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleLogin}
                    >
                        {!loading ? "Login" : "Loading..."}
                    </button>
                </form>
                <Social />
            </div>
        </div>
    );
};

export default LoginPage;
