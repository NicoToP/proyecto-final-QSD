const Client = require('../models/Client');

const addClient = async (req, res) => {
  const {nameClient} = req.body;
  try {
    const newClient = new Client({
      name: nameClient,
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

const updateClient = async (req, res) => {};

const deleteClient = async (req, res) => {};

module.exports = {
  addClient,
  readClient,
  updateClient,
  deleteClient,
};
