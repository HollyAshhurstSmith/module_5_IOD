const express = require('express');
const app = express();
const port = 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const productRoutes = require('./routes/productRoutes');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Serve frontend
app.use(express.static('public'));

// Routes
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
