import React from 'react'
import { signIn } from 'next-auth/react';

export default function Social() {

    const handleGoogleSignIn = async () => {
        try {
            await signIn('google');
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    };
    return (
        <div className="my-4">
            <button
                className="w-full bg-teal-500 duration-150 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleGoogleSignIn}
            >
                Sign In with Google
            </button>
        </div>
    )
}
