import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {debounce} from 'lodash';

import {setDeviceType} from 'store/app/appSlice';
import {mdBp, xLgBp} from 'constants/styleVars';

/* eslint-disable */
const mobileRegExp =
  /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/;
const tabletRegExp =
  /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/;
/* eslint-enable */

export function useDeviceType() {
  const dispatch = useDispatch();

  useEffect(() => {
    const UA = window.navigator.userAgent;

    const handleResize = debounce(() => {
      const isTouchDevice = 'ontouchstart' in document.documentElement;
      const mobileTest = isTouchDevice && mobileRegExp.test(UA);
      const isTablet =
        (isTouchDevice && tabletRegExp.test(UA.toLowerCase())) ||
        (!mobileTest && window.innerWidth >= mdBp && window.innerWidth < xLgBp);
      const isMobile =
        (mobileTest && !isTablet) ||
        (!mobileTest && !isTablet && window.innerWidth < mdBp);
      const isDesktop = !isMobile && !isTablet && window.innerWidth >= xLgBp;

      dispatch(
        setDeviceType({
          width: window.innerWidth,
          height: window.innerHeight,
          isMobile,
          isTablet,
          isDesktop,
        }),
      );
    }, 150);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);
}
