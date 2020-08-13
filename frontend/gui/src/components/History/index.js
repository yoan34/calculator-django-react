import React, { Component } from 'react';
import axios from 'axios';
import './History.css';

const OPERATIONS = {'add': 'Addition', 'sub': 'Subtraction','mul': 'Multiplication', 'div': 'Division'}

const HistoryView = ({operation, number}) => (
    <div className='history__view'>{OPERATIONS[operation]} - {number}</div>
);

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterID: undefined,
            lengthAPI: undefined
        }
    }

    handleDelete = () => {
        const {counterID, lengthAPI} = this.state;
        for (let i=counterID; i < counterID+lengthAPI+1; i++) {
            axios.delete(`http://127.0.0.1:8000/api/${i}/`)
        }
        this.props.onDeleteHistory();
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
          .then(res => {
              if (res.data.length > 0) {
                this.setState({
                    lengthAPI: res.data.length,
                    counterID: res.data[0].id,
                });
              }
          });
      }

    render() {
      const {history} = this.props;
      const historyList = history.slice(-10)
      return (
        <div className="history">
            <div className='history__title'>Last 10 calculations</div>
            <div className='history__container'>
                {historyList.reverse().map((item, index) => (
                    <HistoryView  key={index} operation={item.operation} number={item.number} />
                ))}
            </div>
            <form onSubmit={this.handleDelete}>
                <button className='history__button' type='submit'>
                    <span className='history__button__text'>
                        DELETE
                    </span>
                </button>
            </form>
            
            
        </div>
    );
    }
  }
  
  export default History;
