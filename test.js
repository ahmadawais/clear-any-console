const { cmd } = require('command-code');
const clearAnyConsole = require('./index.js');

(async () => {
	try {
		const response = await cmd({
			prompt: '/review'
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
