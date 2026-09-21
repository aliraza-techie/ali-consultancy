import { useEffect, useState } from 'react';

export function useCounter(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isVisible, target, duration]);

  return count;
}
