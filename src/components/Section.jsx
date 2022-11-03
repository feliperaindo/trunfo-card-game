import { Component } from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import Input from './Input';
import SelectFilter from './SelectFilter';
import CardSave from './CardSave';
import ButtonDelete from './ButtonDelete';

class Section extends Component {
  state = { filterInput: '', rareFilter: 'all', checkTrunfo: false };

  onInputChange = ({ target }) => {
    const { name, value, type } = target;
    const checkInput = (type === 'checkbox') ? target.checked : value;
    this.setState({ [name]: checkInput });
  };

  render() {
    const { deleteCardSelected, savedCards } = this.props;
    const { filterInput, rareFilter, checkTrunfo } = this.state;

    const checkSavedCards = () => ((savedCards === 0)
      ? (<span>Vocẽ ainda não tem cartas salvas</span>)
      : savedCards);

    const filterByName = (cards) => ((filterInput.length > 0)
      ? cards.filter(({ cardName }) => cardName.includes(filterInput))
      : cards);

    const filterByRare = (cards) => ((rareFilter !== 'all')
      ? cards.filter(({ cardRare }) => cardRare === rareFilter)
      : cards);

    const filterTrunfo = (cards) => ((checkTrunfo)
      ? cards.filter(({ cardTrunfo }) => cardTrunfo)
      : cards);

    const allCards = checkSavedCards();

    const filterCards = filterTrunfo(filterByRare(filterByName(allCards)));

    const renderCards = filterCards.map((eachCardSaved) => (
      <div key={ `${eachCardSaved.cardName}-key` }>
        <CardSave
          cardName={ eachCardSaved.cardName }
          cardDescription={ eachCardSaved.cardDescription }
          cardAttr1={ eachCardSaved.cardAttr1 }
          cardAttr2={ eachCardSaved.cardAttr2 }
          cardAttr3={ eachCardSaved.cardAttr3 }
          cardImage={ eachCardSaved.cardImage }
          cardRare={ eachCardSaved.cardRare }
          cardTrunfo={ eachCardSaved.cardTrunfo }
          classApply={ eachCardSaved.classApply }
        />
        <ButtonDelete
          cardName={ eachCardSaved.cardName }
          deleteCardSelected={ deleteCardSelected }
        />
      </div>
    ));

    return (
      <section key="main-section">
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
        <Input
          className="checkbox-filter-trunfo"
          type="checkbox"
          name="checkTrunfo"
          id="trunfo-filter-input"
          dataTestId="trunfo-filter"
          cardTrunfo={ checkTrunfo }
          onInputChange={ this.onInputChange }
        />
        {renderCards}
      </section>
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
