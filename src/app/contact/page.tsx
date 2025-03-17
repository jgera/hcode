import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Have a question or want to work with us? Feel free to get in touch!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us about your project or inquiry..."
                  required
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Corporate Headquarters</h3>
                <p className="text-gray-700">
                  Karnal, Haryana, India
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-700">hello@hcode.tech</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-700">+91 1234567890</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Global Presence</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>New York, USA</li>
                  <li>Chicago, USA</li>
                  <li>Berlin, Germany</li>
                  <li>Singapore</li>
                  <li>Sydney, Australia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
