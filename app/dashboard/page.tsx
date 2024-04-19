'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';

type Props = {}

const DashboardPage = (props: Props) => {
  const router = useRouter();

  const [user] = useAuthState(auth);
  const userSession = JSON.parse(sessionStorage.getItem('user') as string)

  if (!user && !userSession) router.push('/auth/login');
  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage