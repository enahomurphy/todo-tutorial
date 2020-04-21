import React, { PureComponent } from 'react';
import './input.style.scss';

class Input extends PureComponent {
  render() {
    return (
      <div className="input">
        <input
          type="text"
          onChange={() => {}}
          placeholder="My todo text"
        />
      </div>
    );
  }
}

Input.propTypes = {

};

export default Input;
