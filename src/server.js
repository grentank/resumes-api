const express = require('express');
const cors = require('cors');
const apiResumesRouter = require('./routes/apiResumesRouter');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/resumes', apiResumesRouter);

app.listen(process.env.PORT, () => console.log(`Server has started on PORT ${process.env.PORT}`));
