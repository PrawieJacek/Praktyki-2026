import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'white' | 'dark';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-[#c62284] text-white hover:bg-pink-700',
  outline: 'bg-transparent border border-gray-300 text-gray-700 hover:border-[#c62284] hover:text-[#c62284]',
  white: 'bg-white text-[#c62284] hover:bg-gray-50',
  dark: 'bg-transparent border border-gray-600 text-white hover:border-gray-400',
};

export default function Button({ children, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <button className={`font-medium rounded-lg px-6 py-3 transition-colors duration-200 text-sm ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
