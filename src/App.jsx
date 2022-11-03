import { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import './style.css';

class App extends Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    classApply: ['rare-card'],
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
  };

  // Funções para Validação de string
  validateValue = (string) => ((string.length > 0) ? string : false);

  stringInputsValidation = () => {
    const { cardName, cardImage, cardDescription, cardRare } = this.state;
    const allCardInfo = [
      this.validateValue(cardName),
      this.validateValue(cardImage),
      this.validateValue(cardDescription),
      this.validateValue(cardRare),
    ];
    return (allCardInfo.includes(false)) ? 'Empty box!' : true;
  };

  // Funções para validação de Números
  sumPoints = (numbers) => numbers
    .reduce((total, eachNumber) => total + eachNumber, 0);

  validatePoints = (num) => {
    const toNumber = Number(num);
    const maxAllowed = 90;
    const minAllowed = 0;
    return (toNumber <= maxAllowed && toNumber >= minAllowed) ? toNumber : false;
  };

  numbersInputsValidation = () => {
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
    return (sum > maxAllowed)
      ? 'Cart can not have a sum of all attributes high than 210 points'
      : true;
  };

  // Funções para gerenciamento de estado
  cleanForm = () => {
    this.setState({ cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true });
  };

  changeClassRare = () => {
    const { cardRare } = this.state;
    const getElement = document.querySelector('.rare-card');
    switch (cardRare) {
    case 'normal':
      getElement.className = 'rare-card';
      getElement.classList.add('normal');
      this.setState({ classApply: ['rare-card', 'normal'] });
      break;
    case 'raro':
      getElement.className = 'rare-card';
      getElement.classList.add('rare');
      this.setState({ classApply: ['rare-card', 'rare'] });
      break;
    case 'muito raro':
      getElement.className = 'rare-card';
      getElement.classList.add('very-rare');
      this.setState({ classApply: ['rare-card', 'very-rare'] });
      break;
    default: getElement.className = 'rare-card';
      break;
    }
  };

  saveButtonValidation = () => {
    this.changeClassRare();
    const checkStringInputs = this.stringInputsValidation();
    const checkNumbersInputs = this.numbersInputsValidation();
    if (typeof checkStringInputs === 'boolean'
    && typeof checkNumbersInputs === 'boolean') {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = ({ target }) => {
    const { name, value, type } = target;
    const checkInput = (type === 'checkbox') ? target.checked : value;
    this.setState({ [name]: checkInput }, this.saveButtonValidation);
  };

  onSaveButtonClick = () => {
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
      classApply,
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
      classApply,
    };

    const newSavedCards = [...savedCards, cardToSave];

    this.setState({ savedCards: newSavedCards, hasTrunfo: cardTrunfo }, this.cleanForm);
  };

  deleteCardSelected = ({ target }) => {
    const { savedCards } = this.state;
    const { id } = target;
    const getCardName = id.replace('-button', '');

    const { cardTrunfo } = savedCards.find(({ cardName }) => cardName === getCardName);
    const newArrayRemovedItem = savedCards
      .filter(({ cardName }) => cardName !== getCardName);

    if (cardTrunfo) {
      this.setState({ savedCards: newArrayRemovedItem, hasTrunfo: false });
    } else { this.setState({ savedCards: newArrayRemovedItem }); }
  };

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

    return (
      <>
        <Header />
        <Main
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
        <Section
          savedCards={ savedCards }
          deleteCardSelected={ this.deleteCardSelected }
        />
        <Footer />
      </>
    );
  }
}

export default App;
