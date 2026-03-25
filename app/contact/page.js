import { generateMetadata } from '@/lib/seo';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import HoursSection from '@/components/HoursSection';
import MapSection from '@/components/MapSection';
import EmergencyBar from '@/components/EmergencyBar';

export const metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Rudra Security. Emergency response within 30 minutes. Call our 24/7 hotline or fill out the contact form.',
  url: '/contact/',
});

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-off border-b border-border relative overflow-hidden">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.188rem] uppercase text-ink3 mb-4">
            <a href="/" className="text-red hover:underline">Home</a>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-ink">
            Get In <em className="text-red not-italic">Touch</em>
          </h1>
          <p className="text-base text-ink3 mt-3 max-w-lg">
            Emergency response within 30 minutes. Our command centre is active 24/7, 365 days a year — reach us any time.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 font-bebas text-[12rem] md:text-[16rem] text-red/5 leading-none pointer-events-none select-none">
          CONTACT
        </div>
      </section>

      <EmergencyBar />
      
      <div className="grid md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
      
      <HoursSection />
      <MapSection />
    </>
  );
}