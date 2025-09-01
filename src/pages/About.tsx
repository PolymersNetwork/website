import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Recycle, Coins, Smartphone, Globe, Zap, TreePine } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Tokenized Recycling",
      description: "Turn your recycling actions into PLY tokens and carbon credits"
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Carbon Credits",
      description: "Earn and trade verified carbon credits (CRT) for environmental impact"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile DePIN",
      description: "IoT-enabled recycling bins and mobile app for seamless tracking"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description: "Join a worldwide network of eco-conscious citizens and businesses"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Gamified Experience",
      description: "Streaks, badges, and leaderboards make sustainability fun"
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "ESG Dashboard",
      description: "Track your environmental impact and ESG compliance metrics"
    }
  ];

  const stats = [
    { value: "1M+", label: "Recycling Actions" },
    { value: "50K+", label: "Active Users" },
    { value: "10M+", label: "PLY Tokens Earned" },
    { value: "5K+", label: "Tons CO2 Offset" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 cosmic-grid">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">
                About Polymers
              </Badge>
              <h1 className="text-4xl md:text-6xl font-satoshi font-bold mb-6 text-balance">
                Our Mission & Vision
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Polymers Network is building a global, gamified recycling ecosystem powered by blockchain, AI, IoT, and DePIN nodes. We make every plastic and e-waste item a verifiable digital asset.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="poly-gradient border-0">
                  Start Recycling
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  View Dashboard
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-satoshi font-bold text-poly-green mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-satoshi font-bold mb-6">
                How Polymers Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our platform combines blockchain technology, IoT sensors, and gamification 
                to create a comprehensive sustainability ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="cosmic-card hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-satoshi font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-satoshi font-bold mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <strong className="text-foreground">Mission:</strong> Transform recycling into a rewarding, tokenized global movement.
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <strong className="text-foreground">Vision:</strong> Bridge the real-world circular economy with Web3 innovation.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We make every plastic and e-waste item a verifiable digital asset, rewarding consumers, supporting corporates, and creating measurable ESG impact through our innovative blockchain-powered platform.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-6xl mb-4">♻️</div>
                  <h3 className="text-lg font-satoshi font-semibold mb-2">Circular Economy</h3>
                  <p className="text-sm text-muted-foreground">
                    Transform waste into value through tokenized recycling
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🌱</div>
                  <h3 className="text-lg font-satoshi font-semibold mb-2">Carbon Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Measure and offset carbon footprint with verified credits
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🤝</div>
                  <h3 className="text-lg font-satoshi font-semibold mb-2">Community Driven</h3>
                  <p className="text-sm text-muted-foreground">
                    Build a global network of environmentally conscious participants
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-satoshi font-bold mb-6">
                  Roadmap
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our journey towards a sustainable future through blockchain innovation
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-poly-green rounded-full"></div>
                  </div>
                  <div className="flex-grow">
                    <Badge variant="secondary" className="mb-2">Q1 2024 - COMPLETED</Badge>
                    <h3 className="text-xl font-satoshi font-semibold mb-2">MVP Launch</h3>
                    <p className="text-muted-foreground">
                      Mobile app MVP, basic recycling tracking, PLY token launch on Solana, initial smart bin deployment
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  <div className="flex-grow">
                    <Badge className="mb-2">Q2 2024 - IN PROGRESS</Badge>
                    <h3 className="text-xl font-satoshi font-semibold mb-2">Platform Dashboard</h3>
                    <p className="text-muted-foreground">
                      Corporate ESG dashboard, DePIN node operations, carbon credit marketplace, NFT rewards system
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-muted-foreground/50 rounded-full"></div>
                  </div>
                  <div className="flex-grow">
                    <Badge variant="outline" className="mb-2">Q3 2024 - PLANNED</Badge>
                    <h3 className="text-xl font-satoshi font-semibold mb-2">Global Expansion</h3>
                    <p className="text-muted-foreground">
                      Multi-chain support (Sui, Base), international partnerships, advanced AI waste detection, staking rewards
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-muted-foreground/30 rounded-full"></div>
                  </div>
                  <div className="flex-grow">
                    <Badge variant="outline" className="mb-2">Q4 2024 - PLANNED</Badge>
                    <h3 className="text-xl font-satoshi font-semibold mb-2">Enterprise Scale</h3>
                    <p className="text-muted-foreground">
                      White-label solutions, disaster relief integrations, donation platform, Apple/Google Wallet support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-satoshi font-bold mb-8">
                Governance
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Polymers Network is governed by its community through decentralized decision-making processes
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="cosmic-card">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                      <Coins className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-satoshi font-semibold mb-4">PLY Token Holders</h3>
                    <p className="text-muted-foreground">
                      Stake PLY tokens to participate in governance proposals, vote on protocol changes, and earn rewards
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="cosmic-card">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-satoshi font-semibold mb-4">DePIN Validators</h3>
                    <p className="text-muted-foreground">
                      Node operators validate recycling events, maintain network security, and participate in governance
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-12">
                <Button size="lg" variant="outline">
                  Join Governance
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;