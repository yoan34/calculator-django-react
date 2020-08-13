import React from 'react';
import Counter from '../../components/Counter';
import Form from '../../components/Form';
import './ContainerApp.css';

const ContainerApp = ({
  onChangeOperation,
  onValueChange,
  calculate,
  value,
  operation,
  number,
}) => 
  <div className="container__app">
    <Counter number={number} />
      <Form
        onChangeOperation={onChangeOperation}
        onValueChange={onValueChange}
        calculate={calculate}
        value={value}
        number={number}
        operation={operation}
      />
  </div>

  
  export default ContainerApp;

