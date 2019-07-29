import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
      { id: 5, value: 0 }
    ]
  };

  handleReset = () => {
    let counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = count => {
    const counters = this.state.counters.map(counter => {
      console.log(counter === count);
      if (counter.id === count.id) {
        counter.value++;
        return counter;
      }
      return counter;
    });

    this.setState({ counters });
  };

  // handleIncrement = (counter)=>{
  // //  Why does this one work?
  //   const counters = this.state.counters;
  //   const index = counters.indexOf(counter);
  //   counters[index] = {...counter};
  //   counters[index].value++;

  //   this.setState({counters});
  //   }

  handleDecrement = counterObj => {
    const counters = this.state.counters.map(counter => {
      if (counter === counterObj) {
        if (counter.value > 0) {
          counter.value--;
        }

        return counter;
      }
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    let counters = this.state.counters.filter(item => {
      return item.id !== counterId;
    });

    this.setState({ counters }); //This could alternatively have been counters: newArray

    //if you make the key and value the same name, you only have to include the one name in the setState function
  };

  render() {
    const totalValues = this.state.counters.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);

    return (
      <React.Fragment>
        <NavBar totalValues={totalValues} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
