import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layers, Grid3x3, LayoutDashboard, ListCheck, Star, BookOpen } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  expandedDescription: string;
  icon: JSX.Element;
}

const Features: React.FC = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);

  const features: Feature[] = [
    {
      title: "Smart Recycling Bins",
      description: "IoT-enabled bins with NFC/QR scanning, AI-assisted contamination detection, and multi-factor Proof-of-Recycling (PoR).",
      expandedDescription: "Our smart bins feature advanced sensors, real-time monitoring, and AI-powered contamination detection. Each recycling action is verified through multiple factors including NFC/QR codes, weight sensors, geolocation, and timestamp verification for maximum accuracy.",
      icon: <Layers size={24} className="text-primary" />
    },
    {
      title: "Tokenized Rewards",
      description: "Earn RECO, PLY, and CRT tokens for verified recycling, loyalty streaks, and eco-contributions.",
      expandedDescription: "Every verified recycling action earns you tokens on the blockchain. Build loyalty streaks for bonus rewards, participate in community challenges, and convert your environmental impact into valuable digital assets that can be staked or traded.",
      icon: <Grid3x3 size={24} className="text-primary" />
    },
    {
      title: "Gamified Engagement",
      description: "Leaderboards, eco-badges, Wayfinder maps, and community challenges drive participation and fun.",
      expandedDescription: "Compete with friends and communities through dynamic leaderboards. Unlock rare eco-badges for achievements, discover nearby recycling opportunities with our Wayfinder maps, and participate in seasonal challenges for exclusive rewards.",
      icon: <LayoutDashboard size={24} className="text-primary" />
    },
    {
      title: "Corporate ESG & Carbon Credits",
      description: "Traceable recycling data, tokenized ESG & CRT credits, and compliance reporting for businesses.",
      expandedDescription: "Businesses get comprehensive ESG tracking with verified data, automated compliance reporting, and tokenized carbon credits. Track your company's environmental impact in real-time and meet sustainability goals with transparent, blockchain-verified metrics.",
      icon: <ListCheck size={24} className="text-primary" />
    },
    {
      title: "Decentralized Validation (DePIN)",
      description: "Community and corporate-operated nodes verify recycling events, earning staking rewards while securing the network.",
      expandedDescription: "Join our decentralized physical infrastructure network as a node operator. Validate recycling events in your area, earn staking rewards, and help secure the global recycling verification network while contributing to environmental sustainability.",
      icon: <Star size={24} className="text-primary" />
    },
    {
      title: "Analytics & Dashboard",
      description: "Real-time dashboards, predictive insights, and recycling trend visualizations for consumers and corporates.",
      expandedDescription: "Access comprehensive analytics through our intuitive dashboard. Track personal recycling impact, view predictive insights for optimal recycling times, and analyze trends to maximize your environmental contribution and token rewards.",
      icon: <BookOpen size={24} className="text-primary" />
    }
  ];

  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Why Polymers?
          </h2>
          <p className="text-muted-foreground text-lg">
            Revolutionary blockchain-powered recycling ecosystem that rewards environmental action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${
                      openFeature === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-cosmic-muted">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-cosmic-muted">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-cosmic-accent hover:text-cosmic-accent/80 text-sm font-medium">
                      Learn more →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
