import { TODO_TYPES } from '../utils/constants';

function SingleTodo({ todo, type, displayButton }) {
	const isDone = type === TODO_TYPES.DONE;
	return (
		<li>
			{todo.name}
			<button className={!isDone ? 'mark-done' : ''} onClick={() => displayButton(todo.name)}>
				{isDone ? 'Delete Todo' : 'Mark as Done'}
			</button>
		</li>
	);
}

export default SingleTodo;
