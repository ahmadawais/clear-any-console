const clearAnyConsole = require('./index.js');

(async () => {
	process.argv = [
		process.argv[0],
		require.resolve('command-code'),
		'-p',
		'/review changes and rate the changes 1-5, no exploring',
		'--yolo',
		'--verbose'
	];

	try {
		await import('command-code');
	} catch (err) {
		// cmd exited non-zero, that's fine
	}

	// Clear console after cmd output
	clearAnyConsole();

	// User should see cleared console with this message.
	console.log('Console cleared');
})();
