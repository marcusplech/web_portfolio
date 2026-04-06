import ExperienceContact from '@/components/ExperienceContact';
import Landing from '@/components/Landing';
import MotionReveal from '@/components/MotionReveal';
import Portfolio from '@/components/Portfolio';
import TechStack from '@/components/TechStack';
import Top from '@/components/Top';

export default function Home() {
  return (
    <main id="main-content" className="main" tabIndex={-1}>
      <MotionReveal>
        <Landing />
      </MotionReveal>
      <MotionReveal delay={0.05}>
        <TechStack />
      </MotionReveal>
      <MotionReveal delay={0.08}>
        <Portfolio />
      </MotionReveal>
      <MotionReveal delay={0.1}>
        <ExperienceContact />
      </MotionReveal>
      <Top />
    </main>
  );
}
