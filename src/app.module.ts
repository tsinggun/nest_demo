import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TestModule } from './test/test.module';
import { DynamicTestModule } from './dynamic-test/dynamic-test.module';

@Module({
  imports: [UserModule, TestModule, DynamicTestModule.register({})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
