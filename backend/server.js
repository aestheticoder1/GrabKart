const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const connectDB = require('./config/database')
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes')

const PORT = process.env.PORT || 3000;

// CONNECT TO MONGODB
connectDB();

app.get("/", (req, res) => {
    res.send("Welcome to GrabKart API");
})

// API ROUTES 
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})