import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { FilterDto } from 'src/posts/dto/filter-posts.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class PostsService {
  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: {
          _limit: limit || 10,
          _start: limit * (page - 1),
        },
      },
    );
    return posts;
  }

  async findFiltered(filterDto: FilterDto) {
    const { userId, id, title } = filterDto;
    const queryParams: string[] = [];

    if (userId) {
      queryParams.push(`userId=${userId}`);
    }

    if (id) {
      queryParams.push(`id=${id}`);
    }

    if (title) {
      queryParams.push(`title=${title}`);
    }

    const { data: posts } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?${queryParams.join('&')}`,
    );
    return posts;
  }
}
