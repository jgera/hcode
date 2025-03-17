import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Address */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Hcode Technologies"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Innovative software solutions
            </p>
            <div className="flex space-x-3">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/twitter.svg" alt="Twitter" width={20} height={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-gray-600 hover:text-primary">Home</Link>
              <Link href="/services" className="text-sm text-gray-600 hover:text-primary">Our Services</Link>
              <Link href="/about" className="text-sm text-gray-600 hover:text-primary">Our Work</Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-primary">Contact Us</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold mb-4">Company</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-gray-600 hover:text-primary">About Us</Link>
              <Link href="/careers" className="text-sm text-gray-600 hover:text-primary">Work With Us</Link>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-primary">Terms & Conditions</Link>
            </div>
          </div>

          {/* For Clients */}
          <div>
            <h3 className="text-sm font-bold mb-4">For Clients</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/case-studies" className="text-sm text-gray-600 hover:text-primary">Case Studies</Link>
              <Link href="/blog" className="text-sm text-gray-600 hover:text-primary">Blog</Link>
              <Link href="/resources" className="text-sm text-gray-600 hover:text-primary">Resources</Link>
              <Link href="/faq" className="text-sm text-gray-600 hover:text-primary">FAQ</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold mb-4">Subscribe to our newsletter</h3>
            <div className="flex">
              <Input
                type="email"
                placeholder="Email"
                className="rounded-r-none focus-visible:ring-0 h-10"
              />
              <Button
                type="submit"
                className="rounded-l-none h-10 bg-primary text-white hover:bg-primary/90"
              >
                Send
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>Copyright © {new Date().getFullYear()} Hcode Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built by Same.new</p>
        </div>
      </div>
    </footer>
  );
}
