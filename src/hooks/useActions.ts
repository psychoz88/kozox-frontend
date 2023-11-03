import {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as app from 'store/app/actions';

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(
    () =>
      bindActionCreators(
        {
          ...app,
        },
        dispatch,
      ),
    [dispatch],
  );
};
