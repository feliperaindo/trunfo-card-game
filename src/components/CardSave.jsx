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
      classApply,
    } = this.props;

    const validateTrunfo = (cardTrunfo)
      ? <span data-testid="trunfo-card" className="super-trunfo">Super Trunfo</span>
      : null;

    return (
      <section className="card-section">
        <span className="title-card">{cardName}</span>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="img-card"
        />
        <span
          data-testid="rare-card"
          className={ `${classApply[0]} ${classApply[1]}` }
        >
          {cardRare}
        </span>
        <fieldset className="fieldset-atributes">
          <span>Descrição:</span>
          <p data-testid="description-card">{cardDescription}</p>
        </fieldset>
        <fieldset className="fieldset-atributes">
          <div className="div-atributes">
            <span>Atributo 1...........</span>
            <span data-testid="attr1-card" className="atribute">{cardAttr1}</span>
          </div>
          <div className="div-atributes">
            <span>Atributo 2...........</span>
            <span data-testid="attr2-card" className="atribute">{cardAttr2}</span>
          </div>
          <div className="div-atributes">
            <span>Atributo 3...........</span>
            <span data-testid="attr3-card" className="atribute">{cardAttr3}</span>
          </div>
        </fieldset>
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
  classApply: 'inform a classApply',
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
  classApply: PropTypes.arrayOf(PropTypes.string),
};

export default Card;
