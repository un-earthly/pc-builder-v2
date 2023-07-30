import { useState } from 'react';
import { auth } from '../../firebase.config';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router'
import Social from '@/components/Social';
import Image from "next/image"

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (typeof window !== 'undefined') {
        const referrer = document.referrer;
        sessionStorage.setItem('loginReferrer', referrer);
    }

    const handleSignup = async () => {
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }



        createUserWithEmailAndPassword(email, password);

        if (user) {
            const loginReferrer = sessionStorage.getItem('loginReferrer');

            if (loginReferrer) {
                sessionStorage.removeItem('loginReferrer');
                router.push(loginReferrer);
            } else {
                router.push('/');
            }
        }

    };
    if (error) {
        return (
            <div className="flex items-center justify-center flex-col min-h-screen text-red-500 lg:text-3xl  bg-gray-100">
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <div className="flex items-center justify-center flex-col min-h-screen text-teal-500 lg:text-3xl  bg-gray-100">
            <p>Loading...</p>
        </div>
    }
    return (
        <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl text-indigo-500 font-bold mb-4">Signup</h1>
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
                        className="w-full bg-indigo-500 hover:bg-indigo-600 duration-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleSignup}
                    >
                        Signup
                    </button>
                </form>
                <Social />
            </div>
        </div>
    );
};

export default SignupPage;
