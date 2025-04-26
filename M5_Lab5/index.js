const express = require('express');
const app = express();
const port = 3000;

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);
const testRoutes = require('./routes/myTestRoutes');
const calculatorRoutes = require('./routes/calculatorRoutes');

app.use('/', express.static('public'));

// Route middleware
app.use('/mytest', testRoutes);
app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



