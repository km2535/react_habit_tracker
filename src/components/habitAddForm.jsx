import React, { memo } from "react";

// 함수컴포넌트는 rsi
// 함수형 컴포넌트 작성핟기
// purecomponent처럼 사용하고 싶으면 memo를 사용하면 된다
const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    //this.inputRef.current.value = "";
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="add-input"
        placeholder="Habit"
        ref={inputRef}
      ></input>
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;

// class HabitAddForm extends PureComponent {
//   // 클래스리엑트에서 ref 사용방법임.
//   inputRef = React.createRef();
//   formRef = React.createRef();

//   onSubmit = (e) => {
//     e.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     //this.inputRef.current.value = "";
//     this.formRef.current.reset();
//   };
//   render() {
//     return (
//       <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//         <input
//           type="text"
//           className="add-input"
//           placeholder="Habit"
//           ref={this.inputRef}
//         ></input>
//         <button className="add-button">Add</button>
//       </form>
//     );
//   }
// }

// export default HabitAddForm;
