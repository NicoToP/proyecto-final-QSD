const Client = require('../models/Client');

const addClient = async (req, res) => {
  const {name} = req.body;
  try {
    const newClient = new Client({
      name: name,
    });
    await newClient.save();
    res.send('Todo correcto');
  } catch (error) {
    res.send('Error al agerrgar el cliente');
    console.error(error);
  }
};

const readClient = async (req, res) => {
  let clients = await Client.find().lean();
  res.send(clients);
};

const updateClient = async (req, res) => {
  console.log(req.params);

  const {id} = req.params;
  const {name} = req.body;
  try {
    const client = await Client.findById(id);
    if (!client) {
      console.log('No existe');
      return res.send('Error no existe el documento a editar');
    }

    await Client.findByIdAndUpdate(id, {name: name});
    res.send('Todo Correcto');
  } catch (error) {
    console.error(error);
  }
};

const deleteClient = async (req, res) => {
  const {id} = req.params;
  try {
    await Client.findByIdAndDelete(id);
    res.send('Todo salio correcto');
  } catch (error) {
    res.send('Error al eliminar cliente');
    console.error(error);
  }
};

module.exports = {
  addClient,
  readClient,
  updateClient,
  deleteClient,
};
