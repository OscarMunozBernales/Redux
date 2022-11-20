import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from 'src/app/state/todo/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: TodoModel[], filter: string): TodoModel[] {

    switch (filter) {
      case 'ACTIVOS':
        return todos.filter( todos => !todos.completado );
      case 'COMPLETADOS':
        return todos.filter( todos => todos.completado );
      default:
        return todos;
    }
  }

}
