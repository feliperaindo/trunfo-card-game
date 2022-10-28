import { Component } from 'react';
import PropTypes from 'prop-types';
import '../style.css';

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
      <section data-testid="name-card" className="card-section">
        <span className="title-card">{cardName}</span>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <span data-testid="rare-card" className="rare-card very-rare">{cardRare}</span>
        <div>
          <p data-testid="description-card">{cardDescription}</p>
        </div>
        <fieldset>
          <div>
            <p data-testid="attr1-card">{cardAttr1}</p>
          </div>
          <div>
            <p data-testid="attr2-card">{cardAttr2}</p>
          </div>
          <div>
            <p data-testid="attr3-card">{cardAttr3}</p>
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
