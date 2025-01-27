import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput } from './dto/inputs/create-todo.inputs';
import { UpdateTodoInput } from './dto/inputs/update-todo.inputs';
import { StatusArgs } from './dto/args/status.args';

@Injectable()
export class TodoService {

    private todos: Todo[] = [
        {
            id: 1,
            description: "Piedra del Alma",
            done: false
        },
        {
            id: 2,
            description: "Piedra del espacio",
            done: true
        },
        {
            id: 3,
            description: "Piedra del tiempo",
            done: false
        },
        {
            id: 4,
            description: "Piedra del mundo",
            done: false
        },
        {
            id: 5,
            description: "Piedra del Angular",
            done: true
        }
    ]

    get totalTodos() {
        return this.todos.length;
    }
    get completedTodos() {
        const completed = this.todos.filter(todo => todo.done === true);
        return completed.length;
    }
    get pendingTodos() {
        const pending = this.todos.filter(todo => todo.done === false);
        return pending.length;
    }


    findAll(statusArgs: StatusArgs): Todo[] {

        const { status } = statusArgs;

        if (status !== undefined) {
            return this.todos.filter(todo => todo.done === status);
        }
        return this.todos;
    }

    findOne(id: number): Todo {

        const todo = this.todos.find(todo => todo.id === id);

        if (!todo) {
            throw new NotFoundException(`Todo with id ${id} not found`);
        }
        return todo;
    }

    create(createTodoInput: CreateTodoInput): Todo {

        const todo = new Todo();

        todo.description = createTodoInput.description;
        todo.id = Math.max(...this.todos.map(todo => todo.id)) + 1;
        this.todos.push(todo);

        return todo;
    }

    update(id: number, updateTodoInput: UpdateTodoInput) {

        const { description, done } = updateTodoInput;
        const todo = this.findOne(id);

        if (description) {
            todo.description = description;
        }
        if (done !== undefined) {
            todo.done = done;
        }

        this.todos = this.todos.map(todo => todo.id === id ? todo : todo);

        return todo;
    }

    remove(id: number) {

        const todo = this.findOne(id);
        this.todos = this.todos.filter(todo => todo.id !== id);

        return true;
    }
}
