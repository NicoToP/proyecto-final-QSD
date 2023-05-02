//estamos definiendo el CRUD para la database 



//se esta importando el modelo de cliente difinido en client.js en la carpeta models esta swintaxis se usa par importar modulos
const Client = require('../models/Client');

//es una funcion asincronica (que acepta req y res )
//La palabra clave async se utiliza para indicar que la función es asíncrona, lo que significa que puede ejecutarse en segundo plano mientras el programa sigue ejecutando otras tareas. Esto es útil en situaciones en las que la función debe realizar operaciones que pueden llevar tiempo, como interactuar con una base de datos o hacer una llamada a una API. Al usar la palabra clave async, se permite que la función se ejecute de forma asíncrona sin bloquear la ejecución del programa.
const addClient = async (req, res) => {
  //Declaramos una función llamada addClient que toma dos argumentos: req y res. Estos argumentos representan la solicitud HTTP entrante y la respuesta HTTP que enviaremos al cliente.
  const {name} = req.body;
  //estructuramos el objeto req.body para extraer la propiedad name
  try {
    const newClient = new Client({
      name: name,
    });
    //Intentamos crear un nuevo objeto Client utilizando el constructor de Client definido en el modelo de Mongoose. Pasamos un objeto con una propiedad name y su valor extraído de req.body. Este objeto representa un nuevo registro de cliente que queremos agregar a nuestra base de datos.
    //new es una palabra clave que se utiliza para crear una nueva instancia de un objeto a partir de una función constructora.En el caso del modelo Client, new Client crea una nueva instancia de la clase Client.
    await newClient.save();
    //Llamamos al método save() del objeto newClient para guardar el nuevo registro en la base de datos. Utilizamos await para esperar a que se complete la operación de guardado antes de continuar ejecutando el código.
    res.send('Todo correcto');
    //Si el registro se guarda con éxito, enviamos una respuesta HTTP al cliente con un mensaje de éxito.
  } catch (error) {
    res.send('Error al agerrgar el cliente');
    console.error(error);
  }
  //Si ocurre un error al intentar guardar el registro del cliente en la base de datos, capturamos el error en el bloque catch. Enviamos una respuesta HTTP al cliente con un mensaje de error y utilizamos console.error() para imprimir el error en la consola del servidor. De esta manera, podemos manejar el error adecuadamente y evitar que detenga el flujo del programa
};

const readClient = async (req, res) => {
  //Declaramos una función llamada readCliente que toma dos argumentos: req y res. Estos argumentos representan la solicitud HTTP entrante y la respuesta HTTP que enviaremos al cliente.
  let clients = await Client.find().lean();
  //En esta línea de código, await Client.find().lean(), se está realizando una consulta a la base de datos MongoDB utilizando Mongoose. En concreto, se está buscando en la colección de clientes (que está definida en el modelo Client) todos los documentos que existan.
  //await se utiliza para esperar la resolución de una tarea asíncrona. En este caso, la tarea asíncrona es la consulta a la base de datos.
  //Client.find(): esta es una función proporcionada por Mongoose que devuelve una promesa. Esta promesa se resuelve con un arreglo de documentos que coinciden con la consulta. En este caso, no se proporciona ningún criterio de búsqueda, por lo que se devolverán todos los documentos de la colecció
  //lean(): esto se llama en la cadena de métodos después de Client.find(). Es una función proporcionada por Mongoose que indica que no se deben crear objetos de tipo Document para los resultados de la consulta. En cambio, se devolverán objetos JS planos. Esto hace que la consulta sea más rápida y consuma menos recursos.
  res.send(clients);
};

const updateClient = async (req, res) => {
  //Declara una función asíncrona llamada updateClient que toma dos parámetros: req y res, que representan el objeto de solicitud y el objeto de respuesta respectivamente.
  console.log(req.params);
  //mprime en la consola los parámetros de la solicitud HTTP, lo que puede ser útil para depurar y entender lo que se está enviando al servidor.
//En el caso de la función updateClient, se utiliza req.params.id para obtener el ID del cliente que se va a actualizar. La línea console.log(req.params) simplemente muestra por consola el objeto params completo para ayudar en la depuración y verificar que se esté recibiendo el ID correctamente.
  const {id} = req.params;
  const {name} = req.body;
  //Extrae los valores de los parámetros id y name de la solicitud HTTP utilizando la sintaxis de desestructuración de objetos. Estos valores se utilizarán más adelante en la función.
  //la función updateClient, se usa req.params.id para obtener el ID del cliente de la ruta, y req.body.name para obtener el nuevo nombre del cliente desde el cuerpo de la solicitud. Ambos son objetos diferentes con diferentes propósitos, pero se utilizan juntos para actualizar los datos del cliente.
  try {
    const client = await Client.findById(id);
    //Utiliza el método findById de Mongoose para buscar un documento en la base de datos utilizando el ID proporcionado en la solicitud HTTP.
    if (!client) {
     
      console.log('No existe');
      return res.send('Error no existe el documento a editar');
    }
 //el signo ! se utiliza para verificar si una variable es falsa o nula en una expresión condicional.
      //Comprueba si client es null, lo que significa que no se encontró ningún documento con el ID proporcionado. En caso afirmativo, devuelve un mensaje de error en la respuesta HTTP y finaliza la función.
    await Client.findByIdAndUpdate(id, {name: name});
    //Utiliza el método findByIdAndUpdate de Mongoose para actualizar el documento con el ID proporcionado en la solicitud HTTP. En este caso, solo se actualiza el campo name. La operación se realiza con await para esperar a que se complete antes de continuar con la siguiente línea de código.
    res.send('Todo Correcto');
  } catch (error) {
    console.error(error);
    //Si la actualización se completa correctamente, envía un mensaje de éxito en la respuesta HTTP. Si se produce un error durante la búsqueda o la actualización, se registra un mensaje de error en la consola del servidor.
  }
};

const deleteClient = async (req, res) => {
  //Declaramos una función llamada readCliente que toma dos argumentos: req y res. Estos argumentos representan la solicitud HTTP entrante y la respuesta HTTP que enviaremos al cliente.
  const {id} = req.params;
  //se usa req.params.id para obtener el ID del cliente 
  try {
    await Client.findByIdAndDelete(id);
    res.send('Todo salio correcto');
    //utiliza el metodo findByIdAndDelete  para encontrar y eliminar el documento a traves del id La operación se realiza con await para esperar a que se complete antes de continuar con la siguiente línea de código.
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
//Cada una de estas funciones se utiliza para realizar una de las operaciones básicas del CRUD (crear, leer, actualizar y eliminar) en la base de datos
//Al exportarlas, se pueden importar y utilizar en otros archivos de JavaScript para realizar estas operaciones en la base de datos. Por ejemplo, en el archivo principal de la aplicación se pueden importar estas funciones y utilizarlas para manejar las solicitudes HTTP que llegan al servidor.