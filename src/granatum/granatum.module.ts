import { Module } from '@nestjs/common';
import { GranatumController } from './granatum.controller';
import { GranatumService } from './granatum.service';

@Module({
  controllers: [GranatumController],
  providers: [GranatumService],
  exports: [GranatumService],
})
export class GranatumModule {}
