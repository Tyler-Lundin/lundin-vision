import { Hero } from '@/components/home/hero';
import DoctorShowcase from '@/components/doctor/DoctorShowcase';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import InsuranceInfo from '@/components/home/InsuranceInfo';
import LocationHours from '@/components/home/LocationHours';
import PatientResources from '@/components/home/PatientResources';

export const metadata = {
  title: 'Expert Eye Care Services',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <DoctorShowcase doctorId="bruce-lundin" />
      <ServicesOverview />
      <WhyChooseUs />
      <InsuranceInfo />
      <LocationHours />
      <PatientResources />
    </>
  );
} 