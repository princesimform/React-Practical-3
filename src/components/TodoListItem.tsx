// Class Component
import React, { Component } from "react";
import { TodoListItemProps } from "../Types/TodoListItemProps";

class TodoListItem extends Component<TodoListItemProps> {
  render() {
    const { data, isCompleted } = this.props;

    return (
      <div className={"item" + `${isCompleted ? " item-completed" : ""}`}>
        <div className='todo-name'>
          <p>{data}</p>
        </div>
        <div className='item-complete'>
          <span className='item-complete-btn'></span>
        </div>
      </div>
    );
  }
}

// import React from "react";
// import { TodoListItemProps } from "../Types/TodoListItemProps";

// function TodoListItem({ isCompleted, data }: TodoListItemProps) {
//   return (
//     <div className={"item" + `${isCompleted ? " item-completed" : ""}`}>
//       <div className='todo-name'>
//         <p>{data}</p>
//       </div>
//       <div className='item-complete'>
//         <span className='item-complete-btn'></span>
//       </div>
//     </div>
//   );
// }

export default TodoListItem;
