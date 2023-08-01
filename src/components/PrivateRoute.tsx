import React, { useEffect } from 'react';
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
    const { data: session } = useSession();

    const prevPage = Array.isArray(router.query?.from) ? router.query?.from[0] : router.query?.from || '/';

    useEffect(() => {
        if (!user && !session) {
            router.push(`/login?from=${encodeURIComponent(prevPage)}`);
        }
    }, [user, session]);

    return <div>{children}</div>;
};

export default PrivateRoute;
