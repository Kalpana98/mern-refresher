import { useContext } from 'react';
import { TodoContext } from '../AppContext';
import SingleTodo from './SingleTodo';

function TodoList({ type }) {
	const { todos } = useContext(TodoContext);
	const displayTodos = todos.filter((item) => item.status === type);

	return (
		<>
			<h2>{type}</h2>
			<ul>
				{displayTodos.map((todo, i) => (
					<SingleTodo key={i} todo={todo} type={type} />
				))}
			</ul>
		</>
	);
}

export default TodoList;
