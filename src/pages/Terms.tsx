import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-6">
                Legal
              </Badge>
              <h1 className="text-4xl md:text-5xl font-satoshi font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-muted-foreground">
                Last updated: January 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using the Polymers platform, mobile application, or related services, 
                    you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                    If you do not agree with any of these terms, you are prohibited from using our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">2. Description of Service</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Polymers is a Decentralized Physical Infrastructure Network (DePIN) platform that 
                    tokenizes recycling activities and environmental actions. Users can earn PLY tokens 
                    and Carbon Credits (CRT) through verified recycling activities, participate in 
                    staking, and trade on our marketplace.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">3. User Eligibility</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To use our services, you must:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Be at least 18 years of age</li>
                    <li>Have the legal capacity to enter into contracts</li>
                    <li>Not be prohibited from using our services under applicable law</li>
                    <li>Provide accurate and complete registration information</li>
                    <li>Maintain a compatible cryptocurrency wallet</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">4. Token Usage and Risks</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    PLY and CRT tokens are utility tokens, not securities or investments. Key considerations:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Token values may fluctuate significantly</li>
                    <li>No guarantee of profits or returns</li>
                    <li>Blockchain transactions are irreversible</li>
                    <li>Smart contract risks and potential technical issues</li>
                    <li>Regulatory uncertainty in various jurisdictions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">5. Recycling Verification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Recycling activities are verified through our IoT sensor network and smart contracts. 
                    Attempting to game the system, provide false data, or manipulate verification mechanisms 
                    is strictly prohibited and may result in account suspension and forfeiture of rewards.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">6. Platform Fees</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our platform charges fees for certain services:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>0.2% fee on marketplace transactions</li>
                    <li>Standard blockchain network fees</li>
                    <li>Potential fees for premium features or services</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Fees are clearly disclosed before transactions and may change with notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">7. Prohibited Activities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You agree not to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Manipulate recycling verification systems</li>
                    <li>Create multiple accounts to exploit rewards</li>
                    <li>Engage in money laundering or terrorist financing</li>
                    <li>Distribute malware or conduct cyber attacks</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Engage in market manipulation or fraud</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">8. Account Suspension and Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to suspend or terminate accounts that violate these terms, 
                    engage in prohibited activities, or pose risks to our platform or users. 
                    Account holders will receive notice when possible, though immediate action 
                    may be necessary in severe cases.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">9. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Polymers platform, including its software, design, content, and trademarks, 
                    is owned by Polymers and protected by intellectual property laws. Users receive 
                    a limited license to use our platform according to these terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">10. Privacy and Data Protection</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your use of our platform is also governed by our Privacy Policy, which is 
                    incorporated into these terms by reference. We collect and process data 
                    necessary for platform functionality while respecting user privacy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">11. Disclaimers and Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our platform is provided "as is" without warranties. We are not liable for 
                    losses resulting from platform use, token value fluctuations, smart contract 
                    failures, or third-party actions. Users assume all risks associated with 
                    cryptocurrency and DeFi activities.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">12. Indemnification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Users agree to indemnify and hold harmless Polymers from any claims, damages, 
                    or expenses arising from their use of the platform, violation of these terms, 
                    or infringement of any rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">13. Governing Law and Disputes</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms are governed by [Jurisdiction] law. Disputes will be resolved 
                    through binding arbitration, except where prohibited by law. Users waive 
                    rights to jury trials and class action lawsuits.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">14. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may modify these terms at any time. Material changes will be communicated 
                    via email or platform notification. Continued use after changes constitutes 
                    acceptance of updated terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">15. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these terms, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-card border border-border rounded-lg">
                    <p className="font-medium">Polymers Legal Team</p>
                    <p className="text-muted-foreground">Email: legal@polymers.net</p>
                    <p className="text-muted-foreground">Address: [Company Address]</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;