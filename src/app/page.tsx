import dynamic from 'next/dynamic';

import Spinner from '@/assets/spinner/Spinner';

const Home = dynamic(() => import('@/components/Home/Home'), {
  loading: () => <Spinner />,
});

export default function Page() {
  return <Home />;
}
