const express = require('express');
const morgan = require('morgan');

const app = express();

require('dotenv').config();

require('./database/database');

// settings
app.set('port', process.env.PORT || 3000);

// midddlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/v1', require('./routes/owner.routes'));
/* app.use('/api/v1', require('./routes/staff.routes')); */

// starting
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')} `);
});
