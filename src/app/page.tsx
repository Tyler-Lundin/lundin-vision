import BruceLundin from '@/components/doctor/BruceLundin';
import { Hero } from '@/components/home/hero';
import DoctorShowcase from '@/components/doctor/DoctorShowcase';

export const metadata = {
  title: 'Expert Eye Care Services',
};

export default function HomePage() {
  return (
    <>
    <Hero />
    <DoctorShowcase doctorId="bruce-lundin" />
    </>
  );
} 