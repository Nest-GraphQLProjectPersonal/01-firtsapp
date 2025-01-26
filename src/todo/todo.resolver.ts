import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';


@Resolver()
export class TodoResolver {

    constructor(
        private readonly todoService: TodoService
    ) { }


    @Query(() => [Todo], { name: 'todos' })
    findAll(): Todo[] {
        return this.todoService.findAll();
    }

    @Query(() => Todo, { name: 'todoId' })
    findOne(@Args('id', {
        nullable: true, type() { return Int },
    }) id: number): Todo {
        return this.todoService.findOne(id);
    }

    @Query(() => String)
    createTodo(): string {
        return 'Crear un todo';
    }


}
