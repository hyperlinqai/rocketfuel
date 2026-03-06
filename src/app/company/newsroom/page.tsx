import { Metadata } from 'next';
import NewsroomClient from './NewsroomClient';

export const metadata: Metadata = {
    title: 'RocketFuel Newsroom | Press Releases, Media Coverage, and Company Updates',
    description: 'Stay up to date with RocketFuel\'s latest press releases, product launches, and media features as we reshape global payments through crypto, stablecoins, and fintech innovation.',
};

export default function NewsroomPage() {
    return <NewsroomClient />;
}
