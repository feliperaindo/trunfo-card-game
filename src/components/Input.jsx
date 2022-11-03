import { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      className: aliasClassName,
      minAndMax,
      type: aliasType,
      name: aliasName,
      id: aliasId,
      dataTestId,
      cardTrunfo,
      value: aliasValue,
      onInputChange,
    } = this.props;

    switch (aliasType) {
    case 'checkbox':
      return (
        <input
          type={ aliasType }
          name={ aliasName }
          id={ aliasId }
          data-testid={ dataTestId }
          onChange={ onInputChange }
          checked={ cardTrunfo }
          className={ aliasClassName }
          key={ aliasId }
        />
      );
    case 'number':
      return (
        <input
          type={ aliasType }
          name={ aliasName }
          id={ aliasId }
          data-testid={ dataTestId }
          onChange={ onInputChange }
          value={ aliasValue }
          min={ minAndMax[0] }
          max={ minAndMax[1] }
          className={ aliasClassName }
          key={ aliasId }
        />
      );

    default:
      return (
        <input
          type={ aliasType }
          name={ aliasName }
          id={ aliasId }
          data-testid={ dataTestId }
          onChange={ onInputChange }
          value={ aliasValue }
          key={ aliasId }
        />
      );
    }
  }
}

Input.defaultProps = {
  type: 'Provide a string as a type',
  name: 'Provide a string as a name',
  id: 'Provide a string as a id',
  dataTestId: 'Provide a string as a dataTestId',
  cardTrunfo: false,
  onInputChange: 'Provide a function as a onChange',
  value: 'Provide a string as a value',
  className: 'Provide a string as a className',
  minAndMax: [],
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  dataTestId: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
  className: PropTypes.string,
  minAndMax: PropTypes.arrayOf(PropTypes.string),
};

export default Input;
