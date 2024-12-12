import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users/users.service';

@Controller('users')  // This tells NestJS to handle routes starting with '/users'
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()  // This handles GET requests to /users
  getAllUsers() {
    return this.usersService.findAll();
  }
}