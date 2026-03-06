import { Hero } from '@/components/home/Hero';
import { SocialProof } from '@/components/home/SocialProof';
import { ProblemSolution } from '@/components/home/ProblemSolution';
import { ProductSnapshot } from '@/components/home/ProductSnapshot';
import { HowItWorks } from '@/components/home/HowItWorks';
import { IndustrySolutions } from '@/components/home/IndustrySolutions';
import { Stats } from '@/components/home/Stats';
import { Compliance } from '@/components/home/Compliance';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <ProductSnapshot />
      <HowItWorks />
      <IndustrySolutions />
      <Stats />
      <Compliance />
    </div>
  );
}
