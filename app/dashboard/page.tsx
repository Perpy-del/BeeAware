'use client';

import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';

type Props = {};

const DashboardPage = (props: Props) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        router.push('/auth/login'); // Redirect to login page if user is not signed in
      }
    });

    return () => unsubscribe();
  }, [router]);

  return user ? <div>DashboardPage</div> : null;
};

export default DashboardPage;
