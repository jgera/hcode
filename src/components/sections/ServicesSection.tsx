import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'developer',
    title: 'Developer as a Service',
    description: 'If your team has the right tech leadership but need additional developers to complete your product deliverables, our dedicated developers can join your team remotely.',
    image: '/images/services/developer.jpg',
    link: '/services/developer-as-service',
  },
  {
    id: 'team',
    title: 'Team as a Service',
    description: 'Need a team headed by a Tech Lead or a Project Manager? We have well defined processes to onboard the right people, and create effective teams for your product.',
    image: '/images/services/team.jpg',
    link: '/services/team-as-service',
  },
  {
    id: 'mvp',
    title: 'MVP Development Services',
    description: 'Have an idea you need to quickly turn into a product? We can execute your MVP without worrying about the technical details of your product.',
    image: '/images/services/mvp.jpg',
    link: '/services/mvp-development',
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development Services',
    description: 'We can help you with developing smart contracts and integrating with existing blockchain technologies like Bitcoin, Ethereum, and more.',
    image: '/images/services/blockchain.jpg',
    link: '/services/blockchain-development',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end development services from idea to deployment, with a focus on quality and timely delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold px-4 text-center">
                    {service.title}
                  </h3>
                </div>
              </div>
              <CardContent className="pt-6 pb-4">
                <p className="text-gray-700">
                  {service.description}
                </p>
              </CardContent>
              <CardFooter>
                <Link href={service.link} className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-primary hover:text-primary/90 hover:bg-gray-50 p-0"
                  >
                    Know More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
