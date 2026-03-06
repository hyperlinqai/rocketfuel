import { Metadata } from 'next';
import PressCoverageClient from './PressCoverageClient';

export const metadata: Metadata = {
    title: 'Press Coverage | RocketFuel Media Features and Articles',
    description: 'Comprehensive collection of RocketFuel\'s media coverage across leading financial and technology publications.',
};

export default function PressCoveragePage() {
    return <PressCoverageClient />;
}
