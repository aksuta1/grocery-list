import { Component } from 'react'
import icon from './check.png'

export class GroceryList extends Component {
  state = {
    userInput: '',
    groceryList: []
  }

  onChangeEvent(e) {
    this.setState({ userInput: e })
  }

  addItem(input) {
    if (input === '') {
      alert("please add an item")
    } else {
      let listArray = this.state.groceryList;
      listArray.push(input)
      this.setState({ groceryList: listArray, userInput: '' })
    }
  }

  deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({ groceryList: listArray })
  }
  onFormSubmit(e) {
    e.preventDefault();
  }

  crossedWord(event) {
    const line = event.target;
    line.classList.toggle('crossed');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <input type="text"
              placeholder="what do you want to buy?"
              onChange={(e) => { this.onChangeEvent(e.target.value) }}
              value={this.state.userInput} />
          </div>
          
          <div className="container">
            <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
          </div>

          <ul>
            {this.state.groceryList.map((item, index) => (
              <li onClick={this.crossedWord} key={index}>
                <img src={icon} width="20px" alt="check" />
                {item}</li>
            ))}
          </ul>

          <div className="container">
            <button onClick={() => this.deleteItem(this.state.deleteItem)} className="btn delete">Delete all</button>
          </div>
        </form>
      </div>
    )
  }
}