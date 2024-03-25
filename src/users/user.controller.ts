import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(
    @Body()
    {
      username,
      password,
      email,
    }: {
      username: string;
      password: string;
      email: string;
    },
  ) {
    return this.usersService.createUser(username, password, email);
  }
}
