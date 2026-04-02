import Landing from '@/components/Landing';
import Portfolio from '@/components/Portfolio';
import TechStack from '@/components/TechStack';
import Top from '@/components/Top';

export default function Home() {
  return (
    <main className="main">
      <Landing />
      <TechStack />
      <Portfolio />
      <Top />
    </main>
  );
}
