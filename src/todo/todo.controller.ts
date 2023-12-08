import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Headers,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import {
  ApiTags,
  ApiSecurity,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiBadRequestResponse,
  ApiOperation,
} from '@nestjs/swagger/dist/decorators';
import { Todo } from './entities/todo.entity';

@Controller('todo')
@ApiSecurity('JWT-auth')
@ApiTags('Todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('')
  @ApiOperation({
    summary: 'Create a todo',
    description: 'Creates a new todo for the user',
  })
  @ApiCreatedResponse({
    description: 'Todo created',
    type: Todo,
  })
  @ApiInternalServerErrorResponse({
    description: 'Error creating todo',
  })
  @ApiBadRequestResponse({
    description: "User with the id doesn't exist",
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  create(
    @Body() createTodoDto: CreateTodoDto,
    @Headers() headers: Record<string, string>,
  ) {
    try {
      return this.todoService.create(createTodoDto, headers);
    } catch (error) {
      throw new HttpException(
        'Error creating todo',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('findAllNotCompleted')
  @ApiOperation({
    summary: 'Get not completed todos',
    description: 'Returns a list of todos of the user that are not completed',
  })
  @ApiOkResponse({
    description: 'Not Completed Todos',
    type: Todo,
    isArray: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Error fetching todos',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  findAllTodoByUserNotCompleted(@Headers() headers: Record<string, string>) {
    try {
      return this.todoService.findAllTodoByUserNotCompleted(headers);
    } catch (error) {
      throw new HttpException(
        'Error fetching todos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('findAllCompleted')
  @ApiOperation({
    summary: 'Get completed todos',
    description: 'Returns a list of todos of the user that are completed',
  })
  @ApiOkResponse({
    description: 'Completed Todos',
    type: Todo,
    isArray: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Error fetching todos',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  findAllTodoByUserCompleted(@Headers() headers: Record<string, string>) {
    try {
      return this.todoService.findAllTodoByUserCompleted(headers);
    } catch (error) {
      throw new HttpException(
        'Error fetching todo',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Complete todo',
    description: 'Updates the todo as completed',
  })
  @ApiOkResponse({
    description: 'Todo complete',
    type: Todo,
  })
  @ApiInternalServerErrorResponse({
    description: 'Error editing todo',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @ApiBadRequestResponse({
    description: "Todo doesn't exist",
  })
  update(@Param('id') id: string, @Headers() headers: Record<string, string>) {
    try {
      return this.todoService.update(Number(id), headers);
    } catch (error) {
      throw new HttpException(
        'Error editing todo',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete todo',
    description: "Delete the todo from the user's todo list",
  })
  @ApiOkResponse({
    description: 'Todo deleted',
  })
  @ApiInternalServerErrorResponse({
    description: 'Error deleting todo',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @ApiBadRequestResponse({
    description: "Todo doesn't exist",
  })
  remove(@Param('id') id: string, @Headers() headers: Record<string, string>) {
    try {
      return this.todoService.remove(Number(id), headers);
    } catch (error) {
      throw new HttpException(
        'Error deleting todo',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
