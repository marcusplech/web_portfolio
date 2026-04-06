import About from '@/components/About';
import CaseStudy from '@/components/CaseStudy';
import ExperienceContact from '@/components/ExperienceContact';
import KeyAchievements from '@/components/KeyAchievements';
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
        <KeyAchievements />
      </MotionReveal>
      <MotionReveal delay={0.08}>
        <About />
      </MotionReveal>
      <MotionReveal delay={0.11}>
        <TechStack />
      </MotionReveal>
      <MotionReveal delay={0.14}>
        <Portfolio />
      </MotionReveal>
      <MotionReveal delay={0.17}>
        <CaseStudy />
      </MotionReveal>
      <MotionReveal delay={0.2}>
        <ExperienceContact />
      </MotionReveal>
      <Top />
    </main>
  );
}
