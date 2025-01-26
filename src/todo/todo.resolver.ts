import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/inputs/create-todo.inputs';
import { UpdateTodoInput } from './dto/inputs/update-todo.inputs';


@Resolver(() => Todo)
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

    @Mutation(() => Todo, { name: 'createTodo' })
    createTodo(
        @Args('CreateTodoInput') createTodoInput: CreateTodoInput
    ) {
        return this.todoService.create(createTodoInput);
    }


    @Mutation(() => Todo, { name: 'updateTodo' })
    updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {

        return this.todoService.update(updateTodoInput.id,updateTodoInput);

    }

    @Mutation(() => Boolean, { name: 'removeTodo' })
    removeTodo(@Args('id', { type: () => Int }) id: number) {
        return this.todoService.remove(id);
    }

}
