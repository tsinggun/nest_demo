import { ArgumentMetadata, Injectable, PipeTransform , BadRequestException} from '@nestjs/common';


// ArgumentMetadata 是一个接口，
// 用于描述传递给管道的参数元数据。
// 在自定义管道中，
// 借助 ArgumentMetadata 能获取参数的类型、传递方式以及参数的属性名等信息。其接口定义如下：

@Injectable()
export class PipeTestPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    if(Number.isNaN(value)){
      throw new BadRequestException('age must be a number');
    }

    if(value < 18){
      throw new BadRequestException('age must be greater than 18');
    }

    return value;
  }
}
