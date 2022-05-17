import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLinkDto } from './dtos/create-link.dto';
import { Link } from './link.entity';

@Injectable()
export class LinkService {
  constructor(@InjectRepository(Link) private repo: Repository<Link>) {}

  async create(linkDto: CreateLinkDto) {
    const link = this.repo.create(linkDto);
    return this.repo.save(link);
  }

  async remove(id: number) {
    const link = await this.repo.findOneBy({ id });
    if (!link) {
      throw new NotFoundException('link not found');
    }
    return this.repo.remove(link);
  }

  async getAll() {
    return await this.repo.find();
  }
}
