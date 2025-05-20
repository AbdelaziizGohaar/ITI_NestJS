import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoLoggerMiddleware } from '../middlewares/todo.middleware';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  exports: [],
})
export class TodoModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TodoLoggerMiddleware)
      .forRoutes({ path: 'todo', method: RequestMethod.POST });
  }
}
