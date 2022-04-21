import React, { useState } from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, ClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のtodo</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => ClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
