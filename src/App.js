import { useState } from 'react';
import './styles/App-light-theme.css';
// import './styles/App-dark-theme.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { STATIC_TODOS, TODO_TYPES } from './utils/constants';
import { TodoContext } from './AppContext';

function App() {
	const [todos, setTodos] = useState(STATIC_TODOS);

	const addTodo = (name) => {
		const invalidName = todos.find(
			(todo) => todo.name.trim().toLowerCase() === name.trim().toLowerCase()
		);
		if (invalidName) return alert('Todo already exists!');
		setTodos([...todos, { name, status: TODO_TYPES.IN_PROGRESS }]);
	};

	const markDone = (name) => {
		return setTodos(
			todos.map((todo) => {
				if (todo.name === name) return { name, status: TODO_TYPES.DONE };
				return todo;
			})
		);
	};

	const deleteTodo = (name) => {
		setTodos(todos.filter((todo) => todo.name !== name));
	};

	return (
		<TodoContext.Provider value={{ todos, addTodo, markDone, deleteTodo }}>
			<AddTodo />
			<TodoList type={TODO_TYPES.IN_PROGRESS} />
			<TodoList type={TODO_TYPES.DONE} />
		</TodoContext.Provider>
	);
}

export default App;
