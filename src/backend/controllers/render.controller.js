exports.renderIndex = (req, res) => {
  res.render('index', {home: true});
};

exports.renderAppointments = (req, res) => {
  res.render('appointments', {appointments: true});
};

exports.renderServices = (req, res) => {
  res.render('services', {services: true});
};

exports.renderProducts = (req, res) => {
  res.render('products', {products: true});
};

exports.renderContact = (req, res) => {
  res.render('contact', {contact: true});
};

exports.renderProfile = (req, res) => {
  res.render('profile', {profile: true});
};

