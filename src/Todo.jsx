import React, { Component } from 'react';

import Input from './components/Input';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: 'Go to church',
        },
      ],
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Input />
        {
          todos.map(todo => (
            <h1 key={todo.id}>{todo.title}</h1>
          ))
        }
      </div>
    );
  }
}

export default Todo;
