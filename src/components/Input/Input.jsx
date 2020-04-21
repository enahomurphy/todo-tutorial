import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './input.style.scss';

class Input extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue,
      defaultValue: props.defaultValue,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.defaultValue !== state.defaultValue) {
      return {
        ...state,
        defaultValue: props.defaultValue,
      };
    }
    // Return null to indicate no change to state.
    return null;
  }

  render() {
    const { onInputChange, onSubmit, placeholder } = this.props;
    const { value, defaultValue } = this.state;
    return (
      <div className="input">
        <input
          type="text"
          onChange={(e) => {
            this.setState({ value: e.target.value });
            onInputChange(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.which === 13) {
              onSubmit(value || defaultValue);
              this.setState({ value: '' });
            }
          }}
          placeholder={placeholder}
          value={value || defaultValue}
        />
      </div>
    );
  }
}

Input.defaultProps = {
  onSubmit: () => {},
  defaultValue: '',
  placeholder: '',
  onInputChange: () => {},
};

Input.propTypes = {
  onInputChange: PropTypes.func,
  onSubmit: PropTypes.func,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
