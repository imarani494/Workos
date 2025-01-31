const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const candidateRoutes = require('./routes/candidateRoutes');
const cors = require('cors');


dotenv.config({ path: './.env' });


connectDB();

const app = express();


app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads')); 

app.use('/api', candidateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));