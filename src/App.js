import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Plan from "./Plan";

class App extends Component {
  state = {
    items: [],
    text: "",
  };
  handlechange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleAdd = (e) => {
    {
      /* when add button is clickd it will execute the if condition is executed when the string is not empty
       after that we will copythe old array string if present and the current string into new array after that again we 
       will set the newarray to this.state.items array*/
    }
    if (this.state.text !== "") {
      const newarray = [...this.state.items, this.state.text];
      this.setState({ items: newarray, text: "" });
    }
  };

  deltedata = (id) => {
    {
      /* here we will get the id from Plan how we used filter function it will takekn two parameters first one element and id
      it will store the elements of arrays into excepdelarray this array contain all elements except deleted element agian we are copoing 
     excepdelarray into this.state.items array   */
    }
    console.log("deleted", id);
    const olditem = [...this.state.items];
    console.log("olditems", olditem);
    const exceptdelarray = olditem.filter((elemetnt, i) => {
      return i !== id;
    });
    this.setState({ items: exceptdelarray });
  };
  render() {
    return (
      <div className=" container-fluid my-5 bg-darkslategray p-3">
        <div className="row">
          <div className="col-sm-6 mx-auto  shadow-lg text-white">
            <h1 className="text-center ">Todo List</h1>
            <div className="row mx-auto">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control  "
                  placeholder=" write anything you want to add"
                  value={this.state.text}
                  onChange={this.handlechange}
                />
              </div>
              <div className="col-3">
                <button
                  className="btn btn-primary "
                  style={{ fontWeight: "bold" }}
                  onClick={this.handleAdd}
                >
                  Add
                </button>
              </div>
              <div className="container-fluid">
                <ol className=" m-5 row list-unstyled ">
                  {this.state.items.map((value, i) => {
                    return (
                      <Plan
                        key={i}
                        value={value}
                        id={i}
                        deldata={this.deltedata}
                      />
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
