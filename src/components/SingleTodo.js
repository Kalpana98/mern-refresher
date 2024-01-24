import { useContext } from 'react';
import { TodoContext } from '../AppContext';
import { TODO_TYPES } from '../utils/constants';

function SingleTodo({ todo, type }) {
	const { deleteTodo, markDone } = useContext(TodoContext);
	const isDone = type === TODO_TYPES.DONE;

	return (
		<li>
			{todo.name}
			<button
				className={!isDone ? 'mark-done' : ''}
				onClick={() => (!isDone ? markDone(todo.name) : deleteTodo(todo.name))}
			>
				{!isDone ? 'Mark as Done' : 'Delete Todo'}
			</button>
		</li>
	);
}

export default SingleTodo;
