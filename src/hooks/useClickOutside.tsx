import {RefObject, useEffect} from 'react';
import {useAppSelector} from 'store/hooks';

/**
 * Hook that handle clicks outside the passed ref
 */
export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  toggled: boolean,
  callback: () => void,
): void => {
  const isMobile = useAppSelector(({app}) => app.deviceType.isMobile);
  useEffect(() => {
    /**
     * Handle click on outside of element
     */
    const handleClickOutside = (e: Event) => {
      if (
        toggled &&
        e.target instanceof HTMLElement &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        callback();
      }
    };

    // Bind the event listener
    if (isMobile) {
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Unbind the event listener on clean up
      if (isMobile) {
        document.removeEventListener('touchstart', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [ref, isMobile, toggled, callback]);
};
