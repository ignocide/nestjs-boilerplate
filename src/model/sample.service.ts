import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sample } from '../entity/sample.entity';


@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(Sample)
    private readonly sampleRepository: Repository<Sample>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) { }

  async findAll(): Promise<Sample[]> {
    return await this.sampleRepository.find();
  }
}
