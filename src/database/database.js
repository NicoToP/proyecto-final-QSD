const mongoose = require('mongoose');
//importa la libreria de moongoose para conectarse y manipular la base de datos de mongo db  

// Connecting to db
async function connectToDB() {
  //aca llama la funcion asincronica y conecta la aplicacion desde la base de datos
  mongoose
    .connect(process.env.MONGO_URI)
    //aca de llama al metodo connect de moongose para establecer la conexion a la base de datos la URI se obtiene de una base de datos llamada mongo_uri
    .then(() => {
      //si la  conexion se establece correctamente se ejecuta el codigo dentro de la funcion then y muestra el mensaje ok
      console.log('Succesful connected to', mongoose.connection.name);
    })
    .catch(error => {
      console.error(error);
      //en caso de no conectarse correctamente muestra el mensaje 
    });
}

connectToDB();
//aqui se llama a la funcion para iniciar la conexion a la base de datos con esto la conexion es activa  al bd antes de realizar cualquier operacion