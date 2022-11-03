import { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      name: aliasName,
      id: aliasId,
      dataTestId,
      value: aliasValue,
      onInputChange,
    } = this.props;

    return (
      <select
        name={ aliasName }
        id={ aliasId }
        data-testid={ dataTestId }
        value={ aliasValue }
        onChange={ onInputChange }
      >
        <option value="normal">Normal</option>
        <option value="raro">Raro</option>
        <option value="muito raro">Muito raro</option>
      </select>
    );
  }
}

Select.defaultProps = {
  name: 'Provide a string as a name',
  id: 'Provide a string as a id',
  dataTestId: 'Provide a string as a dataTestId',
  onInputChange: 'Provide a function as a onChange',
  value: 'Provide a string as a value',
};

Select.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  dataTestId: PropTypes.string,
  onInputChange: PropTypes.func,
};

export default Select;
