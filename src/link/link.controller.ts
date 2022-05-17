import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateLinkDto } from './dtos/create-link.dto';
import { LinkService } from './link.service';

@Controller('links')
export class LinkController {
  constructor(private linkService: LinkService) {}

  @Post()
  createLink(@Body() body: CreateLinkDto) {
    return this.linkService.create(body);
  }

  @Delete('/:id')
  removeLink(@Param('id') id: string) {
    return this.linkService.remove(parseInt(id));
  }

  @Get('/')
  findAllLinks() {
    return this.linkService.getAll();
  }
}
