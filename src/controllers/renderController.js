//en la carpeta guardan los controladores que se utilizan para renderizar vistas en una aplicación web.es decir la logica de la presentacion 


const render = (req, res) => {
  res.send('Hello');
};

module.exports = {
  render,
};
