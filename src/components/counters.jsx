import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {

    const {onReset, onDelete, onIncrement, onDecrement, counters} = this.props;
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}
        >
          Reset
        </button>
        {counters.map(item => {
          return (
            <Counter key={item.id} onDelete={onDelete} counter={item} onIncrement={onIncrement} onDecrement ={onDecrement}>
            </Counter>
          );
        })}
      </div>
    );
  }
}

export default Counters;
