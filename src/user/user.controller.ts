import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { Constants } from 'src/utils/constants';
import {
  ApiTags,
  ApiSecurity,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiOperation,
} from '@nestjs/swagger/dist';
import { User } from './entities/user.entity';

@Controller('users')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  @ApiOperation({
    summary: 'Create a new user',
    description: 'Creates a new user',
  })
  @ApiCreatedResponse({
    description: 'User created',
    type: User,
  })
  @ApiInternalServerErrorResponse({
    description: 'Error creating user',
  })
  @ApiBadRequestResponse({
    description: 'User with the email already exists',
  })
  create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.create(createUserDto);
    } catch (error) {
      throw new HttpException(
        'Error creating user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @ApiOperation({
    summary: 'Get all users',
    description: 'Returns a list of users ONLY ACCESSIBLE BY ADMIN',
  })
  @ApiOkResponse({
    description: 'Users',
    type: User,
    isArray: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Error fetching users',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @ApiForbiddenResponse({
    description: 'Forbidden',
  })
  @ApiSecurity('JWT-auth')
  @UseGuards(new RoleGuard(Constants.ROLES.ADMIN_ROLE))
  findAll() {
    try {
      return this.userService.findAll();
    } catch (error) {
      throw new HttpException(
        'Error fetching users',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a user',
    description: 'Deletes a user ONLY ACCESSIBLE BY ADMIN',
  })
  @ApiOkResponse({
    description: 'User deleted',
  })
  @ApiInternalServerErrorResponse({
    description: 'Error deleting user',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @ApiForbiddenResponse({
    description: 'Forbidden',
  })
  @ApiBadRequestResponse({
    description: "User with the id doesn't exist",
  })
  @ApiSecurity('JWT-auth')
  @UseGuards(new RoleGuard(Constants.ROLES.ADMIN_ROLE))
  remove(@Param('id') id: string) {
    try {
      return this.userService.remove(+id);
    } catch (error) {
      throw new HttpException(
        'Error deleting user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
