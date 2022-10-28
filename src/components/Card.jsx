import { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
    } = this.props;

    const validateTrunfo = (cardTrunfo)
      ? <span data-testid="trunfo-card">Super Trunfo</span>
      : null;

    return (
      <section data-testid="name-card">
        <span>{cardName}</span>
        <br />
        <span data-testid="rare-card">{cardRare}</span>
        <br />
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <br />
        <div>
          <span data-testid="description-card">{cardDescription}</span>
          <br />
          <p data-testid="attr1-card">{cardAttr1}</p>
          <br />
          <p data-testid="attr2-card">{cardAttr2}</p>
          <br />
          <p data-testid="attr3-card">{cardAttr3}</p>
        </div>
        <br />
        {validateTrunfo}
      </section>
    );
  }
}

Card.defaultProps = {
  cardName: 'inform a cardName',
  cardDescription: 'inform a cardDescription',
  cardAttr1: 'inform a cardAttr1',
  cardAttr2: 'inform a cardAttr2',
  cardAttr3: 'inform a cardAttr3',
  cardImage: 'inform a cartImage',
  cardRare: 'inform a cardRare',
  cardTrunfo: 'inform a cartTrunfo',
};

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

export default Card;
