import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Recycling has never been this rewarding. I earn tokens, track my eco-impact, and compete with friends! The gamification makes sustainability fun.",
      author: "Emma Wilson",
      position: "Environmental Enthusiast",
      avatar: "bg-primary/30"
    },
    {
      quote: "Polymers Network gave us traceable ESG data and tokenized carbon credits, making compliance effortless. Our sustainability reporting is now automated.",
      author: "David Chen",
      position: "Sustainability Director at EcoTech",
      avatar: "bg-primary/20"
    },
    {
      quote: "Operating a DePIN node was simple, and staking rewards make sustainability profitable for our community. We're earning while helping the environment.",
      author: "Maria Rodriguez",
      position: "Community Node Operator",
      avatar: "bg-primary/40"
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            What Our Users & Partners Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of users and businesses transforming recycling into rewards
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
            >
              {/* Rating stars */}
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1">★</span>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-lg mb-8 text-foreground/90 italic">
                "{testimonial.quote}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full ${testimonial.avatar} bg-muted`}></div>
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
