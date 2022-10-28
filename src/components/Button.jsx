import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
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

Button.defaultProps = {
  cardName: 'informe a cardName',
  deleteCardSelected: 'informe a deleteCardSelected',
};

Button.propTypes = {
  cardName: PropTypes.string,
  deleteCardSelected: PropTypes.func,
};

export default Button;
