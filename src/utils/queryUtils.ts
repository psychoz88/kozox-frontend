export const objectToQueryString = (obj: any): string =>
  Object.entries(obj)
    .map(([k, v]) => k + '=' + v)
    .join('&');