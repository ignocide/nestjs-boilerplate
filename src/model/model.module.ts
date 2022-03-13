import { Global, HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Entities from '../entity';
import { SampleService } from './sample.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(Entities), HttpModule],
  providers: [SampleService],
  exports: [SampleService],
})
export class ModelModule { }
