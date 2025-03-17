'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function NewsletterDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    // Show dialog after 5 seconds
    const timer = setTimeout(() => {
      // Check if user has already seen the dialog
      const hasSeenDialog = localStorage.getItem('hasSeenDialog');
      if (!hasSeenDialog) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    // Store that user has seen the dialog
    localStorage.setItem('hasSeenDialog', 'true');
    // In a real app, we would send this to an API
    console.log('Submitted:', { firstName, email });
    // Close dialog after 2 seconds
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 overflow-hidden max-w-md">
        <div className="relative">
          <Image
            src="/images/hero/hero1.jpg"
            alt="Newsletter banner"
            width={500}
            height={150}
            className="w-full h-[150px] md:h-auto object-cover"
          />
        </div>
        <div className="mx-4 sm:mx-8 mb-6">
          <DialogHeader className="mt-3">
            <DialogTitle className="text-xl lg:text-2xl font-bold">
              Subscribe to our newsletter
            </DialogTitle>
          </DialogHeader>

          {hasSubmitted ? (
            <DialogDescription className="text-center pt-4">
              Thank you for subscribing to our newsletter! We'll keep you updated with the latest news and insights.
            </DialogDescription>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName" className="font-semibold">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-semibold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="mt-5 w-full bg-primary text-white hover:bg-primary/90"
              >
                Subscribe
              </Button>
              <p className="text-center text-gray-700 text-sm md:text-base mt-5">
                We share two monthly newsletters, exploring technology trends from our perspective and around the world.
              </p>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
