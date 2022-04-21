import React, { useState } from "react";

export const IncompleteTodos = (props) => {
  const { todos, clickComplete, clickDlete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のtodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => clickComplete(index)}>完了</button>
              <button onClick={() => clickDlete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
