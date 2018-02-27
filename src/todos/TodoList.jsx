import React, {Component,} from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from './todosActions';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.todoClick = this.todoClick.bind(this);
  }

  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo) => (
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => {
                this.todoClick(todo.id);
              }}
            />
          ))
        }
      </ul>
    );
  }

  todoClick(id) {
    this.props.onTodoClick(id);
  }
}

const mapStateToProps = (state) => {
  const todos = state.todosReducer || [];

  return {
    todos
  }
};

const mapDispatchToProps = (dispatch) => ({
  dispatchToggleTodo: (id) => dispatch(toggleTodo(id))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  onTodoClick: (id) => dispatchProps.dispatchToggleTodo(id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodoList);
