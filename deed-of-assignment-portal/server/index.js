const express = require('express');
const app = express();
const port = 3001; // Ensure this does not conflict with React's port

app.use(express.json());

// Example endpoint for compileDocuments
app.post('/api/compile-documents', (req, res) => {
  const compiledDocument = compileDocuments(req.body);
  res.json({ compiledDocument });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});