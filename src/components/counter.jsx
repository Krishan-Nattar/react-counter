import React, { Component } from "react";

class Counter extends Component {
  
  componentDidUpdate(prevProps) {
    
    console.log('prevprops',prevProps);

  }

  componentWillUnmount(){
    // console.log("counter will unmount");
  }

  render() {    
    
    return (
      <div>
        
        {this.props.children}
        <span className={this.checkValue() + " badge m-2"}>
          {this.formatValue()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={()=>this.props.onDecrement(this.props.counter)}
        >
          Decrement
        </button>
        <button
        className="btn btn-danger btn-sm m2"
        onClick = {()=>this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }

  checkValue() {
    const value = this.props.counter.value;
    return value == 0 ? "badge-primary" : "badge-warning";
  }

  formatValue() {
    const value = this.props.counter.value;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
