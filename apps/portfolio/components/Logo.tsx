import * as React from 'react';

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The base font size that scales the entire logo proportionately.
   * Can be a string (e.g. '2rem', '40px') or number.
   * @default '2rem'
   */
  size?: number | string;
}

export function Logo({ size = '2rem', className = '', ...props }: LogoProps) {
  return (
    <div
      className={`flex flex-row items-center justify-center select-none ${className}`}
      style={{ fontSize: size }}
      {...props}
    >
      {/* Left Bracket */}
      <div 
        className="text-[#e8e8e8] leading-none" 
        style={{ fontSize: '1.2em', marginRight: '0.04em' }}
      >
        {'{'}
      </div>

      {/* Stacked Letters */}
      <div 
        className="flex flex-col items-center justify-center text-[#f5a623] font-black leading-[0.75]" 
        style={{ fontSize: '0.40em', marginTop: '0.12em' }}
      >
        <span>A</span>
        <span>B</span>
        <span>E</span>
      </div>

      {/* Right Bracket */}
      <div 
        className="text-[#e8e8e8] leading-none" 
        style={{ fontSize: '1.2em', marginLeft: '0.04em' }}
      >
        {'}'}
      </div>
    </div>
  );
}
