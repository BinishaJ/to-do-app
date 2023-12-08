import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repo/user.repository';
import { User } from './entities/user.entity';
import { Constants } from 'src/utils/constants';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userExists: User = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (userExists)
      throw new HttpException(
        'User with the email already exists',
        HttpStatus.BAD_REQUEST,
      );
    const user: User = new User();
    user.email = createUserDto.email;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.password = await bcrypt.hash(createUserDto.password, 10);
    user.role = Constants.ROLES.NORMAL_ROLE;
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findUserByEmail(email: string): Promise<User> {
    const user: Promise<User> = this.userRepository.findOne({
      where: { email: email },
    });
    if (!user)
      throw new HttpException(
        "User with the email doesn't exist",
        HttpStatus.BAD_REQUEST,
      );
    return user;
  }

  findUserById(id: number): Promise<User> {
    const user: Promise<User> = this.userRepository.findOne({
      where: { id: id },
    });
    if (!user)
      throw new HttpException(
        "User with the id doesn't exist",
        HttpStatus.BAD_REQUEST,
      );
    return user;
  }

  async remove(id: number) {
    const user: User = await this.userRepository.findOne({ where: { id: id } });
    if (!user)
      throw new HttpException(
        "User with the id doesn't exist",
        HttpStatus.BAD_REQUEST,
      );
    return this.userRepository.delete(id);
  }
}
