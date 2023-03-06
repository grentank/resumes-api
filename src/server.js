const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/apiRouter');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/resumes', apiRouter);

app.listen(process.env.PORT, () => console.log(`Server has started on PORT ${process.env.PORT}`));
