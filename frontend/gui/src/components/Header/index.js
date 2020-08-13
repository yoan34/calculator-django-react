import React, { Component } from 'react';
import './Header.css';

const Header = ({onChangeView, view}) => 
  <div className="header">
    <button className='header__btn' onClick={onChangeView}>
      <span className="header__btn__text">{view === 'calculator' ? 'ACCESS HISTORY' : 'ACCESS CALCULATOR'}</span>
    </button>
  </div>

  
  export default Header;
