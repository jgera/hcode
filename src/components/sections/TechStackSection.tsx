import Image from 'next/image';

export default function TechStackSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="max-w-2xl mx-auto">
            We work with a variety of technologies to build scalable and efficient solutions for our clients. Our team is proficient in multiple tech stacks and constantly keeps up with the latest trends in the industry.
          </p>
        </div>

        <div className="relative">
          <Image
            src="/images/tech-stack.png"
            alt="Technology Stack"
            width={1000}
            height={300}
            className="mx-auto"
          />
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">How to start partnering with us</h3>
          <p className="max-w-2xl mx-auto mb-8">
            Have a project in mind? Let's talk! Schedule a call with our team to discuss your requirements and how we can help.
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 font-medium py-2.5 px-6 rounded-md transition-colors">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
}
