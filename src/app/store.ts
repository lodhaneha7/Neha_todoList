import { ITodo } from './todo';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  REMOVE_ALL_TODOS,
  UPDATE_TODOS,
  LOCAL_STORAGE,
} from './actions';

export interface IAppState {
  todos: ITodo[];
}

export const INIT_STATE: IAppState = {
  todos: [],
};


export function rootReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      action.todo.id = state.todos.length + 1;
      console.log(action, 'sa');
      action.todo.date =  action.todo.date.year + "-" + action.todo.date.month + "-"+action.todo.date.day
      let local_todo =[ Object.assign({}, action.todo), ...state.todos]
      localStorage.setItem('todoList',JSON.stringify(local_todo));
      return {
        todos: local_todo
      };

    case TOGGLE_TODO:
      console.log(state.todos,"todos");
      localStorage.setItem('todoList',state.todos);
      return {
        todos: state.todos.map((item) =>
          item.id === action.id
            ? Object.assign({}, item, { isCompleted: !item.isCompleted })
            : item
        ),
    
      };

    case UPDATE_TODOS:
      return;
      
    case LOCAL_STORAGE:
      if (localStorage.getItem("todoList") === null) {
        let todo_res = []
        localStorage.setItem('todoList',JSON.stringify(todo_res));
      }
    
      console.log(typeof(localStorage.getItem('todoList')))
      
      let t = localStorage.getItem('todoList');
      if (typeof t !== 'undefined' && t !== null){
        t=JSON.parse(localStorage.getItem('todoList'));
      }
      return {
        todos: t
      };

    case REMOVE_TODO:
      console.log(state.todos,"todos");
      let todo_res = state.todos.filter((i) => i.id != action.id)
      localStorage.setItem('todoList',JSON.stringify(todo_res));
      return {
        todos: state.todos.filter((i) => i.id != action.id),
      };

  
  }
  return state;
}





