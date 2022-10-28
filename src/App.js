import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.saveButtonValidation = this.saveButtonValidation.bind(this);
    this.cleanForm = this.cleanForm.bind(this);
    this.deleteCardSelected = this.deleteCardSelected.bind(this);

    this.numbersInputsValidation = this.numbersInputsValidation.bind(this);
    this.validatePoints = this.validatePoints.bind(this);
    this.sumPoints = this.sumPoints.bind(this);

    this.stringInputsValidation = this.stringInputsValidation.bind(this);
    this.validateValue = this.validateValue.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  onInputChange({ target }) {
    const { name, value, type } = target;
    const checkInput = (type === 'checkbox') ? target.checked : value;
    this.setState({ [name]: checkInput }, this.saveButtonValidation);
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      savedCards,
    } = this.state;

    const cardToSave = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    const newSavedCards = [...savedCards, cardToSave];

    this.setState({ savedCards: newSavedCards, hasTrunfo: cardTrunfo }, this.cleanForm);
  }

  deleteCardSelected({ target }) {
    const { savedCards } = this.state;
    const { id } = target;
    const getCardName = id.replace('-button', '');

    const { cardTrunfo } = savedCards.find(({ cardName }) => cardName === getCardName);
    const newArrayRemovedItem = savedCards
      .filter(({ cardName }) => cardName !== getCardName);

    if (cardTrunfo) {
      this.setState({ savedCards: newArrayRemovedItem, hasTrunfo: false });
    } else { this.setState({ savedCards: newArrayRemovedItem }); }
  }

  cleanForm() {
    this.setState({ cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false });
  }

  saveButtonValidation() {
    const checkStringInputs = this.stringInputsValidation();
    const checkNumbersInputs = this.numbersInputsValidation();
    if (typeof checkStringInputs === 'boolean'
      && typeof checkNumbersInputs === 'boolean') {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  numbersInputsValidation() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const allCardPoints = [
      this.validatePoints(cardAttr1),
      this.validatePoints(cardAttr2),
      this.validatePoints(cardAttr3),
    ];

    if (allCardPoints.includes(false)) {
      return 'Invalid number! Power can`t be higher than 90 and lower than 0';
    }

    const sum = this.sumPoints(allCardPoints);
    const maxAllowed = 210;
    if (sum > maxAllowed) {
      return 'Cart can not have a sum of all attributes high than 210 points';
    }
    return true;
  }

  validatePoints(num) {
    const toNumber = Number(num);
    const maxAllowed = 90;
    const minAllowed = 0;
    return (toNumber <= maxAllowed && toNumber >= minAllowed) ? toNumber : false;
  }

  sumPoints(numbers) {
    return numbers.reduce((total, eachNumber) => total + eachNumber, 0);
  }

  stringInputsValidation() {
    const { cardName, cardImage, cardDescription, cardRare } = this.state;
    const allCardInfo = [
      this.validateValue(cardName),
      this.validateValue(cardImage),
      this.validateValue(cardDescription),
      this.validateValue(cardRare),
    ];
    if (allCardInfo.includes(false)) {
      return 'Empty box!';
    }
    return true;
  }

  validateValue(string) {
    const minAllowed = 0;
    return (string.length > minAllowed) ? string : false;
  }

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
      savedCards,
    } = this.state;

    const allCardsSaved = savedCards.map((eachCardSaved) => (
      <>
        <Card
          key={ eachCardSaved.cardName }
          cardName={ eachCardSaved.cardName }
          cardDescription={ eachCardSaved.cardDescription }
          cardAttr1={ eachCardSaved.cardAttr1 }
          cardAttr2={ eachCardSaved.cardAttr2 }
          cardAttr3={ eachCardSaved.cardAttr3 }
          cardImage={ eachCardSaved.cardImage }
          cardRare={ eachCardSaved.cardRare }
          cardTrunfo={ eachCardSaved.cardTrunfo }
        />
        <button
          onClick={ this.deleteCardSelected }
          type="button"
          key={ `${eachCardSaved.cardName}-button` }
          id={ `${eachCardSaved.cardName}-button` }
          data-testid="delete-button"
        >
          Excluir
        </button>
      </>
    ));

    return (
      <>
        <Header />
        <div>
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
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
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
        </div>
        <section>
          {allCardsSaved}
        </section>

      </>
    );
  }
}

export default App;
