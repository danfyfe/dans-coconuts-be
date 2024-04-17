import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
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
  create(@Body(ValidationPipe) createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Patch(':id') // PATCH /posts/:slug
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updatePostDto: UpdatePostDto,
  ) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id') // DELETE /posts/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }
}
