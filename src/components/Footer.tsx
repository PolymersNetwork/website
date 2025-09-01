
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full py-16 px-6 md:px-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <Logo />
            <p className="text-muted-foreground max-w-xs">
              Polymers Network | Gamified blockchain recycling ecosystem transforming waste into rewards through DePIN infrastructure.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com/polymersnetwork" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://t.me/polymersnetwork" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.39 4L2.6 10.59c-1.35.5-1.33 1.29-.24 1.61l5.05 1.58 11.71-7.36c.55-.34 1.05-.16.64.22L9.53 16.13l-.36 5.37c.53 0 .76-.24 1.05-.53l2.52-2.44 5.24 3.87c.96.53 1.65.26 1.89-.9L23.56 5.84c.35-1.41-.53-2.06-1.44-1.84z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://discord.gg/polymersnetwork" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.617 4.4c-3.118 4.64-3.968 9.169-3.547 13.626a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="8.5" cy="12" r="1.5" fill="currentColor"/>
                  <circle cx="15.5" cy="12" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://medium.com/@polymersnetwork" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8.5" cy="12" r="2.5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17" cy="9.5" r="1" fill="currentColor"/>
                  <circle cx="17" cy="14.5" r="1" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Application</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="https://dashboard.polymersnetwork.app" className="text-muted-foreground hover:text-primary transition-colors">Platform Dashboard</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mobile App (MVP)</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/partnerships" className="text-muted-foreground hover:text-primary transition-colors">Partnerships</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Community</h4>
            <ul className="space-y-3">
              <li><a href="https://discord.gg/polymersnetwork" className="text-muted-foreground hover:text-primary transition-colors">Discord</a></li>
              <li><a href="https://x.com/polymersnetwork" className="text-muted-foreground hover:text-primary transition-colors">X (Twitter)</a></li>
              <li><a href="https://t.me/polymersnetwork" className="text-muted-foreground hover:text-primary transition-colors">Telegram</a></li>
              <li><a href="https://medium.com/@polymersnetwork" className="text-muted-foreground hover:text-primary transition-colors">Medium</a></li>
              <li><a href="https://github.com/polymersnetwork" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Legal</h4>
            <ul className="space-y-3">
              <li><a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</a></li>
              <li><a href="/tokenomics" className="text-muted-foreground hover:text-primary transition-colors">Tokenomics</a></li>
              <li><a href="/whitepaper.pdf" className="text-muted-foreground hover:text-primary transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div>© 2025 Polymers Network. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-primary transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
