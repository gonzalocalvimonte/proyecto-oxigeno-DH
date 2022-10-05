const port = process.env.PORT || 3000;
const start = () => (console.log(`Starting server => http://localhost:${port}`));

module.exports = {port, start}