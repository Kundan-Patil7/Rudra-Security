import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import MarqueeStrip from '@/components/MarqueeStrip';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}