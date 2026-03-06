import { Hero } from '@/components/home/Hero';
import { SocialProof } from '@/components/home/SocialProof';
import { ProblemSolution } from '@/components/home/ProblemSolution';
import { ProductSnapshot } from '@/components/home/ProductSnapshot';
import { HowItWorks } from '@/components/home/HowItWorks';
import { IndustrySolutions } from '@/components/home/IndustrySolutions';
import { Stats } from '@/components/home/Stats';
import { Compliance } from '@/components/home/Compliance';
import { constructMetadata } from '@/seo/metadata';

export const metadata = constructMetadata({
  title: 'RocketFuel | Global Crypto Payments & Commerce Solutions',
  description: 'Future-proof your business with reliable crypto payment processing, high-speed global payouts, B2B invoicing, and Web3 loyalty networks.',
});

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
