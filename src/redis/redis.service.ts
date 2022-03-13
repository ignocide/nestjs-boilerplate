import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { default as IORedis } from 'ioredis';

@Injectable()
export class RedisService {
  client: IORedis.Redis;

  constructor(private configService: ConfigService) {
    const redisConfig = this.configService.get('redis');
    this.client = new IORedis(redisConfig);
    this.monitor();
  }

  async monitor() {
    const monitor = await this.client.monitor();
    monitor.on('monitor', console.log);
  }

  // TODO: flushall -> clear by namespace
  async clear() {
    await this.client.flushall();
  }

  async set(namespace: string, key: string, value: string) {
    await this.client.set(`${namespace}:${key}`, value);
  }
}
