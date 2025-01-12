import React, { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, deleteToDo, updateToDo }) => {
  // Define isTodoEditable as a state
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  // State to hold the edited todo text
  const [editedTodoText, setEditedTodoText] = useState(todo.todo);

  // Function to toggle edit mode
  const toggleEdit = () => {
    if (isTodoEditable) {
      // Save the edited todo text
      updateToDo(todo.id, { ...todo, todo: editedTodoText });
    }
    setIsTodoEditable((prev) => !prev); // Toggle edit mode
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    setEditedTodoText(e.target.value);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)} // Use toggleComplete prop
          className="w-4 h-4 cursor-pointer"
        />
        <input
          type="text"
          value={editedTodoText}
          readOnly={!isTodoEditable}
          onChange={handleInputChange} // Handle input change
          className={`bg-transparent outline-none ${
            todo.completed ? 'line-through text-gray-400' : 'text-white'
          }`}
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleEdit}
          className="px-2 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          {isTodoEditable ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={() => deleteToDo(todo.id)} // Use deleteToDo prop
          className="px-2 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;