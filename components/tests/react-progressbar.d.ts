declare module 'react-progressbar' {
    import React, { ReactNode } from 'react';
  
    interface ProgressBarProps {
      completed: number;
      color?: string;
      height?: string;
      className?: string;
      children?: ReactNode;
    }
  
    const ProgressBar: React.FC<ProgressBarProps>;
  
    export default ProgressBar;
  }