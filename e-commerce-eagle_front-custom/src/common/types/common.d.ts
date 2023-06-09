interface IRequestArgs {
  body?: { [key: string]: string | number | boolean };
  query?: { [key: string]: string | number | boolean };
  headers?: { [key: string]: string };
}

type TJWTToken = {
  exp: number;
  iat: number;
  [key?: string]: string | number | boolean;
};

type TCommonObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key?: string]: any;
};

type TDataObject<T> = {
  [key?: string]: T;
};

type TResolve = (value?: unknown) => void;
