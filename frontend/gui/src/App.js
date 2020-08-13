import React from 'react';
import axios from 'axios';
import ContainerApp from './containers/ContainerApp/index';
import Header from './components/Header';
import History from './components/History';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'calculator',
      operation: '',
      value: 0,
      number: 0,
      history: [],
      counterID: undefined,
      lengthAPI: undefined,
    }
  }
  
  onChangeView = () => {
    const view_copy = this.state.view;
    this.setState({view: view_copy === 'calculator' ? 'history' : 'calculator'})
  }
  onChangeOperation = (_e, {value}) => {
    this.setState({operation: value})
  };
  onDeleteHistory = () => {
    this.setState({history: []})
  }
  onValueChange = (e) => {
    this.setState({value: e.target.value})
  }
  calculate = (a,b,op) => {
    a = parseFloat(a)
    b = parseFloat(b)
    let res = 0
    switch(op) {
      case 'add':
        res = Math.round((a+b + Number.EPSILON)*100)/100
        break;
      case 'sub':
        res = Math.round((a-b + Number.EPSILON)*100)/100
        break;
      case 'mul':
        res = Math.round((a*b + Number.EPSILON)*100)/100
        break;
      case 'div':
        res = Math.round((a/b + Number.EPSILON)*100)/100
        break;
        }
    this.setState({number: res, history: [...this.state.history, {number: res, operation: op}]});
    return res;
    }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({
          history: res.data,
          number: res.data.length > 0 ? res.data[res.data.length-1].number : 0,
        });
        console.log(res.data)
      })
  }

  render() {
    const {value, operation, number, view, history} = this.state;
    return (
    <div className="App">
      <Header onChangeView={this.onChangeView} view={view} />
      {view === 'calculator'
      ? 
      <ContainerApp
        onChangeOperation={this.onChangeOperation}
        onValueChange={this.onValueChange}
        calculate={this.calculate}
        value={value}
        operation={operation}
        number={number}
      />
      : <History history={history} onDeleteHistory={this.onDeleteHistory} />
    }
    </div>
  );
  }
}

export default App;
