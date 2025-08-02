
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <section 
      className={`bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-900/30 p-6 md:p-8 ${className}`}
    >
      {children}
    </section>
  );
};

export default Card;
