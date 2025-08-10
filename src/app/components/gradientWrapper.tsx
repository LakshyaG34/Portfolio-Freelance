// components/GradientWrapper.tsx
import React, { ReactNode } from 'react';

interface GradientWrapperProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const GradientWrapper: React.FC<GradientWrapperProps> = ({ 
  children, 
  className = '', 
  style = {} 
}) => {
  return (
    <div 
      className={className}
      style={{
        background: 'linear-gradient(151.4deg, #FEFAEE 5.26%, #FCD68B 29.9%, #F9784C 53.25%, #9C356D 72.94%)',
        display: 'inline-block',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default GradientWrapper;