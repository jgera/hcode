import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are?</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-[400px] lg:h-full overflow-hidden rounded-lg">
            <Image
              src="/images/team/shweta.jpg"
              alt="Team Photo"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-gray-700">
              We are a team of experienced developers and designers based in India. We work with
              clients from around the world, helping them build their products from scratch or
              improve existing ones.
            </p>

            <p className="text-gray-700">
              Our developers are selected through a rigorous hiring process. We only hire the top
              1% of the developers to ensure that our clients receive the best possible service and
              expertise in their field.
            </p>

            <p className="text-gray-700">
              We believe in building long-term relationships with our clients. That's why
              we have strong ethical practices that create lasting partnerships with our clients.
              We take the time to understand their business goals and provide tailored solutions.
            </p>

            <div className="flex justify-center md:justify-start pt-4">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Image
                    src="/icons/top-talent.svg"
                    alt="Top Talent"
                    width={48}
                    height={48}
                    className="mx-auto mb-2"
                  />
                  <span className="text-sm font-medium">Top Talent</span>
                </div>
                <div className="text-center">
                  <Image
                    src="/icons/delivery.svg"
                    alt="On-time Delivery"
                    width={48}
                    height={48}
                    className="mx-auto mb-2"
                  />
                  <span className="text-sm font-medium">On-time Delivery</span>
                </div>
                <div className="text-center">
                  <Image
                    src="/icons/best-practices.svg"
                    alt="Best Practices"
                    width={48}
                    height={48}
                    className="mx-auto mb-2"
                  />
                  <span className="text-sm font-medium">Best Practices</span>
                </div>
              </div>
            </div>

            <Button className="bg-primary text-white hover:bg-primary/90 mt-4">
              Read More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
