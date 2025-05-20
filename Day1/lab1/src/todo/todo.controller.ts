import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
// import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.type';

@Controller('todo')
export class TodoController {
  constructor(private TodoService: TodoService) {}

  @Get()
  getAllTodos() {
    return this.TodoService.getAllTodos();
  }

  @Post()
  addTodo(@Body() todo: Todo) {
    return this.TodoService.addTodo(todo);
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.TodoService.getTodoById(+id);
  }

  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body() updateData: Todo) {
    return this.TodoService.updateTodo(+id, updateData);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number) {
    return this.TodoService.deleteTodo(+id);
  }
}
