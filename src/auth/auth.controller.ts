import { Controller, Post, UseGuards, Req, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt/dist';
import { User } from 'src/user/entities/user.entity';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiUnauthorizedResponse,
  ApiOperation,
} from '@nestjs/swagger/dist/decorators';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('Login')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Post('/login')
  @ApiOperation({
    summary: 'User Login',
    description: 'User Login',
  })
  @UseGuards(AuthGuard('local'))
  @ApiCreatedResponse({ description: 'Login successful' })
  @ApiUnauthorizedResponse({ description: 'Invalid username/password' })
  login(@Req() req, @Body() loginDto: LoginDto) {
    const user: User = req.user;
    const payload = {
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };
    return { token: this.jwtService.sign(payload) };
  }
}
