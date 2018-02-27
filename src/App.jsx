import React, {Component,} from 'react';
import TodoList from './todos/TodoList';
import AddTodo from './todos/AddTodo';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AddTodo/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
