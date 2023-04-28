const express = require('express');
const morgan = require('morgan');
const {create} = require('express-handlebars');
const path = require('path');

const app = express();

require('dotenv').config();

require('./database/database');

// configuracion
app.set('port', process.env.PORT || 3000);

// midddlewares
app.use(morgan('dev'));
app.use('/', require('./routes/index.routes'));

// starting
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')} `);
});
