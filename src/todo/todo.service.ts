import { Injectable } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

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
        }
    ]


    findAll(): Todo[] {
        return this.todos;
    }

    findOne(id: number): Todo {
        return this.todos.find(todo => todo.id === id);
    }






}
