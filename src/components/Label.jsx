import { Component } from 'react';
import PropTypes from 'prop-types';

class Label extends Component {
  render() {
    const {
      className: aliasClassName,
      id: aliasId,
      contentText,
    } = this.props;

    return (
      <label
        htmlFor={ aliasId }
        className={ aliasClassName }
      >
        {contentText}
      </label>
    );
  }
}

Label.defaultProps = {
  className: 'Provide a string as a className',
  id: 'Provide a string as a id',
  contentText: 'Provide a string as a contentText',

};

Label.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  contentText: PropTypes.string,

};

export default Label;
