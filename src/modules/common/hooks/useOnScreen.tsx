import { useEffect, useState } from 'react';

const useOnScreen = (ref: any) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const windowHeight = window.innerHeight - 50;
  const windowRootMargin = `0px 0px -${windowHeight}px 0px`;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIntersecting(entry.isIntersecting);
    },
    {
      rootMargin: windowRootMargin,
    },
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};

export default useOnScreen;
