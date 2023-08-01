import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSession } from 'next-auth/react';
import { auth } from '../../firebase.init';
import { useRouter } from 'next/router';

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const router = useRouter();
    const [user] = useAuthState(auth);
    const { data: session, status: sessionStatus } = useSession();

    const [loading, setLoading] = useState(true);
    const [redirecting, setRedirecting] = useState(false);

    const prevPage = Array.isArray(router.query?.from) ? router.query?.from[0] : router.query?.from || '/';

    useEffect(() => {
        if (user || session) {
            setLoading(false);
        } else if (sessionStatus === 'unauthenticated') {
            setLoading(false);
            setRedirecting(true);
        }
    }, [user, session, sessionStatus]);

    useEffect(() => {
        if (!loading && redirecting) {
            router.push(`/login?from=${encodeURIComponent(prevPage)}`);
        }
    }, [loading, redirecting, router, prevPage]);

    if (loading || redirecting) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold mb-4">Loading...</h1>
                    <p className="text-gray-500">Please wait while we check your authentication status.</p>
                </div>
            </div>
        );
    }

    return <div>{children}</div>;
};

export default PrivateRoute;
