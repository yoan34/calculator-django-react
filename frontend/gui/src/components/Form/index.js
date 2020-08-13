import React from 'react';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react';

import imgPlus from '../../img/plus.png';
import imgMinus from '../../img/minus.png';
import './Form.css';


const ItemWithImg = ({name, img, turn}) => {
  return (
    <div className='item__container'>
      <div className='item__text'>{name}</div>
      <img className={turn ? 'item__img--turn' : 'item__img--noTurn'} src={img} alt={name} />
    </div>
  );
}

const options = [
  { key: 1, text: <ItemWithImg name="Addition" img={imgPlus} turn={false} />, value: 'add'},
  { key: 2, text: <ItemWithImg name="Subtraction" img={imgMinus} turn={false} />, value: 'sub'},
  { key: 3, text: <ItemWithImg name="Division" img={imgMinus} turn={true} />, value: 'div'},
  { key: 4, text: <ItemWithImg name="Multiplication" img={imgPlus} turn={true} />, value: 'mul'},
]

class Form extends React.Component {
  
  handleFormSubmit = (e) => {
    e.preventDefault();
    const counter = e.target.elements.value.value;
    const operation = this.props.operation;
    if (operation === '' || (operation === 'div' && counter == 0)) {
      return;
    }
    const result = this.props.calculate(this.props.number, counter, operation)
    return axios.post('http://127.0.0.1:8000/api/', {
      number: result,
      operation: operation,
    })
    .then(res => console.log(res))
    .catch(error => console.err(error));
  }

  render() {
    const {onChangeOperation, operation, onValueChange, value} = this.props;
    return(
        <form className='form' onSubmit={this.handleFormSubmit}>
          <div className='container__form__input'>
            <Dropdown
              fluid
              options={options}
              selection
              placeholder="Select an operation"
              onChange={onChangeOperation}
              name='item'
              value={operation}
              style={{height: '48px'}}
            />
            <input
              className="input"
              type='number'
              name='value'
              placeholder="Value"
              onChange={onValueChange}
              value={value}
              />
          </div>
          <button type="submit" className='button__submit'>
            <span className='button__text'>VALIDATE</span>
          </button>
        </form>
    );
  }
}

export default Form

