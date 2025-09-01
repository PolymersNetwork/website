
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl poly-gradient flex items-center justify-center shadow-lg">
        <span className="text-white text-xl font-bold">♻</span>
      </div>
      <div className="flex flex-col">
        <span className="font-satoshi text-xl font-semibold text-foreground tracking-tight">
          Polymers
        </span>
        <span className="text-xs text-poly-green font-medium -mt-1">
          Tokenized Recycling
        </span>
      </div>
    </div>
  );
};

export default Logo;
