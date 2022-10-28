import { Component } from 'react';
import LogoImage from '../image-web/Img-head.png';
import '../style.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="name-container">
          <h1 className="title-header">Super Trunfo</h1>
        </div>
        <div className="img-container">
          <img src={ LogoImage } alt="Logo" className="img-logo" />
        </div>
      </header>
    );
  }
}

export default Header;
