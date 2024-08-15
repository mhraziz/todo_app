import { useState } from "react";
import TodoEdit from "./TodoEdit";
import EditIcon from "../svgs/edit.svg";
import DeleteIcon from "../svgs/delete.svg";

const TodoShow = ({ todo, removeTodo, changeTodo }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleDoubleClick = () => {
    changeTodo(todo.id, todo.title, !todo.completed);
  };

  const handleSubmit = (id, title) => {
    changeTodo(id, title);
    setShowEdit(false);
  };

  if (showEdit) {
    return (
      <li className="todo">
        <TodoEdit todo={todo} onSubmit={handleSubmit} />
      </li>
    );
  }

  return (
    <li className="todo" onDoubleClick={handleDoubleClick}>
      <p className={todo.completed ? "completed" : ""}>{todo.title}</p>

      <div className="actions">
        <button onClick={handleDelete}>
          <img src={DeleteIcon} title="Delete" alt="" />
        </button>
        <button onClick={handleEdit}>
          <img src={EditIcon} title="Edit" alt="" />
        </button>
      </div>
    </li>
  );
};

export default TodoShow;
