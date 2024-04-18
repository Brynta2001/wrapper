import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [PostsModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
