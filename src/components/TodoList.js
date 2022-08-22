import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import FooterIncompleteTask from "./FooterIncompleteTask";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  const filterByIncomplete = todos.filter((todo) => !todo.completed);

  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {filterByIncomplete.filter(filterByColors).map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
      <hr className="mt-4" />

      <FooterIncompleteTask filterByIncomplete={filterByIncomplete} />
    </div>
  );
}
