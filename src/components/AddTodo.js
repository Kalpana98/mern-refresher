import { useState, useContext } from 'react';
import { TodoContext } from '../AppContext';

function AddTodo() {
	const [input, setInput] = useState('');
	const { addTodo } = useContext(TodoContext);

	return (
		<>
			<input
				placeholder='Enter Todo Name'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				onClick={() => {
					addTodo(input);
					setInput('');
				}}
			>
				Add New
			</button>
		</>
	);
}

export default AddTodo;
