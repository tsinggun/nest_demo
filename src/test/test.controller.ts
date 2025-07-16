import { Controller , Get, Query, UseFilters, BadRequestException, UsePipes} from '@nestjs/common';


import { TestService } from './test.service';
import { FilterTestFilter } from 'src/filter/filter-test.filter';
import { PipeTestPipe } from 'src/pipe/pipe-test.pipe';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('/test-filter')
  @UseFilters(FilterTestFilter)
  testFilter(@Query('age') age : number){
    if(age < 18){
      throw new BadRequestException('age must be greater than 18');
    }
    return age + 1;
  }

  @Get('/test-pipe')
  @UseFilters(FilterTestFilter)
  testPipe(@Query('age', PipeTestPipe) age : number){
    return age + 1;
  }
}
