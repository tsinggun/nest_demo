import { DynamicModule, Module } from '@nestjs/common';
import { DynamicTestService } from './dynamic-test.service';
import { DynamicTestController } from './dynamic-test.controller';

@Module({})
export class DynamicTestModule {
  static register(options: Record<string, any>) : DynamicModule{

    return {
      module: DynamicTestModule,
      controllers: [DynamicTestController],
      providers: [
        DynamicTestService,
        {
          provide: 'CONFIG_OPTION',
          useValue: options,
        }
      ],
      exports: [],
    };
  }
}
