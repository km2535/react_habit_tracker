import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  handleIncreament = (habit) => {
    const habits = this.state.habits.map((i) => {
      if (i.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return i;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((i) => {
      if (i.id === habit.id) {
        return { ...habit, count: habit.count > 0 ? habit.count - 1 : 0 };
      }
      return i;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    let habits = [...this.state.habits];
    //const index = habits.indexOf(habit);
    //console.log(habits[index]);
    //const habits = this.state.habits.filter((v) => v.id !== habit.id);
    habits = habits.filter((v) => v.id !== habit.id);
    //console.log(result);
    this.setState({ habits });
  };
  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((i) => {
      if (i.count !== 0) {
        return { ...i, count: 0 };
      }
      return i;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((i) => i.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onAdd={this.handleAdd}
          onIncre={this.handleIncreament}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
