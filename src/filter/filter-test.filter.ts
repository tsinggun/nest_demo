import { ArgumentsHost, Catch, ExceptionFilter , BadRequestException} from '@nestjs/common';
import { Response } from 'express';
// ArgumentsHost 是一个实用工具类，
// 它提供了对不同执行上下文（如 HTTP、WebSocket、gRPC 等）的请求和响应对象的访问能力。
// 在异常过滤器中，
// 借助 ArgumentsHost 能获取当前请求的上下文信息，进而对不同类型的请求进行差异化处理。


// Catch 是一个装饰器，
// 用于将一个类标记为异常过滤器。
// 可以通过传递异常类型作为参数，
// 来指定该过滤器要捕获的异常类型。若不传递参数，该过滤器将捕获所有异常。
@Catch(BadRequestException)
export class FilterTestFilter<T> implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    console.log("我允许了")
    const response: Response = host.switchToHttp().getResponse();

     response.status(400).json({
      statusCode: 400,
      message: 'test: ' + exception.message
    })

  }
}
