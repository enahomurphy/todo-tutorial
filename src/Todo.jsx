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

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(value) {
    this.setState(({ todos }) => {
      const todo = { id: todos.length + 1, title: value };

      return {
        todos: [...todos, todo],
      };
    });
  }

  render() {
    const { todos, defaultValue } = this.state;
    return (
      <div>
        <Input
          onSubmit={this.onSubmit}
          defaultValue={defaultValue}
          placeholder="Todo placeholder"
        />
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
