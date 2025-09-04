import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import TaskBoard from "./TaskBoard";
import { Loader } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-deep-black text-white">
      {/* Cosmic particle effect (background dots) */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>

      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-20 bg-primary blur-[160px]"></div>
      </div>

      {/* Hero content */}
      <div
        className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Blockchain-powered recycling ecosystem
            <Loader className="h-3 w-3 animate-spin text-primary" />
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-white">
          Transform Recycling into{" "}
          <span className="text-primary">Rewards</span> with Polymers Network
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-balance">
          Gamified, blockchain-powered recycling ecosystem. Earn PLY, RECO, and
          CRT tokens while making a real environmental impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px] w-full sm:w-auto">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-gray-700 text-white hover:bg-gray-800 hover:text-white text-base h-12 px-8 transition-all duration-200 min-h-[48px] w-full sm:w-auto"
          >
            Documentation
          </Button>
        </div>

        <div className="pt-6 text-sm text-gray-500">
          IoT-enabled smart bins • Tokenized rewards • Carbon credits
        </div>
      </div>

      {/* Task Manager UI integrated in hero section with glassmorphic effect */}
      <div
        className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-gray-700 backdrop-blur-sm bg-pearl-black/80 shadow-lg">
          {/* Dashboard Header */}
          <div className="bg-pearl-black/90 backdrop-blur-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-md bg-primary/20 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-primary"></div>
                </div>
                <span className="text-white font-medium">
                  Polymers Dashboard
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gray-700 border-2 border-pearl-black"></div>
                  <div className="h-8 w-8 rounded-full bg-gray-600 border-2 border-pearl-black"></div>
                  <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-pearl-black"></div>
                  <div className="h-8 w-8 rounded-full bg-gray-400 border-2 border-pearl-black flex items-center justify-center text-xs text-black">
                    +3
                  </div>
                </div>

                <div className="h-8 px-3 rounded-md bg-gray-700 flex items-center justify-center text-white text-sm">
                  Share
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex h-[600px] overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 border-r border-gray-700 p-4 space-y-4 hidden md:block bg-deep-black">
                <div className="space-y-2">
                  <div className="text-xs text-gray-500 uppercase">
                    Navigation
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary">
                      <div className="h-3 w-3 rounded-sm bg-primary"></div>
                      <span>Recycling</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:bg-gray-800">
                      <div className="h-3 w-3 rounded-sm bg-gray-600"></div>
                      <span>Tokens</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:bg-gray-800">
                      <div className="h-3 w-3 rounded-sm bg-gray-600"></div>
                      <span>ESG Analytics</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:bg-gray-800">
                      <div className="h-3 w-3 rounded-sm bg-gray-600"></div>
                      <span>Marketplace</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <div className="text-xs text-gray-500 uppercase">
                    Features
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:bg-gray-800">
                      <div className="h-3 w-3 rounded-full bg-poly-green/60"></div>
                      <span>Smart Bins</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:bg-gray-800">
                      <div className="h-3 w-3 rounded-full bg-carbon-blue/50"></div>
                      <span>Carbon Credits</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:bg-gray-800">
                      <div className="h-3 w-3 rounded-full bg-token-gold/40"></div>
                      <span>NFT Rewards</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-4 bg-pearl-black overflow-hidden">
                {/* Board Header */}
                <div className="flex items-center justify-between mb-6 min-w-0">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <h3 className="font-medium text-white">
                      Recycling Activities
                    </h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      12
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="h-8 w-8 rounded-md bg-gray-700 flex items-center justify-center text-gray-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 12H9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 9L12 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="h-8 w-8 rounded-md bg-gray-700 flex items-center justify-center text-gray-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 9L17 17H9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17 17L7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="h-8 px-3 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium whitespace-nowrap">
                      Start Recycling
                    </div>
                  </div>
                </div>

                {/* Kanban Board */}
                <div className="overflow-hidden">
                  <TaskBoard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
