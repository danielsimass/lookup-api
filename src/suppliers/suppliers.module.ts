import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { suppliersProviders } from './supplier.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SuppliersController],
  providers: [SuppliersService, ...suppliersProviders],
  exports: [SuppliersService, ...suppliersProviders],
})
export class SuppliersModule {}
