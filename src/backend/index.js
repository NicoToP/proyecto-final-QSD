const express = require('express');
const morgan = require('morgan');
const handlebars = require ('express-handlebars');
const path = require ('path');

const app = express();

require('dotenv').config();

require('./database/database');

// settings
app.set('PORT', process.env.PORT || 3000);
app.set("views", path.resolve(__dirname, "../frontend/views"));

const hbs = handlebars.create({
defaultLayout: "main",
layoutsDir: path.join(app.get("views"), "layouts"),
partialsDir: path.join(app.get("views"), "partials"),
extname: ".hbs"
});
app.engine(".hbs", hbs.engine);
app.set('view engine', ".hbs");
// midddlewares
app.use(morgan('dev'));
// para manejar y entender json
app.use(express.json());
// para entenrer y manejar los datos enviados atravez del cuarpo de la URL
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', require('./v1/routes/index.routes'));
app.use('/api/v1/owners', require('./v1/routes/owner.routes'));
app.use('/api/v1/pets', require('./v1/routes/pet.routes'));
app.use('/api/v1/appointments', require('./v1/routes/appointment.routes'));
app.use('/api/v1/staffs', require('./v1/routes/staff.routes'));

// starting
app.listen(app.get('PORT'), () => {
  console.log(`Server on port ${app.get('PORT')}`);
});
