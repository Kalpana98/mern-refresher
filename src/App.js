import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { STATIC_TODOS, TODO_TYPES } from './utils/constants';

function App() {
	const [todos, setTodos] = useState(STATIC_TODOS);

	const doneTodoList = todos.filter((item) => item.status === TODO_TYPES.DONE);
	const progressTodoList = todos.filter((item) => item.status === TODO_TYPES.IN_PROGRESS);

	const addTodo = (name) => {
		const invalidName = todos.find(
			(todo) => todo.name.trim().toLowerCase() === name.trim().toLowerCase()
		);
		if (invalidName) return alert('Todo already exists!');
		setTodos([...todos, { name, status: TODO_TYPES.IN_PROGRESS }]);
	};

	function markDone(name) {
		return setTodos(
			todos.map((todo) => {
				if (todo.name === name) return { name, status: TODO_TYPES.DONE };
				return todo;
			})
		);
	}

	const deleteTodo = (name) => {
		setTodos(todos.filter((todo) => todo.name !== name));
	};

	return (
		<>
			<AddTodo addTodo={addTodo} />
			<TodoList
				todos={progressTodoList}
				type={TODO_TYPES.IN_PROGRESS}
				displayButton={markDone}
			/>
			<TodoList todos={doneTodoList} type={TODO_TYPES.DONE} displayButton={deleteTodo} />
		</>
	);
}

export default App;
