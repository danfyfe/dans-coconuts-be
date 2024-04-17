import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';

@Injectable()
export class PostsService {
  private posts = [
    { id: 1, slug: 'new-post-1' },
    { id: 2, slug: 'new-post-2' },
  ];

  findAll() {
    return this.posts;
  }

  findBySlug(slug: string) {
    return this.posts.find((p) => p.slug === slug);
  }

  findById(id: number) {
    return this.posts.find((p) => p.id === id);
  }

  create(createPostDto: CreatePostDto) {
    const highestId = [...this.posts].sort((a, b) => b.id - a.id)[0].id;
    const newPost = { id: highestId + 1, ...createPostDto };
    this.posts.push(newPost);
    return newPost;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    this.posts = this.posts.map((post) => {
      if (post.id === id) {
        const updated = { ...post, ...updatePostDto };
        return updated;
      }
      return post;
    });
    return this.findById(id);
  }

  delete(id: number) {
    const removedPost = this.findById(id);
    this.posts = this.posts.filter((post) => post.id !== id);
    return removedPost;
  }
}
