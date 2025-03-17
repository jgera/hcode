import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A full-featured e-commerce platform with payment integration and inventory management.",
    image: "/images/services/developer.jpg",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure mobile banking application with biometric authentication and transaction tracking.",
    image: "/images/services/team.jpg",
  },
  {
    id: 3,
    title: "Healthcare Management System",
    category: "Enterprise Solutions",
    description: "Comprehensive healthcare management system for hospitals and clinics.",
    image: "/images/services/mvp.jpg",
  },
  {
    id: 4,
    title: "NFT Marketplace",
    category: "Blockchain",
    description: "A marketplace for creating, buying, and selling NFTs with wallet integration.",
    image: "/images/services/blockchain.jpg",
  },
  {
    id: 5,
    title: "IoT Dashboard",
    category: "IoT Solutions",
    description: "Real-time dashboard for monitoring and controlling IoT devices.",
    image: "/images/hero/hero3.jpg",
  },
  {
    id: 6,
    title: "AI-powered Recommendation Engine",
    category: "AI & Machine Learning",
    description: "Recommendation engine that analyzes user behavior to provide personalized suggestions.",
    image: "/images/hero/hero2.jpg",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Work</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          We build innovative solutions for clients across various industries.
          Here are some of the projects we've successfully delivered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <span className="text-sm text-primary font-medium">{item.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link href={`/case-studies/${item.id}`}>
                  <Button variant="outline" className="w-full mt-2">
                    View Case Study
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Want to work with us?</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            We're always looking for new challenges and exciting projects.
            Get in touch with us to discuss your next big idea.
          </p>
          <Link href="/contact">
            <Button className="bg-primary text-white hover:bg-primary/90">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
