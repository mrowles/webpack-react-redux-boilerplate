import React, {Component,} from 'react';
import {connect} from 'react-redux';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </li>
    );
  }
}

const mapStateToProps = (state) => ({
  onClick: state.onClick
});

const mapDispatchToProps = () => ({});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...ownProps
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Todo);
