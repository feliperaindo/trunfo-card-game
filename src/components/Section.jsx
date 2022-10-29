import { Component } from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import Input from './Input';
import Card from './Card';
import ButtonDelete from './ButtonDelete';

class Section extends Component {
  state = { filterInput: '' };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.filterCards);
  };

  filterCards = () => {
    const { filterInput } = this.state;
    const { savedCards } = this.props;

    if (filterInput.length === 0) {
      return savedCards;
    }
    return savedCards.filter(({ cardName }) => cardName.toLowerCase()
      .includes(filterInput.toLowerCase()));
  };

  render() {
    const { deleteCardSelected, savedCards } = this.props;
    const { filterInput } = this.state;
    const filteredCards = this.filterCards();

    const allCardsSaved = (savedCards.length > 0)
      ? filteredCards.map((eachCardSaved) => (
        <>
          <Card
            cardName={ eachCardSaved.cardName }
            cardDescription={ eachCardSaved.cardDescription }
            cardAttr1={ eachCardSaved.cardAttr1 }
            cardAttr2={ eachCardSaved.cardAttr2 }
            cardAttr3={ eachCardSaved.cardAttr3 }
            cardImage={ eachCardSaved.cardImage }
            cardRare={ eachCardSaved.cardRare }
            cardTrunfo={ eachCardSaved.cardTrunfo }
          />
          <ButtonDelete
            cardName={ eachCardSaved.cardName }
            deleteCardSelected={ deleteCardSelected }
          />
        </>
      ))
      : <span>Vocẽ ainda não tem cartas salvas</span>;

    return (
      <>
        <Label
          className="input-filter"
          id="filter-name-input"
          contentText="Pesquise pelo nome da carta"
        />
        <Input
          type="text"
          name="filterInput"
          id="filter-name-input"
          dataTestId="name-filter"
          onInputChange={ this.onInputChange }
          value={ filterInput }
        />
        {allCardsSaved}
      </>
    );
  }
}

Section.defaultProps = {
  deleteCardSelected: 'inform a function for deleteCardSelected',
  savedCards: 'provide an array for savedCards',
};

Section.propTypes = {
  deleteCardSelected: PropTypes.func,
  savedCards: PropTypes.arrayOf(PropTypes.shape(
    {
      key: PropTypes.string,
      cardName: PropTypes.string,
      cardDescription: PropTypes.string,
      cardAttr1: PropTypes.string,
      cardAttr2: PropTypes.string,
      cardAttr3: PropTypes.string,
      cardImage: PropTypes.string,
      cardRare: PropTypes.string,
      cardTrunfo: PropTypes.bool,
    },
  )),
};

export default Section;
