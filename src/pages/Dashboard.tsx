import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Recycle, 
  Coins, 
  TreePine, 
  Target, 
  TrendingUp, 
  Award,
  Leaf,
  Zap
} from 'lucide-react';
import { formatTokenAmount, formatCarbonCredits, formatESGScore } from '@/lib/format';

const Dashboard = () => {
  // Mock user data
  const userData = {
    polyBalance: 1250.75,
    crtBalance: 89.25,
    esgScore: 8.5,
    recyclingStreak: 12,
    totalRecycled: 45.2, // kg
    carbonOffset: 2.8, // tons
    level: 3,
    nextLevelProgress: 75,
  };

  const recentActivities = [
    { type: 'recycle', action: 'Recycled 5 plastic bottles', poly: 15, time: '2 hours ago' },
    { type: 'stake', action: 'Staked 100 PLY tokens', poly: 0, time: '1 day ago' },
    { type: 'reward', action: 'Weekly challenge completed', poly: 50, time: '3 days ago' },
    { type: 'purchase', action: 'Bought carbon offset', crt: 10, time: '1 week ago' },
  ];

  const achievements = [
    { name: 'First Recycler', icon: '🏆', unlocked: true },
    { name: 'Streak Master', icon: '🔥', unlocked: true },
    { name: 'Carbon Hero', icon: '🌱', unlocked: true },
    { name: 'Community Leader', icon: '👑', unlocked: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-satoshi font-bold mb-2">
              Welcome to Your ESG Dashboard
            </h1>
            <p className="text-muted-foreground">
              Track your environmental impact and token earnings
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="cosmic-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Coins className="w-4 h-4 text-poly-green" />
                  PLY Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-satoshi font-bold text-poly-green">
                  {formatTokenAmount(userData.polyBalance)}
                </div>
                <p className="text-xs text-muted-foreground">
                  +12.5% from last week
                </p>
              </CardContent>
            </Card>

            <Card className="cosmic-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <TreePine className="w-4 h-4 text-carbon-blue" />
                  Carbon Credits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-satoshi font-bold text-carbon-blue">
                  {formatCarbonCredits(userData.crtBalance)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {userData.carbonOffset}T CO₂ offset
                </p>
              </CardContent>
            </Card>

            <Card className="cosmic-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Target className="w-4 h-4 text-token-gold" />
                  ESG Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-satoshi font-bold text-token-gold">
                  {formatESGScore(userData.esgScore)}
                </div>
                <p className="text-xs text-muted-foreground">
                  Top 15% this month
                </p>
              </CardContent>
            </Card>

            <Card className="cosmic-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Current Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-satoshi font-bold text-primary">
                  {userData.recyclingStreak} days
                </div>
                <p className="text-xs text-muted-foreground">
                  {userData.totalRecycled}kg recycled
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Progress Card */}
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Level Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Level {userData.level}</span>
                  <Badge variant="secondary">Eco Warrior</Badge>
                </div>
                <Progress value={userData.nextLevelProgress} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{userData.nextLevelProgress}% to Level {userData.level + 1}</span>
                  <span>125 more PLY needed</span>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-token-gold" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`p-3 rounded-lg border text-center ${
                        achievement.unlocked 
                          ? 'border-primary/30 bg-primary/5' 
                          : 'border-border opacity-50'
                      }`}
                    >
                      <div className="text-2xl mb-1">{achievement.icon}</div>
                      <p className="text-xs font-medium">{achievement.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="cosmic-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                        activity.type === 'recycle' ? 'bg-poly-green/10 text-poly-green' :
                        activity.type === 'stake' ? 'bg-carbon-blue/10 text-carbon-blue' :
                        activity.type === 'reward' ? 'bg-token-gold/10 text-token-gold' :
                        'bg-primary/10 text-primary'
                      }`}>
                        {activity.type === 'recycle' ? '♻️' : 
                         activity.type === 'stake' ? '🔒' :
                         activity.type === 'reward' ? '🏆' : '💳'}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {activity.poly && (
                        <p className="text-sm font-semibold text-poly-green">
                          +{activity.poly} PLY
                        </p>
                      )}
                      {activity.crt && (
                        <p className="text-sm font-semibold text-carbon-blue">
                          +{activity.crt} CRT
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Activity
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button size="lg" className="poly-gradient border-0 h-16">
              <Recycle className="w-5 h-5 mr-2" />
              Start Recycling
            </Button>
            <Button size="lg" variant="outline" className="h-16">
              <Coins className="w-5 h-5 mr-2" />
              Stake Tokens
            </Button>
            <Button size="lg" variant="outline" className="h-16">
              <TreePine className="w-5 h-5 mr-2" />
              Buy Carbon Credits
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;