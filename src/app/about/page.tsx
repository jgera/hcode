import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Hcode</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          We're in the business of writing great code. We provide on-time delivery along with transparent communication.
          But we also make sure that our people have great work-life balance, meritocracy, and a healthy work environment.
        </p>

        <div className="relative h-[300px] rounded-lg overflow-hidden mt-12 mb-16">
          <Image
            src="/images/team/shweta.jpg"
            alt="Hcode Team"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">It all started in 2018</h2>
            <p className="text-gray-700 mb-4">
              Our founder, Shweta Singla, was working in New York when she decided to move to India to do something meaningful. When she came back, she realized that at the grass-root level people were extremely talented and motivated.
            </p>
            <p className="text-gray-700">
              She saw that there are plenty of talented engineers who, if given the right mentoring and guidance, can be turned into professional developers that clients love to work with.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">and today,</h2>
            <p className="text-gray-700 mb-4">
              We're a team of 50+ developers and designers. Our developers are selected through a rigorous process and shaped through a hands-on training program. We've shaped quality code for over 50 clients to date.
            </p>
            <p className="text-gray-700">
              We've built strong ethical relationships with our clients that they stay with us for the long term. Some come back to us on repeat projects, which is the ultimate compliment!
            </p>
          </div>
        </div>
      </div>

      <AboutSection />
      <TeamSection />

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our corporate office is located in Karnal, India</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          But we extend our development teams to locations throughout the globe to ensure the highest level of convenience and satisfaction for our clients.
        </p>
        <div className="relative h-[300px] rounded-lg overflow-hidden mt-12">
          <Image
            src="/images/services/developer.jpg"
            alt="Hcode Office"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
