import { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Card from './Card';

class Main extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <main key="main-key">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </main>
    );
  }
}

Main.defaultProps = {
  cardName: 'inform a cardName',
  cardDescription: 'inform a cardDescription',
  cardAttr1: 'inform a cardAttr1',
  cardAttr2: 'inform a cardAttr2',
  cardAttr3: 'inform a cardAttr3',
  cardImage: 'inform a cartImage',
  cardRare: 'inform a cardRare',
  cardTrunfo: 'inform a cartTrunfo',
  hasTrunfo: 'inform a hasTrunfo',
  isSaveButtonDisabled: 'inform a isSaveButtonDisabled',
  onInputChange: 'inform a onInputChange',
  onSaveButtonClick: 'inform a onSaveButtonClick',
};

Main.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Main;
