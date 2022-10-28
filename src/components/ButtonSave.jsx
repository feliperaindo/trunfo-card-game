import { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonSave extends Component {
  render() {
    const {
      className: aliasClassName,
      dataTestId,
      onSaveButtonClick,
      isSaveButtonDisabled } = this.props;

    return (
      <button
        className={ aliasClassName }
        type="button"
        data-testid={ dataTestId }
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
      >
        Salvar
      </button>
    );
  }
}

ButtonSave.propTypes = {
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  isSaveButtonDisable: PropTypes.func,
  osSaveButtonClick: PropTypes.func,
}.isRequired;

export default ButtonSave;
