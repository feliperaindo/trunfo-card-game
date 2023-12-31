import { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';
import Select from './Select';
import ButtonSave from './ButtonSave';

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
      <div className="div-trunfo">
        <label htmlFor="trunfo-input" className="trunfo-input">
          <input
            type="checkbox"
            name="cardTrunfo"
            id="trunfo-input"
            data-testid="trunfo-input"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          />
          Super Trufo
        </label>
        <span>{trunfoText}</span>
      </div>

    );

    const noTrunfo = <span>Você já tem um Super Trunfo em seu baralho</span>;

    const checkTrunfo = hasTrunfo
      ? <div className="div-trunfo">{noTrunfo}</div>
      : elementNoTrunfoCard;

    return (
      <form action="">
        <h2 className="title-form">Crie uma nova carta</h2>
        <fieldset className="fieldset-info-form">
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
        <div>
          <fieldset className="fieldset-atributes-form">
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
          <fieldset className="fieldset-atributes-form">
            <Label
              id="rare-input"
              className="form-text-relate"
              contentText="Raridade da carta"
            />
            <Select
              name="cardRare"
              id="rare-input"
              dataTestId="rare-input"
              value={ cardRare }
              onInputChange={ onInputChange }
            />
            {checkTrunfo}
          </fieldset>
        </div>
        <ButtonSave
          className="button-save-card"
          dataTestId="save-button"
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
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
