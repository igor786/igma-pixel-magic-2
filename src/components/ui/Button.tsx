import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}) => {
  return (
    <button
      className={cn(
        'justify-center items-center flex gap-3 overflow-hidden text-base font-semibold leading-loose px-5 py-[11px] rounded-lg transition-colors',
        variant === 'primary' && 'text-white bg-[#3761E9] hover:bg-[#2951d3]',
        variant === 'secondary' && 'text-[#3761E9] hover:bg-[#f0f2ff]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
