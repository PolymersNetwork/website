import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Heading and description */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground">
            Join the Recycling Revolution Today
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a consumer, recycler, or corporate partner, Polymers Network makes recycling profitable, traceable, and engaging.
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-12 px-8 transition-all duration-200">
            Start Recycling
          </Button>
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200"
          >
            Partner with Us
          </Button>
        </div>

        {/* Small description */}
        <div className="pt-4 text-sm text-muted-foreground">
          Join thousands earning rewards • No fees • Instant token rewards
        </div>
      </div>
    </section>
  );
};

export default CTASection;
