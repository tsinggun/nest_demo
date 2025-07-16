import { DynamicModule, Module , ConfigurableModuleBuilder} from '@nestjs/common';
import { DynamicTestService } from './dynamic-test.service';
import { DynamicTestController } from './dynamic-test.controller';


export const {ConfigurableModuleClass, OPTIONS_TYPE} = new ConfigurableModuleBuilder<Record<string, any>>().build();

@Module({})
export class DynamicTestModule extends ConfigurableModuleClass{
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
