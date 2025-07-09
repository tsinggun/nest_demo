import { IsString, IsNotEmpty ,IsEmail} from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty({ message: '用户名不为空' })
    username: string;

    @IsNotEmpty({ message: '密码不为空' })
    password: string;

    @IsEmail({}, { message: '邮箱格式错误' })
    @IsNotEmpty({ message: '邮箱不为空' })
    email: string;
}
