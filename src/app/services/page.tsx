import ServicesSection from "@/components/sections/ServicesSection";

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          We provide a wide range of services to help businesses build and scale their digital products.
          Our team of experts is specialized in various technologies and domains.
        </p>
      </div>
      <ServicesSection />
    </div>
  );
}
