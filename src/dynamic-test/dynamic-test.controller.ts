import { Controller, Get, Inject } from '@nestjs/common';
import { DynamicTestService } from './dynamic-test.service';

@Controller('dynamic-test')
export class DynamicTestController {
  constructor(private readonly dynamicTestService: DynamicTestService, @Inject('CONFIG_OPTION') private readonly configOption: Record<string, any>) {}


  @Get()
  findAll(){
    console.log(this.configOption)
    return this.configOption;
  }

}
