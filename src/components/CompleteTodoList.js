import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "../redux/todos/actions";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import FooterCompletedTask from "./FooterCompletedTask";
import Todo from "./Todo";

const CompleteTodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const filterByCompleted = todos.filter((todo) => todo.completed);

  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };



  const clearHandler = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <ul className="flex justify-between my-4 text-sm text-black">
        <li className="flex space-x-1 ">
          <FontAwesomeIcon className="mt-1 text-md" icon={faClipboardList} />
          <span className="font-bold">Completed Tasks: </span>
        </li>
        {filterByCompleted.length > 0 && (
          <li onClick={clearHandler} className="cursor-pointer">
            Clear completed
          </li>
        )}
      </ul>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {filterByCompleted.map((todo) => (
          <Todo completedTask={true} todo={todo} key={todo.id} />
        ))}
      </div>
      <hr className="mt-4" />

      <FooterCompletedTask filterByCompleted={filterByCompleted} />
    </div>
  );
};

export default CompleteTodoList;
