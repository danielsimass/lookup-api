import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GranatumModule } from './granatum/granatum.module';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { SuppliersModule } from './suppliers/suppliers.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    GranatumModule,
    CompaniesModule,
    SuppliersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
