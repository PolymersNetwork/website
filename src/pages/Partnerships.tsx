import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Globe, Smartphone } from 'lucide-react';

const Partnerships = () => {
  const partners = [
    {
      category: "Solana Ecosystem",
      partners: [
        { name: "Solana Foundation", description: "Core blockchain infrastructure and developer grants", icon: "◎" },
        { name: "Phantom", description: "Primary wallet integration for seamless user experience", icon: "👻" },
        { name: "Magic Eden", description: "NFT marketplace integration for carbon credit trading", icon: "🎨" },
        { name: "Solana Pay", description: "Instant, low-cost payments with USDC and SPL tokens", icon: "💳" },
      ]
    },
    {
      category: "DePIN & IoT",
      partners: [
        { name: "Helium Network", description: "IoT connectivity for recycling bin sensors", icon: "📡" },
        { name: "Hivemapper", description: "Decentralized mapping for recycling location discovery", icon: "🗺️" },
        { name: "IoTeX", description: "Secure IoT device identity and data verification", icon: "🔐" },
        { name: "Raspberry Pi Foundation", description: "Edge computing devices for bin monitoring", icon: "🍓" },
      ]
    },
    {
      category: "Environmental & Impact",
      partners: [
        { name: "Verra", description: "Verified Carbon Standard (VCS) credit certification", icon: "✅" },
        { name: "Climate Action Reserve", description: "Carbon offset protocol development", icon: "🌿" },
        { name: "UN Global Compact", description: "SDG alignment and impact measurement", icon: "🌍" },
        { name: "Ocean Cleanup", description: "Plastic waste prevention partnership", icon: "🌊" },
      ]
    },
    {
      category: "Payment & Finance",
      partners: [
        { name: "Circle (USDC)", description: "Stable currency for platform transactions", icon: "⭕" },
        { name: "Stripe", description: "Traditional payment processing integration", icon: "💰" },
        { name: "Apple Pay", description: "Mobile payment convenience", icon: "🍎" },
        { name: "Google Pay", description: "Android payment integration", icon: "🤖" },
      ]
    }
  ];

  const capabilities = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Low-Cost Transactions",
      description: "Solana's high throughput enables micro-transactions for every recycling action"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Impact",
      description: "IoT sensors and blockchain provide transparent, tamper-proof recycling verification"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scale",
      description: "DePIN network scales globally with local IoT infrastructure partnerships"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First",
      description: "Seamless mobile experience with integrated wallet and payment solutions"
    }
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
                Strategic Partnerships
              </Badge>
              <h1 className="text-4xl md:text-6xl font-satoshi font-bold mb-6 text-balance">
                Building the Future of 
                <span className="poly-gradient bg-clip-text text-transparent"> Sustainable DePIN</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Our ecosystem thrives through strategic partnerships with leading blockchain protocols, 
                IoT infrastructure providers, environmental organizations, and payment platforms.
              </p>
              <Button size="lg" className="poly-gradient border-0">
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {capability.icon}
                  </div>
                  <h3 className="font-satoshi font-semibold mb-2">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-satoshi font-bold mb-6">
                Our Partner Ecosystem
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Working with industry leaders to create a comprehensive platform for 
                tokenized sustainability and environmental impact.
              </p>
            </div>
            
            <div className="space-y-12">
              {partners.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-satoshi font-bold mb-6 text-center">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.partners.map((partner, partnerIndex) => (
                      <Card key={partnerIndex} className="cosmic-card hover:border-primary/30 transition-colors">
                        <CardContent className="p-6 text-center">
                          <div className="text-4xl mb-4">{partner.icon}</div>
                          <h4 className="font-satoshi font-semibold mb-3">
                            {partner.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {partner.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-satoshi font-bold mb-8">
                Why Partner With Polymers?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-lg font-satoshi font-semibold mb-2">Growing Market</h3>
                  <p className="text-sm text-muted-foreground">
                    Join the rapidly expanding $50B+ carbon credit and $1T+ sustainability market
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🔗</div>
                  <h3 className="text-lg font-satoshi font-semibold mb-2">Network Effects</h3>
                  <p className="text-sm text-muted-foreground">
                    Benefit from our growing ecosystem of users, businesses, and IoT infrastructure
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">💡</div>
                  <h3 className="text-lg font-satoshi font-semibold mb-2">Innovation Leader</h3>
                  <p className="text-sm text-muted-foreground">
                    Pioneer the intersection of DePIN, sustainability, and tokenized incentives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-satoshi font-bold mb-6">
                Ready to Build Together?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join our ecosystem of partners working to tokenize sustainability and 
                create positive environmental impact through blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="poly-gradient border-0">
                  Partnership Inquiry
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  View Integration Docs
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

export default Partnerships;