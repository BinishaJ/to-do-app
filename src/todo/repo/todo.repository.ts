import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Todo } from '../entities/todo.entity';

@Injectable()
export class TodoRepository extends Repository<Todo> {
  constructor(private dataSource: DataSource) {
    super(Todo, dataSource.createEntityManager());
  }
}
