import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('v1/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get() // GET /posts
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':slug') // GET /posts/:slug
  findBySlug(@Param('slug') slug: string) {
    return this.postsService.findBySlug(slug);
  }

  @Post() // POST /posts
  create(@Body() post: { slug: string }) {
    return this.postsService.create(post);
  }

  @Patch(':id') // PATCH /posts/:slug
  update(@Param('id') id: string, @Body() postUpdate: { slug?: string }) {
    return this.postsService.update(+id, postUpdate);
  }

  @Delete(':id') // DELETE /posts/:id
  delete(@Param('id') id: string) {
    return this.postsService.delete(+id);
  }
}
