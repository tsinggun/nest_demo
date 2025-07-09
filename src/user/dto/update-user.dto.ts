import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty({ message: '用户id不能为空' })
    id:number;
    @IsNotEmpty({ message: '用户名不能为空' })
    username: string;
    @IsNotEmpty({ message: '密码不能为空' })
    password: string;
    @IsEmail({}, { message: '邮箱格式错误' })
    @IsNotEmpty({ message: '邮箱不为空' })
    email: string;
}
