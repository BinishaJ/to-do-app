import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoRepository } from './repo/todo.repository';
import { Todo } from './entities/todo.entity';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TodoService {
  constructor(
    private todoRepository: TodoRepository,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async create(
    createTodoDto: CreateTodoDto,
    header: Record<string, string>,
  ): Promise<Todo> {
    const token: string = header.authorization.split(' ')[1];
    const userId: number = this.jwtService.decode(token)['userId'];
    const todo: Todo = new Todo();
    todo.title = createTodoDto.title;
    todo.date = new Date().toLocaleString();
    todo.completed = false;
    todo.user = await this.userService.findUserById(userId);
    return this.todoRepository.save(todo);
  }

  findAllTodoByUserNotCompleted(header: Record<string, string>) {
    const token: string = header.authorization.split(' ')[1];
    const userId: number = this.jwtService.decode(token)['userId'];
    return this.todoRepository.find({
      relations: ['user'],
      where: { user: { id: userId }, completed: false },
    });
  }

  findAllTodoByUserCompleted(header: Record<string, string>) {
    const token: string = header.authorization.split(' ')[1];
    const userId: number = this.jwtService.decode(token)['userId'];
    return this.todoRepository.find({
      relations: ['user'],
      where: { user: { id: userId }, completed: true },
    });
  }

  async update(todoId: number, header: Record<string, string>) {
    const token: string = header.authorization.split(' ')[1];
    const userId: number = this.jwtService.decode(token)['userId'];
    const todo: Todo = await this.todoRepository.findOne({
      where: { id: todoId },
      relations: ['user'],
    });
    if (!todo)
      throw new HttpException("Todo doesn't exist", HttpStatus.BAD_REQUEST);
    if (todo.user.id != userId)
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.todoRepository.update(todoId, { completed: true });
  }

  async remove(todoId: number, header: Record<string, string>) {
    const token: string = header.authorization.split(' ')[1];
    const userId: number = this.jwtService.decode(token)['userId'];
    const todo: Todo = await this.todoRepository.findOne({
      where: { id: todoId },
      relations: ['user'],
    });
    if (!todo)
      throw new HttpException("Todo doesn't exist", HttpStatus.BAD_REQUEST);
    if (todo.user.id != userId)
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    return this.todoRepository.delete(todoId);
  }
}
