import React, { PureComponent } from "react";

class Habit extends PureComponent {
  // 로딩 스피너를 구현할때 사용함.
  componentDidMount() {
    console.log(`habit : ${this.props.habit.name} mounted`);
  }
  // ui 상에서 삭제 될때 해줘야하는 기능을 추가 할 때
  componentWillUnmount() {
    console.log(`habit : ${this.props.habit.name} will mounted`);
  }
  // 해당 컴포넌트가 업데이트 될때
  componentDidUpdate() {
    console.log(`habit : ${this.props.habit.name} update`);
  }
  // 클래스 방식의 컴포넌트이기 때문에 클래스의 필드에 메소드 형식으로 있음.
  handleIncreament = () => {
    this.props.onIncre(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    // 디스트럭쳐링 기법을 활용하여 간단하게 표기 할 수 있음.
    // 또한 외부의 state는 props로 전달 받음.
    const { name, count } = this.props.habit;
    //console.log("habit : ", name);

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count ">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncreament}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
