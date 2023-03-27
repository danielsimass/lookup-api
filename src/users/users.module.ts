import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { usersProviders } from './users.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
  exports: [UserService, ...usersProviders],
})
export class UsersModule {}
