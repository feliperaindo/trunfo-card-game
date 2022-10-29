import { Component } from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import Input from './Input';
import Card from './Card';
import ButtonDelete from './ButtonDelete';

class Section extends Component {
  render() {
    const {
      onInputChange,
      savedCards,
      deleteCardSelected,
    } = this.props;

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
        <ButtonDelete
          cardName={ eachCardSaved.cardName }
          deleteCardSelected={ deleteCardSelected }
        />
      </>
    ));

    return (
      <>
        {/* <Label
          className="input-filter"
          id="filter-name-input"
          contentText="Pesquise pelo nome da carta"
        />
        <Input
          type="text"
          name="filter-name"
          id="filter-name-input"
          dataTestId="name-filter"
          onInputChange={ onInputChange }
          value={ filterInput } */}
        />
        {allCardsSaved}
      </>
    );
  }
}

Section.defaultProps = {
  onInputChange: 'inform a function for onInputChange',
  deleteCardSelected: 'inform a function for deleteCardSelected',
  savedCards: 'provide an array for savedCards',
};

Section.propTypes = {
  onInputChange: PropTypes.func,
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
