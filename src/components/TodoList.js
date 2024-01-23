import SingleTodo from './SingleTodo';

function TodoList({ todos, type, displayButton }) {
	return (
		<>
			<h2>{type}</h2>
			<ul>
				{todos.map((todo, i) => (
					<SingleTodo key={i} todo={todo} type={type} displayButton={displayButton} />
				))}
			</ul>
		</>
	);
}

export default TodoList;
