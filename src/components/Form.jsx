/* eslint-disable max-lines */
import { Component } from 'react';
import PropTypes from 'prop-types';
import '../style.css';
import Input from './Input';
import Label from './Label';

class Form extends Component {
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

    const trunfoText = `Defina se sua carta será um carta super trunfo ou não
    (deve existir apenas uma carta super trunfo no baralho).`;

    const elementNoTrunfoCard = (
      <>
        <Label
          className="form-text-relate"
          id="trunfo-input"
          contentText={ trunfoText }
        />
        <Input
          type="checkbox"
          name="cardTrunfo"
          id="trunfo-input"
          dataTestId="trunfo-input"
          cardTrunfo={ cardTrunfo }
          onInputChange={ onInputChange }
        />

      </>

    );

    const checkTrunfo = hasTrunfo
      ? <span>Você já tem um Super Trunfo em seu baralho</span>
      : elementNoTrunfoCard;

    return (
      <form action="">
        <h2 className="title-form">Crie uma nova carta</h2>
        <fieldset>
          <Label
            id="name-input"
            className="form-text-relate"
            contentText="Nome da carta"
          />
          <Input
            type="text"
            name="cardName"
            id="name-input"
            dataTestId="name-input"
            onInputChange={ onInputChange }
            value={ cardName }
          />
          <Label
            id="img-input"
            className="form-text-relate"
            contentText="URL para a imagem da carta"
          />
          <Input
            type="text"
            name="cardImage"
            id="img-input"
            dataTestId="image-input"
            value={ cardImage }
            onInputChange={ onInputChange }
          />
          <Label
            id="text-area-input"
            className="form-text-relate"
            contentText="Descrição da carta"
          />
          <Input
            type="textarea"
            name="cardDescription"
            id="text-area-input"
            dataTestId="description-input"
            value={ cardDescription }
            onInputChange={ onInputChange }
          />
        </fieldset>
        <fieldset>
          <Label
            id="first-atribute-input"
            className="form-text-relate"
            contentText="Primeiro atributo"
          />
          <Input
            type="number"
            name="cardAttr1"
            id="first-atribute-input"
            className="form-atributes"
            dataTestId="attr1-input"
            minAndMax={ ['0', '90'] }
            value={ cardAttr1 }
            onInputChange={ onInputChange }
          />
          <Label
            id="second-atribute-input"
            className="form-text-relate"
            contentText="Segundo atributo"
          />
          <Input
            type="number"
            name="cardAttr2"
            id="second-atribute-input"
            className="form-atributes"
            dataTestId="attr2-input"
            minAndMax={ ['0', '90'] }
            value={ cardAttr2 }
            onInputChange={ onInputChange }
          />
          <Label
            id="third-atribute-input"
            className="form-text-relate"
            contentText="Terceiro atributo"
          />
          <Input
            type="number"
            name="cardAttr3"
            id="third-atribute-input"
            className="form-atributes"
            dataTestId="attr3-input"
            minAndMax={ ['0', '90'] }
            value={ cardAttr3 }
            onInputChange={ onInputChange }
          />
        </fieldset>
        <div>
          <label htmlFor="rare-input" className="form-text-relate">
            Raridade da carta
            <select
              name="cardRare"
              id="rare-input"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
              {/* <option value="" disabled hidden>Selecione uma opção</option> */}
            </select>
          </label>
          {checkTrunfo}
          <button
            className="button-save-card"
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.defaultProps = {
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

Form.propTypes = {
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

export default Form;

// <form action="">
//        <h2 className="title-form">Crie uma nova carta</h2>
//        <fieldset>
//          <label htmlFor="name-input" className="form-text-relate">
//            Nome da carta
//            <input
//              type="text"
//              name="cardName"
//              id="name-input"
//              data-testid="name-input"
//              value={ cardName }
//              onChange={ onInputChange }
//            />
//          </label>
//          <label htmlFor="img-input" className="form-text-relate">
//            URL para a imagem da carta
//            <input
//              type="text"
//              name="cardImage"
//              id="img-input"
//              data-testid="image-input"
//              value={ cardImage }
//              onChange={ onInputChange }
//            />
//          </label>
//          <label htmlFor="text-area-input" className="form-text-relate">
//            Descrição da carta
//            <input
//              type="textarea"
//              name="cardDescription"
//              id="text-area-input"
//              data-testid="description-input"
//              value={ cardDescription }
//              onChange={ onInputChange }
//            />
//          </label>
//        </fieldset>
//        <fieldset>
//          <label htmlFor="first-atribute-input" className="form-text-relate">
//            Primeiro atributo
//            <input
//              className="form-atributes"
//              type="number"
//              name="cardAttr1"
//              id="first-atribute-input"
//              data-testid="attr1-input"
//              min="0"
//              max="90"
//              value={ cardAttr1 }
//              onChange={ onInputChange }
//            />
//          </label>
//          <label htmlFor="second-atribute-input" className="form-text-relate">
//            Segundo atributo
//            <input
//              className="form-atributes"
//              type="number"
//              name="cardAttr2"
//              id="second-atribute-input"
//              data-testid="attr2-input"
//              min="0"
//              max="90"
//              value={ cardAttr2 }
//              onChange={ onInputChange }
//            />
//          </label>
//          <label htmlFor="third-atribute-input" className="form-text-relate">
//            Terceiro atributo
//            <input
//              className="form-atributes"
//              type="number"
//              name="cardAttr3"
//              id="third-atribute-input"
//              data-testid="attr3-input"
//              min="0"
//              max="90"
//              value={ cardAttr3 }
//              onChange={ onInputChange }
//            />
//          </label>
//        </fieldset>
//        <div>
//          <label htmlFor="rare-input" className="form-text-relate">
//            Raridade da carta
//            <select
//              name="cardRare"
//              id="rare-input"
//              data-testid="rare-input"
//              value={ cardRare }
//              onChange={ onInputChange }
//            >
//              <option value="normal">Normal</option>
//              <option value="raro">Raro</option>
//              <option value="muito raro">Muito raro</option>
//              {/* <option value="" disabled hidden>Selecione uma opção</option> */}
//            </select>
//          </label>
//          {checkTrunfo}
//          <button
//            className="button-save-card"
//            type="button"
//            data-testid="save-button"
//            disabled={ isSaveButtonDisabled }
//            onClick={ onSaveButtonClick }
//          >
//            Salvar
//          </button>
//        </div>
//      </form>
