import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe , BadRequestException  } from '@nestjs/common';

async function bootstrap() {

  
  const app = await NestFactory.create(AppModule);
  // 启用全局验证管道
  app.useGlobalPipes(new ValidationPipe({
    transform: true,        // 启用自动转换，例如将字符串转换为数字
    whitelist: true,        // 启用白名单功能，自动去除没有在 DTO 中定义的属性
    forbidNonWhitelisted: true, // 启用严格模式，如果请求中包含未定义的字段，则抛出错误
    exceptionFactory: (errors) => {
      const errorMessages = errors.flatMap(error => 
        Object.values(error.constraints || {})
      );
      return new BadRequestException(errorMessages[0]); // 只返回第一条错误消息
    },
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
