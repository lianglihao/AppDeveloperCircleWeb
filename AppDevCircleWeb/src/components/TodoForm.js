import React, { Component } from 'react';
import { inject } from 'mobx-react';
import './TodoForm.css'

@inject(({store}) => ({
  todo: store.todo
}))
class TodoForm extends Component {
  state = {
    title: ''
  }

  _handleInput = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  _handleAdd = () => {
    const { title } = this.state;
    if (title.length) {
      this.props.todo.addTodo({
        title
      })
      this.setState({
        title: ''
      })
    }
  }

  render() {

    return (
      <div className="TodoForm">
        <input onChange={this._handleInput}
          type="text"
          value={this.state.title}
        />
        <button onClick={this._handleAdd}>ADD</button>
      </div>
    );
  }
}

export default TodoForm
