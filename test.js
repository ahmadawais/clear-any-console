const { Langbase } = require('langbase');
const clearAnyConsole = require('./index.js');

(async () => {
	try {
		const langbase = new Langbase({
			apiKey: process.env.LANGBASE_API_KEY
		});

		const response = await langbase.pipe.run({
			name: 'ai-agent',
			messages: [
				{
					role: 'user',
					content: 'What is https://Langbase.com?',
				},
			],
		});

		console.log(response);
	} catch (err) {
		console.log(err);
	}

	// The above should have an error but we want to clear it.

	// Clear console (could be the first thing at the top)
	clearAnyConsole();

	// User should see cleared console with this message.
	console.log('Console cleared');
})();
