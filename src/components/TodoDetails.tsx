//TodoDetails.tsx//

import React, { Fragment } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoOverview() {
  return (
    <Fragment>
      <TodoForm />
      <TodoList />
    </Fragment>
  );
}

export default TodoOverview;
