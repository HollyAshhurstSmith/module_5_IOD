const axios = require('axios');

const API_BASE = 'https://fakestoreapi.com/products';

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const response = await axios.get(API_BASE);
      res.json(response.data);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  },

  getSingleProduct: async (req, res) => {
    try {
      const response = await axios.get(`${API_BASE}/${req.params.id}`);
      res.json(response.data);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch product' });
    }
  }
};
