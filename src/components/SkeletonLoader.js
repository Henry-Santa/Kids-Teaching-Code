import React from 'react';
import './SkeletonLoader.css';

function SkeletonLoader({ type = 'rectangle', height, width }) {
  return (
    <div 
      className={`skeleton-loader ${type}`}
      style={{ height, width }}
      role="presentation"
      aria-hidden="true"
    />
  );
}

export default SkeletonLoader;