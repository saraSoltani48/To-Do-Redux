import React, { Component } from "react";
import { connect } from "react-redux";
import { addList } from "../actions/actionsType";

class Add extends Component {
  state = {
    newTodo: ""
  };
  HandleChange = e => {
    this.setState({
      newTodo: e.target.value
    });
  };
  HandleClick = () => {
    this.props.addList({
      text: this.state.newTodo,
      key: Date.now(),
      checked: false
    });
    this.setState({
      newTodo: ""
    });
  };

  render() {
    return (
      <div className="form">
        <h1>Daily To Do Lists</h1>
        <div className="Add-Items">
          <div class="input-group mb-3 w-25 formulaire">
            <input
              type="text"
              class="form-control "
              onChange={this.HandleChange}
              placeholder="what you're gonna do?"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={this.state.newTodo}
            />
            <div class="input-group-append">
              <button
                class=" btn btn-outline-info" 
                type="button"
                id="button-addon2"
                onClick={this.HandleClick}
              >
                Add New To Do
              </button>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = { addList };
export default connect(null, mapDispatchToProps)(Add);
