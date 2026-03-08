// Task 1
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
// Task 2
app.use(express.static("public"));

// Task 3
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});


// Task 4
app.get('/api/time', (req, res) => {
  res.json({
    datetime: new Date().toISOString(),
    timestamp: Date.now()
  });
});

// Task 5
// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});


// 500 error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, 'public', '500.html'));
});


// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log('\n📍 Available routes:');
    console.log('  GET /              -> Home page');
    console.log('  GET /about         -> About page');
    console.log('  GET /contact       -> Contact page');
    console.log('  GET /api/time      -> Current date/time API');
    console.log('\n⏹️  Press Ctrl+C to stop the server\n');
});

