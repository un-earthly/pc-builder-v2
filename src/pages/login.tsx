import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Image from "next/image"
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = () => {
    };
    const handleGoogleSignIn = async () => {
        try {
            await signIn('google');
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    };
    return (
        <div className="flex items-center justify-center flex-col min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4 text-indigo-500">Login</h1>
            <div className="w-full p-10 max-w-md py-14 bg-white text-black rounded-lg shadow">
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
                        Login
                    </button>
                </form>
                <div className="my-4">
                    <button
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleGoogleSignIn}
                    >
                        Sign In with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
