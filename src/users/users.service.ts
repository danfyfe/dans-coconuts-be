import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

// This should be a real class/interface representing a user entity
export type IUser = {
  id: number;
  username: string;
  password: string;
  email: string;
};

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  private readonly users = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
      email: 'john@john.com',
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
      email: 'maria@maria.com',
    },
  ];

  async createUser(
    username: string,
    email: string,
    password: string,
  ): Promise<IUser> {
    const newUser = this.userRepository.create({ username, email, password });
    return this.userRepository.save(newUser);
  }

  async findOne(username: string): Promise<IUser | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
