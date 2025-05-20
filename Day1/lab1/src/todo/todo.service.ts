import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.type';

@Injectable()
export class TodoService {
  private Todos: Todo[];

  constructor() {
    this.Todos = [];
  }

  getAllTodos(): Todo[] {
    return this.Todos;
  }

  addTodo(todo: Todo): string {
    this.Todos.push(todo);
    return 'Todo added successfully !';
  }
  getTodoById(id: number): Todo {
    if (id < 0 || id > this.Todos.length) {
      const Todohya = this.Todos[id - 1];
      return Todohya;
    } else {
      // throw new NotFoundException('User not found');
      throw new HttpException('user not found !', HttpStatus.NOT_FOUND);
    }
  }

  updateTodo(id: number, updateData: Todo): Todo | string {
    const todoIndex = this.Todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) return 'No todo found with this ID';

    this.Todos[todoIndex] = {
      ...this.Todos[todoIndex],
      ...updateData,
      id,
    };
    return this.Todos[todoIndex];
  }

  deleteTodo(id: number): string {
    if (id < 0 || id > this.Todos.length) {
      throw new NotFoundException('User not found');
    }
    this.Todos.splice(id - 1, 1);
    return 'user deleted !';
  }
}
