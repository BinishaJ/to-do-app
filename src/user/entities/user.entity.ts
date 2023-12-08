import { ApiProperty } from '@nestjs/swagger';
import { Todo } from 'src/todo/entities/todo.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  firstName: string;

  @Column()
  @ApiProperty()
  lastName: string;

  @Column()
  @ApiProperty()
  email: string;

  @Column()
  @ApiProperty()
  password: string;

  @Column()
  @ApiProperty()
  role: string;

  //one user => many todos#
  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
