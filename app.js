// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();
const port = 5005; // process.env.PORT || 3000;

// MIDDLEWARE
// Here you should set up the required middleware:
const morgan = require('morgan');

// - `express.static()` to serve static files from the `public` folder
app.use(express.static('public'));

// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(morgan('dev'));


// ROUTES
// Start defining your routes here:

// home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

// blog route
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/views/blog.html');
});

// Create a route GET /api/projects 
app.get('/api/projects', (req, res) => {
    // res.sendFile(__dirname + '/data/projects.json');
    res.json(require('./data/projects.json'));
});


// Create a route GET /api/articles
app.get('/api/articles', (req, res) => {
    // res.sendFile(__dirname + '/data/articles.json');
    res.json(require('./data/articles.json'));
});

// not found route
app.use((req, res) => {
    // res.sendFile(__dirname + '/views/not-found.html');
    res.status(404).sendFile( __dirname + '/views/not-found.html' );
});



// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});