import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateTodoDto {
  @IsString()
  @ApiProperty()
  title: string;
}
