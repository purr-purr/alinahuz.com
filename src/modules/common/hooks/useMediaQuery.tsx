import { useCallback, useEffect, useState } from 'react';

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }
    return () => media.removeListener(updateTarget);
    // eslint-disable-next-line
  }, []);

  return targetReached;
};

export default useMediaQuery;
