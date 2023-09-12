interface ICallbackOptions {
  payload?: any;
  onSuccess: (data?: any) => void;
  onError?: (error?: unknown) => void;
}

export type TReturnTypeRepository<T> = {
  [P in keyof T]: (callback?: ICallbackOptions) => Promise<void>;
};

export default <T>({repository}: {repository: T & {[_: string]: any}}) => {
  return Object.keys(repository).reduce<TReturnTypeRepository<T>>(
    (prev, curr) => {
      return {
        ...prev,
        [curr]: async ({
          payload,
          onSuccess,
          onError,
        }: ICallbackOptions): Promise<void> => {
          try {
            const data = await repository[curr](payload);
            onSuccess(data);
          } catch (error: unknown) {
            onError?.(error);
          }
        },
      };
    },
    {} as TReturnTypeRepository<T>,
  );
};
