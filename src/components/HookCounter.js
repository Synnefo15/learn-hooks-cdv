import React, { useState } from 'react';

function HookCounter() {
	const [count, setCount] = useState(0);
	return (
		<div>
            <h3>Ini hook</h3>
			<button onClick={() => setCount(count + 1)}>Count {count}</button>
		</div>
	);
}

export default HookCounter;
