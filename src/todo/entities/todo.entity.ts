import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  title: string;

  @Column()
  @ApiProperty({
    default: new Date().toLocaleString(),
  })
  date: string;

  @Column()
  @ApiProperty({
    default: false,
  })
  completed: boolean;

  //many todos => one user
  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
