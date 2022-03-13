import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from './redis/redis.module';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelModule } from './model/model.module';
import { SampleModule } from './sample/sample.module';
import Entities from './entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const databaseConfig = configService.get('database');
        return {
          ...databaseConfig,
          entities: Entities,
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
    RedisModule,
    ModelModule,
    SampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
