import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PieChart, BarChart, TrendingUp, Users, Coins, Target } from 'lucide-react';

const Tokenomics = () => {
  const tokenDistribution = [
    { category: 'Community Rewards', percentage: 30, color: 'bg-poly-green', amount: '300M PLY' },
    { category: 'Ecosystem Development', percentage: 25, color: 'bg-carbon-blue', amount: '250M PLY' },
    { category: 'Team & Advisors', percentage: 15, color: 'bg-token-gold', amount: '150M PLY' },
    { category: 'Partnership & Marketing', percentage: 15, color: 'bg-primary', amount: '150M PLY' },
    { category: 'Treasury Reserve', percentage: 10, color: 'bg-secondary', amount: '100M PLY' },
    { category: 'Liquidity Pool', percentage: 5, color: 'bg-accent', amount: '50M PLY' }
  ];

  const tokenMetrics = [
    { label: 'Total Supply', value: '1,000,000,000 PLY', icon: Coins },
    { label: 'Circulating Supply', value: '150,000,000 PLY', icon: TrendingUp },
    { label: 'Market Cap', value: 'TBD at TGE', icon: Target },
    { label: 'Token Type', value: 'SPL Token (Solana)', icon: Users }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-satoshi font-bold mb-4">
              PLY Tokenomics
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understand the economic model behind Polymers Network's native token and its role in creating a sustainable recycling ecosystem.
            </p>
          </div>

          {/* Token Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tokenMetrics.map((metric, index) => (
              <Card key={index} className="cosmic-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <metric.icon className="w-4 h-4 text-primary" />
                    {metric.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-satoshi font-bold text-foreground">
                    {metric.value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Token Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-primary" />
                  Token Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {tokenDistribution.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.category}</span>
                      <span className="text-sm text-muted-foreground">{item.amount}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={item.percentage} className="h-2 flex-1" />
                      <span className="text-sm font-medium w-10">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-primary" />
                  Utility & Use Cases
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Recycling Rewards</h4>
                    <p className="text-sm text-muted-foreground">
                      Earn PLY tokens for verified recycling activities through IoT-enabled smart bins
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Staking & Governance</h4>
                    <p className="text-sm text-muted-foreground">
                      Stake PLY to participate in protocol governance and earn additional rewards
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Marketplace Payments</h4>
                    <p className="text-sm text-muted-foreground">
                      Use PLY to purchase eco-products, carbon credits, and premium features
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">DePIN Node Operations</h4>
                    <p className="text-sm text-muted-foreground">
                      Operators stake PLY to run validation nodes and earn network fees
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <Card className="cosmic-card border-yellow-500/20 bg-yellow-500/5">
            <CardHeader>
              <CardTitle className="text-yellow-600 dark:text-yellow-400">
                ⚠️ Token Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                PLY tokens are utility tokens designed for use within the Polymers Network ecosystem. 
                They are not investment securities and should not be purchased for speculative purposes. 
                Token distribution and economics are subject to change based on network governance decisions. 
                Please conduct your own research and understand the risks before participating.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tokenomics;