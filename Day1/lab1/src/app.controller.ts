import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { TodoService } from './todo/todo.service';
// import { todo } from './todo/todo.type';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly todoService: TodoService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('todo')
  // test(): todo[] {
  //   return this.todoService.getAllTodos();
  // }
}
