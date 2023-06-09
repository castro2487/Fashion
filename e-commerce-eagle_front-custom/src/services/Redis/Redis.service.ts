import Redis, { type RedisOptions } from 'ioredis';

export function getRedisConfiguration(): IRedisConfiguration {
  return {
    host: process.env.REDIS_HOST || '127.0.0.1',
    password: process.env.REDIS_PASSWORD || null,
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
  };
}

export function createRedisInstance(config = getRedisConfiguration()) {
  try {
    const options: RedisOptions = {
      host: config.host,
      lazyConnect: true,
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 0,
      retryStrategy: (times: number) => {
        console.warn('[REDIS] Could not connect: %s', times);

        if (times > 3) {
          throw new Error(`[REDIS] Could not connect after ${times} attempts`);
        }

        return Math.min(times * 200, 1000);
      },
    };

    if (config.port) {
      options.port = config.port;
    }

    if (config.password) {
      options.password = config.password;
    }

    const redis = new Redis(options);

    redis.on('error', (error: unknown) => {
      console.warn('[REDIS] Error connecting', (<Error>error)?.message);
    });

    return redis;
  } catch (e) {
    throw new Error('[REDIS] Could not create a Redis instance');
  }
}

export class RedisService {
  // implements IRedisService {
  _redis: Redis;
  _name = 'GENERAL';

  constructor(config = getRedisConfiguration()) {
    try {
      this._redis = createRedisInstance(config);
    } catch (e) {
      throw new Error('[REDIS] Could not create a Redis instance');
    }
  }

  get redis() {
    return this._redis;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  async getHealthStatus(): Promise<IRedisHealth> {
    const startMs = new Date().getMilliseconds();
    let health: IRedisHealth = {
      message: 'Healthy',
      status: this.redis.status,
    };

    try {
      await this.redis.set('HEALTH_CHECK', new Date().toISOString());

      health.latency = new Date().getMilliseconds() - startMs + 'ms';
      health.ping = await this.redis.ping();
      health.status = this.redis.status;
    } catch (err) {
      health = {
        message: 'UNHEALTHY',
        status: this.redis.status,
        latency: new Date().getMilliseconds() - startMs + 'ms',
      };
    }

    return Promise.resolve(health);
  }

  async addToSet(
    setName: string,
    member: string | Buffer | number
  ): Promise<number> {
    return this.redis.sadd(setName, member) as Promise<number>;
  }

  async existsInSet(setName: string, member: string): Promise<number> {
    return this.redis.sismember(setName, member) as Promise<number>;
  }

  async getItemsInSet(setName: string): Promise<string[]> {
    return this.redis.smembers(setName) as Promise<string[]>;
  }

  async removeFromSet(setName: string, member: string): Promise<number> {
    return this.redis.srem(setName, member) as Promise<number>;
  }

  async getObject(
    key: string
  ): Promise<TRedisObject | IRedisContentfulEntryReferenceProps> {
    let data;

    try {
      data = JSON.parse((await this.redis.get(key)) || '');
    } catch {
      data = undefined;
      console.error(`[REDIS:${this._name}]: NO DATA FOUND`);
    }

    return Promise.resolve(data);
  }

  async set(key: string, val: string | Buffer | number): Promise<string> {
    return this.redis.set(key, val) as Promise<string>;
  }

  async setWithExpire(
    key: string,
    val: string | Buffer | number,
    seconds = 10
  ): Promise<number> {
    await this.redis.set(key, val);
    return this.redis.expire(key, seconds) as Promise<number>;
  }

  async get(key: string): Promise<TRedisResult> {
    return this.redis.get(key) as Promise<TRedisResult>;
  }

  async delete(key: string): Promise<TRedisResult> {
    return this.redis.del(key) as Promise<TRedisResult>;
  }
}
