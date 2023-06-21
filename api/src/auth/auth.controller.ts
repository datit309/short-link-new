import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { PostLoginAdminDto } from './dto/post-login-admin.dto';
import { LoginClientDto } from './dto/login-client.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post('cpanel-login')
  async loginAdmin(@Body() dto: PostLoginAdminDto, @Res() res) {
    try {
      return res.status(HttpStatus.OK).send({
        success: true,
        data: await this.authService.postLoginAdmin(dto),
        message: 'Request success',
      });
    } catch (e) {
      return res.status(HttpStatus.OK).send({
        success: false,
        data: null,
        message: e.message,
      });
    }
  }

  @Post('login')
  async loginClient(@Body() dto: LoginClientDto, @Res() res) {
    try {
      return res.status(HttpStatus.OK).send({
        success: true,
        data: await this.authService.postLoginClient(dto),
        message: 'Request success',
      });
    } catch (e) {
      return res.status(HttpStatus.OK).send({
        success: false,
        data: null,
        message: e.message,
      });
    }
  }
}
