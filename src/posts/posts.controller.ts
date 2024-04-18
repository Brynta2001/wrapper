import { Controller, Get, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { FilterDto } from 'src/posts/dto/filter-posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.postsService.findAll(paginationDto);
  }

  @Get('filter')
  findFiltered(@Query() filterDto: FilterDto) {
    return this.postsService.findFiltered(filterDto);
  }
}
