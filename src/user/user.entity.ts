import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PreSaveMiddlewareFunction } from 'mongoose';
import { hash } from 'bcrypt';

@Schema()
export class UserEntity {
  @Prop()
  username: string;

  @Prop({ select: false, required: true })
  password: string;
}

export const UserEntitySchema = SchemaFactory.createForClass(UserEntity);

UserEntitySchema.pre<UserEntity>('save', async (next: any) => {
  this.password = await hash(this.password, 10);
  next();
});
