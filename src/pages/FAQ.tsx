import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { X } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I earn tokens?",
      answer: "Scan items in our smart bins or verified recycling hubs. Rewards (RECO, CRT, PLY) are issued via blockchain for each verified recycling action based on material type and quantity."
    },
    {
      question: "What is RECO?",
      answer: "RECO is a reward token used within the Polymers Network ecosystem to incentivize verified recycling. Users earn RECO by recycling items at smart bins or hubs, and it can be staked, traded, or converted to other ecosystem credits."
    },
    {
      question: "What is PLY?",
      answer: "PLY is the native utility token of the Polymers Network, used for staking, governance, marketplace payments, and DePIN node operations. Users earn PLY through participation and ecosystem activities."
    },
    {
      question: "Can corporates track ESG impact?",
      answer: "Yes, the corporate dashboard provides real-time recycling metrics, tokenized carbon credits, and compliance reporting with transparent, blockchain-verified data for ESG goals."
    },
    {
      question: "How is recycling verified?",
      answer: "Through multi-factor Proof-of-Recycling (PoR) – NFC/QR scanning, weight sensors, geolocation, hardware signatures, timestamps, and AI contamination detection ensure authentic recycling."
    },
    {
      question: "What is DePIN?",
      answer: "Decentralized Physical Infrastructure Nodes verify recycling events and earn staking rewards for uptime and validation, creating a community-secured recycling verification network."
    },
    {
      question: "Can I trade NFTs or tokens?",
      answer: "Yes, NFTs and tokens including PLY, RECO, and CRT can be staked for rewards, traded on supported exchanges, or converted into ESG/CRT credits for environmental impact and compliance reporting."
    },
    {
      question: "Is there a mobile app?",
      answer: "Yes! Our mobile dApp supports iOS and Android with Solana wallet integration, recycling tracking, gamified leaderboards, and Wayfinder maps for nearby smart bins."
    },
    {
      question: "What wallets are supported?",
      answer: "We support Phantom, Solflare, and Backpack for Solana; Sui Wallet for Sui blockchain; MetaMask for Ethereum; plus Apple Pay, Google Pay, and Base Smart Wallet for seamless transactions."
    },
    {
      question: "How does gamification work?",
      answer: "Earn points for recycling streaks, unlock eco-badges for milestones, compete on leaderboards, and participate in community challenges. More participation means higher rewards and recognition."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept PLY, USDC, SOL, and CRT tokens through connected wallets, plus traditional payments via Apple Pay, Google Pay, and integrated payment processors for maximum convenience."
    },
    {
      question: "How do I get started?",
      answer: "Connect your wallet (or create one), find nearby smart bins using our Wayfinder app, scan recyclable items to earn PLY and RECO tokens, and explore staking and marketplace features."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 cosmic-grid">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Badge variant="secondary" className="mb-6">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-satoshi font-bold mb-6 text-balance flex justify-center items-center gap-2">
              Everything You Need to Know About 
              <span className="poly-gradient bg-clip-text text-transparent"> Polymers</span>
              <X className="w-6 h-6 text-muted-foreground cursor-pointer" />
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions about our tokenized recycling platform, 
              DePIN network, and sustainability ecosystem.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="cosmic-card px-6 py-2 border border-border rounded-lg"
                >
                  <AccordionTrigger className="text-left font-satoshi font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl font-satoshi font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-muted-foreground mb-8">
              Participate in discussions, stay updated on network progress, and engage with other eco-conscious users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/polymers"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:border-primary/30 transition-colors"
              >
                Join Discord
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
