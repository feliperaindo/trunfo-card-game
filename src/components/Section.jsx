import { Component } from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import Input from './Input';
import Card from './Card';
import ButtonDelete from './ButtonDelete';
import SelectFilter from './SelectFilter';

class Section extends Component {
  state = { filterInput: '', rareFilter: 'all', cardsToShow: [] };

  componentDidMount() {
    const { savedCards } = this.props;
    this.setState({ cardsToShow: savedCards });
  }

  // componentDidUpdate() {
  //   const { savedCards } = this.props;
  //   this.setState({ cardsToShow: savedCards });
  // }

  onInputChange = ({ target }) => {
    const { name, value, type } = target;
    this.setState({ [name]: value }, () => { this.filterType(type); });
  };

  // filterType = (type) => {
  //   if (type === 'select') {
  //     this.filterCardsByRare();
  //   } else {
  //     this.filterCardsByName();
  //   }
  // };

  // filterCardsByName = () => {
  //   const { filterInput, cardsToShow } = this.state;
  //   const updateCardsToShow = (filterInput.length === 0)
  //     ? cardsToShow
  //     : cardsToShow.filter(({ cardName }) => cardName.toLowerCase()
  //       .includes(filterInput.toLowerCase()));
  //   this.setState({ cardsToShow: updateCardsToShow });
  // };

  // filterCardsByRare = () => {
  //   const { rareFilter, cardsToShow } = this.state;
  //   const updateCardsToShow = (rareFilter === 'all')
  //     ? cardsToShow
  //     : cardsToShow.filter(({ cardRare }) => cardRare === rareFilter);
  //   this.setState({ cardsToShow: updateCardsToShow });
  // };

  render() {
    const { deleteCardSelected, savedCards } = this.props;
    const { filterInput, rareFilter, cardsToShow } = this.state;

    const allCardsSaved = (savedCards.length > 0)
      ? savedCards.map((eachCardSaved) => (
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
        <Label
          className="rare-filter"
          id="filter-rare-input"
          contentText="Pesquise pela raridade da carta"
        />
        <SelectFilter
          name="rareFilter"
          id="filter-rare-input"
          dataTestId="rare-filter"
          value={ rareFilter }
          onInputChange={ this.onInputChange }
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
