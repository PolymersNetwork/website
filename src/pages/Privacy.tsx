import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

const Privacy = () => {
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
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: January 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, 
                    connect your wallet, participate in recycling activities, or contact us for support. 
                    This may include your wallet address, recycling activity data, location data (when 
                    using IoT bins), and transaction history.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Track and verify recycling activities</li>
                    <li>Calculate and distribute PLY and CRT rewards</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Generate ESG metrics and environmental impact reports</li>
                    <li>Comply with legal obligations and prevent fraud</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">3. Blockchain Data</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Transactions on the Solana and Sui blockchains are public by design. Your wallet 
                    address and transaction history may be publicly visible on blockchain explorers. 
                    While we don't control this data, we take steps to minimize the amount of 
                    personally identifiable information associated with your on-chain activity.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">4. Data Sharing and Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information. We may share information in these cases:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>With your consent or at your direction</li>
                    <li>With service providers who help us operate our platform</li>
                    <li>For legal compliance or to protect rights and safety</li>
                    <li>In connection with business transfers or corporate restructuring</li>
                    <li>Aggregated, anonymized data for research and environmental impact studies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">5. IoT and Location Data</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    When you use our IoT-enabled recycling bins, we collect location and activity data 
                    to verify recycling actions and distribute rewards. This data is encrypted and used 
                    solely for platform functionality. You can opt out of location tracking, though 
                    this may limit certain features.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">6. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures to protect your data, including 
                    encryption, secure servers, and regular security audits. However, no method of 
                    transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">7. Your Rights and Choices</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal data:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Access and portability of your data</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your data (subject to legal obligations)</li>
                    <li>Restriction of processing</li>
                    <li>Withdrawal of consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">8. International Data Transfers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may transfer your data to servers located outside your country. We ensure 
                    appropriate safeguards are in place to protect your data in accordance with 
                    applicable privacy laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">9. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our platform is not intended for users under 18. We do not knowingly collect 
                    personal information from children. If you believe a child has provided us with 
                    personal information, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">10. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this privacy policy periodically. We will notify you of material 
                    changes via email or platform notification. Your continued use of our services 
                    after changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-satoshi font-bold mb-4">11. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this privacy policy or our data practices, 
                    please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-card border border-border rounded-lg">
                    <p className="font-medium">Polymers Data Protection Team</p>
                    <p className="text-muted-foreground">Email: privacy@polymers.net</p>
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

export default Privacy;