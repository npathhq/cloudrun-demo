const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();


// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(helmet());
if (app.get('env') === 'development') app.use(morgan('dev'));


// ROUTES
app.get('/', (req, res) => {
  res.send(process.env.NODE_ENV);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on post ${port}...`));
