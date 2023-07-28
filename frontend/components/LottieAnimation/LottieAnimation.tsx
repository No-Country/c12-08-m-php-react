'use client';

import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';

const LottieAnimation: React.FC<{ animationData: any }> = ({ animationData }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => anim.destroy();
    }
  }, [animationData]);

  return <div ref={containerRef} />;
};

export default LottieAnimation;
