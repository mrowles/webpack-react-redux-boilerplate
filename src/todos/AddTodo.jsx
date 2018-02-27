import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './todosActions';

class AddTodo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
        >
          <input
            ref={(node) => {
              this.state.input = node
            }}
          />

          <button
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.state.input.value.trim()) {
      return;
    }

    this.props.onAddTodo(this.state.input.value);
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddTodo: (val) => {
    return dispatch(addTodo(val));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...ownProps,
  onAddTodo: (val) => dispatchProps.dispatchAddTodo(val)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddTodo);
