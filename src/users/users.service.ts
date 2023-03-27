import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_PROVIDER')
    private userRepository: UserRepository,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const hashedPassword = await this.hashPassword(user.password);
    return await this.userRepository.save({
      ...user,
      password: hashedPassword,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, user: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, user);
    return await this.userRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email },
      relations: { company: true, supplier: true },
    });
  }

  async login({ email, password }: { email: string; password: string }) {
    const user = await this.findOneByEmail(email);
    if (!user) {
      throw new HttpException('Usuário não encontrado.', HttpStatus.NOT_FOUND);
    }
    const hashedPassword = user.password;
    const isMatch = await this.comparePasswords(password, hashedPassword);
    if (isMatch) {
      return {
        code: 201,
        success: true,
        message: 'Login efetuado com sucesso.',
        user,
      };
    }
    return {
      code: 400,
      success: false,
      message: 'Email ou senha inválido.',
      user,
    };
  }
}
