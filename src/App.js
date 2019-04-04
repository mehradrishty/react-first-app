import React, { Component } from 'react';
import './App.css';
import List from './components/list';
import Form from './components/formfunction';
import Tree from './components/treeviewfunction';

class App extends Component {

  constructor(){
    super();
    this.onItemAdd = this.onItemAdd.bind(this);
    this.onItemSort = this.onItemSort.bind(this);
    this.onItemDelete = this.onItemDelete.bind(this);
  }

  state = {
    datalist : [
      {
        id: 1,
        name: 'Rob',
        phone: '12345',
        place: 'New York',
        gender: 'male',
        isActive: true
      },{
        id: 2,
        name: 'John',
        phone: '6789',
        place: 'Frankfurt',
        gender: 'male',
        isActive: false
      },{
        id: 3,
        name: 'Cersie',
        phone: '6595',
        place: 'Marburg',
        gender: 'female',
        isActive: true
      },{
        id: 4,
        name: 'Arya',
        phone: '258',
        place: 'Hamburg',
        gender: 'female',
        isActive: false
      }
    ]
  }

  onItemAdd(itemToBeAdded){
    this.setState(state => ({
      datalist: [
        ...state.datalist,
        itemToBeAdded
      ]
    }));
  }

  onItemDelete(item){
    let tempArr = [...this.state.datalist];
    let indexItem = tempArr.indexOf(item);
    if(indexItem>-1){
      tempArr.splice(indexItem, 1);
      this.setState({datalist: tempArr});
    }
  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  onItemSort(key){
    let arrayCopy = [...this.state.datalist];
    arrayCopy.sort(this.compareBy(key));
    this.setState({datalist: arrayCopy});
  }

  render() {
    return (
        <div>
          <div className='headerclass'>Welcome to the world of Game of thrones !</div>
          <br/>
          <br/>
          <Form onItemAdd={this.onItemAdd} />
          <br/>
          <br/>
          <List onItemSort={this.onItemSort} items={this.state.datalist} onItemDelete={this.onItemDelete}/>
          <br/>
          <br/>
          <Tree items={this.state.datalist} />
        </div>

    );
  }
}

export default App;
