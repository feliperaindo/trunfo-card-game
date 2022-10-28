import { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonDelete extends Component {
  render() {
    const { cardName, deleteCardSelected } = this.props;
    return (
      <button
        onClick={ deleteCardSelected }
        type="button"
        key={ `${cardName}-button` }
        id={ `${cardName}-button` }
        data-testid="delete-button"
      >
        Excluir
      </button>
    );
  }
}

ButtonDelete.defaultProps = {
  cardName: 'informe a cardName',
  deleteCardSelected: 'informe a deleteCardSelected',
};

ButtonDelete.propTypes = {
  cardName: PropTypes.string,
  deleteCardSelected: PropTypes.func,
};

export default ButtonDelete;
