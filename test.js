const clearAnyConsole = require('./index.js');

console.log('This should be cleared.');

// Clear console.
clearAnyConsole();

// User should see cleared console with this message.
console.log('Console cleared');
