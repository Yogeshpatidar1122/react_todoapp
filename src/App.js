import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/actions';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="max-w-md mx-auto mt-4 mb-4 bg-white shadow-md rounded-md overflow-hidden">
      <h2 className="text-lg font-semibold px-6 py-2 bg-blue-500 text-white">This is your Todo list !</h2>
      <div className="px-6 py-4 flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your messgae"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 mr-2"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out"
        >
          Add 
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="border-t border-gray-200">
            <div
              className={`px-6 py-4 flex items-center justify-between cursor-pointer ${
                todo.completed ? 'bg-gray-100' : ''
              }`}
              onClick={() => handleToggleTodo(todo.id)}
            >
              <span className={`text-lg ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                {todo.text}
              </span>
              <button onClick={() => handleDeleteTodo(todo.id)} className="text-red-500 hover:text-red-600 focus:outline-none">
                &#x2715;
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
