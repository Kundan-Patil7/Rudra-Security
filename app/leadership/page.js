import { generateMetadata } from '@/lib/seo';
import LeadershipProfile from '@/components/LeadershipProfile';
import StatsBand from '@/components/StatsBand';
import TimelineSection from '@/components/TimelineSection';
import ValuesSection from '@/components/ValuesSection';
import LeadershipCTA from '@/components/LeadershipCTA';

export const metadata = generateMetadata({
  title: 'Leadership',
  description: 'Meet the leadership team at Rudra Security. Experienced leaders with distinguished defence and corporate backgrounds.',
  url: '/leadership/',
});

const leaders = [
  {
    name: 'Mr. Jayesh Deshmukh',
    role: 'Founder & CEO',
    specialization: 'Industrial Security Specialist',
    bio: [
      'Mr. Jayesh Deshmukh is the visionary force and founder behind Rudra Security Pvt Ltd. With over nine years of deep expertise in industrial security, he is a specialist in risk assessment and crisis management — having built the company from the ground up into one of Maharashtra\'s most respected security firms.',
      'His leadership philosophy of "prevention before reaction" has delivered a zero-breach record across all client sites, and a 98% client retention rate that speaks louder than any credential.',
    ],
    metrics: [
      { num: '9+', label: 'Years Experience' },
      { num: '0', label: 'Security Breaches' },
      { num: '50+', label: 'Personnel Led' },
    ],
    skills: ['Risk Assessment', 'Crisis Management', 'Industrial Security', 'Strategic Planning', 'Leadership'],
    image: '/logos/jayesh.png',
    initial: 'J',
  },
  {
    name: 'Mr. Dipak Vadnere',
    role: 'Directing Manager',
    specialization: 'Strategic Operations Specialist',
    bio: [
      'Mr. Dipak Vadnere is the operational pillar of Rudra Security, overseeing strategic operations, client relations, and personnel training with exceptional precision. His ability to translate strategy into flawless ground-level execution is what keeps clients confident and operations smooth.',
      'His expertise in developing and executing training programmes has produced over 10,000+ man hours of trained security personnel — setting the benchmark for professionalism in the industry.',
    ],
    metrics: [
      { num: '10K+', label: 'Hours Trained' },
      { num: '98%', label: 'Client Retention' },
      { num: '20+', label: 'Clients Managed' },
    ],
    skills: ['Strategic Operations', 'Client Relations', 'Training & Development', 'Quality Control', 'Operations Mgmt'],
    image: '/logos/dipak.png',
    initial: 'D',
    reverse: true,
  },
];

export default function LeadershipPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-off border-b border-border relative overflow-hidden">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.188rem] uppercase text-ink3 mb-4">
            <a href="/" className="text-red hover:underline">Home</a>
            <span>/</span>
            <span>Leadership</span>
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-ink">
            Our Command <em className="text-red not-italic">Centre</em>
          </h1>
          <p className="text-base text-ink3 mt-3 max-w-lg">
            Experienced leaders with distinguished defence and corporate backgrounds — driving Rudra Security's mission of zero-compromise protection.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 font-bebas text-[12rem] md:text-[16rem] text-red/5 leading-none pointer-events-none select-none">
          LEADERSHIP
        </div>
      </section>

      {/* Leaders Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center">The Team</span>
            <h2 className="section-title text-center">
              The <em>Minds</em> Behind The Shield
            </h2>
            <p className="text-base text-ink3 mt-4 leading-relaxed">
              Our leadership combines decades of defence expertise with sharp corporate intelligence — building a security company that truly stands apart.
            </p>
          </div>

          {leaders.map((leader, i) => (
            <LeadershipProfile key={leader.name} {...leader} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <StatsBand />
      <TimelineSection />
      <ValuesSection />
      <LeadershipCTA />
    </>
  );
}