import Redis from 'ioredis';
import { createRedisInstance, RedisService } from './Redis.service';

jest.mock('ioredis');

describe('createRedisInstance', () => {
  it('should create a Redis instance with default configuration', () => {
    createRedisInstance();

    expect(Redis).toHaveBeenCalledWith({
      host: '127.0.0.1',
      lazyConnect: true,
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 0,
      retryStrategy: expect.any(Function),
      port: 6379,
    });
  });

  it('should create a Redis instance with custom configuration', () => {
    const config = {
      host: 'example.com',
      password: 'password',
      port: 6380,
    };

    createRedisInstance(config);

    expect(Redis).toHaveBeenCalledWith({
      host: 'example.com',
      lazyConnect: true,
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 0,
      retryStrategy: expect.any(Function),
      password: 'password',
      port: 6380,
    });
  });
});

describe('RedisService', () => {
  let storage = {} as TCommonObject;

  jest.spyOn(Redis.prototype, 'on').mockImplementation(() => Redis.prototype);
  jest
    .spyOn(Redis.prototype, 'set')
    .mockImplementation((key: any, value: any) => {
      storage[key] = value;
      return Promise.resolve('OK');
    });
  jest
    .spyOn(Redis.prototype, 'get')
    .mockImplementation((key: any) => Promise.resolve(storage[key]));

  afterEach(() => {
    jest.clearAllMocks();
    storage = {};
  });

  it('should create a RedisService instance', () => {
    const redisService = new RedisService();

    expect(redisService).toBeInstanceOf(RedisService);
    expect(redisService.name).toBe('GENERAL');
    expect(redisService.redis).toBeInstanceOf(Redis);
  });

  it('should set and get a value from Redis', async () => {
    const redisService = new RedisService();

    const key = 'testKey';
    const value = 'test-value';

    await redisService.set(key, value);

    expect(redisService.redis.set).toHaveBeenCalledWith(key, value);
    expect(await redisService.get(key)).toEqual(value);
  });

  describe('getObject', () => {
    beforeAll(() => {
      jest.spyOn(console, 'error').mockImplementation(() => '');
    });

    it('should return undefined if the key does not exist in Redis', async () => {
      const mockRedisInstance = {
        get: jest.fn().mockReturnValue(null),
      };
      const redisService = new RedisService(mockRedisInstance);
      const key = 'testKey';
      const result = await redisService.getObject(key);
      expect(result).toBeUndefined();
    });

    it('should return undefined if the key is not a string', async () => {
      const redisService = new RedisService();
      const result = await redisService.getObject(null);
      expect(result).toBeUndefined();
    });

    it('should return undefined if the key is an empty string', async () => {
      const redisService = new RedisService();
      const result = await redisService.getObject('');
      expect(result).toBeUndefined();
    });

    it('should return the expected object if the key exists in Redis', async () => {
      const redisService = new RedisService();
      const key = 'testKey';
      const value = { foo: 'bar' };
      await redisService.set(key, JSON.stringify(value));
      const result = await redisService.getObject(key);

      expect(result).toEqual(value);
    });

    it('should handle errors gracefully', async () => {
      const mockRedisInstance = {
        get: jest.fn().mockImplementation(() => {
          throw new Error('Unexpected error');
        }),
      };
      const redisService = new RedisService(mockRedisInstance);
      const key = 'testKey';
      const result = await redisService.getObject(key);
      expect(result).toBeUndefined();
    });
  });
});
