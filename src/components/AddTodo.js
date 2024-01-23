import { useState } from 'react';

function AddTodo({ addTodo }) {
	const [input, setInput] = useState('');

	return (
		<>
			<input
				placeholder='Enter Todo Name'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={() => addTodo(input)}>Add New</button>
		</>
	);
}

export default AddTodo;
