import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  create(createUserDto: CreateUserDto) {
    return {
      ...createUserDto,
      message:"创建成功"
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  /**
   * @description 获取用户的信息
   * @param id 
   * @returns 
   */
  findOne(id: number) {
    return {
      id,
    };
  }

  update(updateUserDto: UpdateUserDto) {
    return {
      ...updateUserDto,
      message:"修改成功"
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
