const express = require('express');
const app = express();
const port = 3001; // Ensure this does not conflict with React's port
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const { compileDocuments } = require('../scripts/compileDocuments'); // Import statement for compileDocuments

app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});

app.use('/api/', apiLimiter);

const csrfProtection = csurf({ cookie: true });

// Example endpoint for compileDocuments with CSRF protection
app.post('/api/compile-documents', csrfProtection, (req, res) => {
  try {
    const compiledDocument = compileDocuments(req.body); // Ensure compileDocuments is properly imported or defined
    res.json({ compiledDocument });
  } catch (error) {
    console.error('Error compiling documents:', error);
    res.status(500).send('Error compiling documents');
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err.code === "EBADCSRFTOKEN") {
    // handle CSRF token errors here
    res.status(403).send('form tampered with');
  } else {
    // pass to next error middleware handler
    next(err);
  }
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Deed of Assignment Portal is running');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});