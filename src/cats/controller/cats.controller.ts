import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from '../dto/create-cat.dto';
import { ListAllEntities } from '../dto/list-all-entities.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  // @Get()
  // async findAll(): Promise<any[]> {
  //   return [];
  // }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (litmit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action updates a #${id} cat`;
  }
}