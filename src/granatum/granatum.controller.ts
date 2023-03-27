import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateReleaseDto } from './dto/createGranatum.dto';
import { GranatumService } from './granatum.service';

@Controller('granatum')
export class GranatumController {
  constructor(private readonly granatumService: GranatumService) {}

  @Post('/releases')
  async createRelease(
    @Body() createReleaseDto: CreateReleaseDto,
    @Query('access_token') granatumAcessToken: string,
  ) {
    return this.granatumService.createRelease(
      createReleaseDto,
      granatumAcessToken,
    );
  }

  @Get('/releases')
  async getAllReleases(
    @Query('accountId') accountId: string,
    @Query('access_token') granatumAcessToken: string,
  ) {
    return this.granatumService.getAllReleases(accountId, granatumAcessToken);
  }

  @Get('releases/:id')
  async getReleaseById(
    @Param('id') id: string,
    @Query('access_token') granatumAcessToken: string,
  ) {
    return this.granatumService.getReleaseById(id, granatumAcessToken);
  }

  @Delete('releases/:id')
  async deleteReleaseById(
    @Param('id') id: string,
    @Query('access_token') granatumAcessToken: string,
  ) {
    return this.granatumService.deleteReleaseById(id, granatumAcessToken);
  }

  @Get('/categories')
  async getAllCategories(@Query('access_token') granatumAcessToken: string) {
    return this.granatumService.getAllCategories(granatumAcessToken);
  }

  @Get('/accounts')
  async getAllAccounts(@Query('access_token') granatumAcessToken: string) {
    return this.granatumService.getAllAccounts(granatumAcessToken);
  }

  @Get('/delet')
  async deletTests() {
    return this.granatumService.deleteTests();
  }
}
