type IRedisConfiguration = {
  host: string;
  port: number | null;
  password: string | null;
};

type TRedisObject = TCommonObject | undefined;

type TRedisResult = string | number;

type IRedisHealth = {
  message: string;
  status: string;
  ping?: unknown;
  latency?: string;
};
interface IRedisService {
  set(key: string, val: string | Buffer | number): Promise<string>;
  get(key: string): Promise<TRedisResult>;

  getHealthStatus(): Promise<IRedisHealth>;
  addToSet(setName: string, member: string | Buffer | number): Promise<number>;
  existsInSet(setName: string, member: string): Promise<number>;
  getItemsInSet(setName: string): Promise<string[]>;
  removeFromSet(setName: string, member: string): Promise<number>;
  getObject(key: string): Promise<TRedisObject>;
}
