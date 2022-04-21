import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState();
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDlete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...imcompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newcompleteTodos = [...completeTodos, imcompleteTodos[index]];
    setImcompleteTodos(newIncompleteTodos);
    setCompleteTodos(newcompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...imcompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setImcompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={imcompleteTodos.length >= 5}
      />
      {imcompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個までだよ。消化しろ</p>
      )}
      <IncompleteTodos
        todos={imcompleteTodos}
        clickComplete={onClickComplete}
        clickDlete={onClickDlete}
      />
      <CompleteTodos completeTodos={completeTodos} ClickBack={onClickBack} />
    </>
  );
};
