const express = require('express');
const app = express();
const port = 3000;

// Import all routes FIRST
const testRoutes = require('./routes/myTestRoutes');
const calculatorRoutes = require('./routes/calculatorRoutes');

// Static files
app.use('/', express.static('public'));

// Route middleware
app.use('/mytest', testRoutes);
app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
