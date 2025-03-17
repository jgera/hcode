import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Shweta Singla',
    role: 'Co-Founder & CEO',
    education: 'IIT Delhi',
    linkedin: 'https://linkedin.com',
    image: '/images/team/shweta.jpg',
  },
  {
    name: 'Rishabh Garg',
    role: 'Enterprise App Dev Expert | Technical Strategy',
    education: 'IIT Roorkee',
    linkedin: 'https://linkedin.com',
    image: '/images/team/rishabh.jpg',
  },
  {
    name: 'Mudit Sharma',
    role: 'Full-stack Lead | Code Architect',
    education: 'Maharaja University',
    linkedin: 'https://linkedin.com',
    image: '/images/team/mudit.jpg',
  },
  {
    name: 'Shashank Singla',
    role: 'Product Builder | AI Expert',
    education: 'IIT Delhi',
    linkedin: 'https://linkedin.com',
    image: '/images/team/shashank.jpg',
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-700 text-sm mt-1">{member.role}</p>
              <p className="text-gray-500 text-xs mt-1">{member.education}</p>
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/careers"
            className="inline-flex items-center justify-center h-10 px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
          >
            Join the Hcode family
          </Link>
        </div>
      </div>
    </section>
  );
}
