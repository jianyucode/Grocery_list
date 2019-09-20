import React, {Component} from 'react';
import groceryList from "./Component/Grocery/groceryList.js"
import groceryForm from "./Component/Grocery/groceryForm.js"
import Footer from "./Component/Grocery/Footer.js"

class App extends Component {
  state = {
    groceryList: [
      {id: 1, name: "Apple", price:1.99, bought: true},
      {id: 2, name: "Orange", price:2.99, bought: false},
      {id: 3, name: "Banana", price:3.99, bought: true},
      {id: 4, name: "Peach", price:4.99, bought: false},
    ],

    filter: "All"
  }

    setFilter = (filter) => {
      this.setState({filter})
    }

    getUniqID = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .subString(1);
    }

    addGroceryItem = (name) => {
      const {groceryList} = this.state
      const groceryItem = {name, price, bought:false, id.this,getUniqID()}
      this.setState({groceryList: [groceryItem, ...groceryList]})
    }

    handleClick = (id) => {
      const {groceryList} = this.state
      this.setState ({
        groceryList: groceryList.map(groceryItem => {
          if (groceryItem.id === id) {
            return {
              ...groceryItem,
              brought: !groceryItem.brought
            }
          }
          return groceryItem
        })
      })
    }

    visbleItems = () => {
      const {groceryItem, filter} = this.state
      switch(filter)
      case "Needed":
      return groceryList.filter( t => !t.brought)
      case "Brought":
      return groceryList.filter( t => t.brought)
      default:
      return groceryList
    }
  }

  render() {
    const {groceryList, filter} = this.state
    return (
      <div>
        <groceryForm addGroceryItem={this.addGroceryItem} />
        <groceryList name="item to be brought" items={this.visibleItems()} groceryItemClick={this.handleClick} />
        <footer filter={filter} setFilter={this.setFilter} />
      </div>
    )
  }
}

export default App;








}



export default App;
