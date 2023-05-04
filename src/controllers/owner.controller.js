//crud desde la base datos se owner y buscar pets desde la consulta de owner

const Owner = require('../models/Owner');
const Pet = require('../models/Pet');
//se esta importando el modelo de owner y pet en la carpeta models

exports.getAllOwners = async (req, res) => {
    //exports.getAllOwners para exponer la funcion getAllOwners a otros archivos dentro de la aplicacion para acceder a ella 
    try {
      const owners = await Owner.find().lean();
      //declaramos la variable owner para que busque al owner mientras espera la operacion y devuelve como objetos js 
      return res.status(200).json(owners);
      //si fue ok returna estado 200 como respuesta y los owners en formato JSON 
    } catch (error) {
      return res.status(500).json({message: error.message});
      //en caso de error muestra el mensaje  error 
    }
  };

  exports.getOwner = async (req, res) => {
    //para exponer la funcion getOwer para obtene un owner 
    const {ownerId} = req.params;
  //destructuramos y extrar los valores del parametro id de la solicitud 
    try {
      const owner = await Owner.findById(ownerId).lean();
      //con la varibale owner llamamos al metodo find para encontrar por id el owner y devolver en como objeto simple mientras espera se realiza la operacion
      if (!owner) return res.sendStatus(404);
      //si el owner no existe retorna respuesta estatus 404 
      return res.status(200).json(owner);
       //en caso ok retorna el estado y devuelve en objeto json
    } catch (error) {
      return res.status(500).json({message: error.message});
      // //en caso de error muestra el mensaje  error 
    }
  };

  exports.createOwner = async (req, res) => {
    // para exponer la funcion createOwner a otros archivos dentro de la aplicacion para acceder a ella y crear el ownwe 
    const {name, email, phone} = req.body;
  //desestructuramos los valores de los parametros a traves de la solicitud HTTP a traves de un metodo y se envia a traves del cuerpo en formato JSON
    try {
      const newOwner = new Owner({
        name,
        email,
        phone,
      });
      //declaramos la variable newOwner con la funcion constructora Owner y se asigna a cada propiedad name, email, phone
      await newOwner.save();
      ////llamamos al metodo save del objeto que esta en newOwner  para guarar el nuevo registro en la base de datos y esperamos mientras se completa la operacion antes de continuar 
      return res.status(201).json(newOwner);
      //en caso ok retorna el estado y devuelve en objeto json
    } catch (error) {
      return res.status(500).json({message: error.message});
      //en caso de error muestra el mensaje  error 
    }
  };
  

  exports.updateOwner = async (req, res) => {
    // para exponer la funcion updateOwner a otros archivos dentro de la aplicacion para acceder a ella y actualizar el ownwer 
    const {ownerId} = req.params;
    //extrae los valores de los parametros id de la solicitud desestructurando los objetos para usarlos mas adelante 
    const {name, email, phone} = req.body;
    //desestruct
    //los valores de los parametros a traves de la solicitud HTTP a traves de un metodo y se envia a traves del cuerpo en formato JSON
  
    try {
      const updateOwner = await Owner.findByIdAndUpdate(
        //con la variable updateOwner llamamos al metodo findByIdAndUpdate para encontrar y actualizar mientras espera a realizar esta operacion 
        ownerId,
        // //el primer parametro es el id del propietario que se quiere actualizar  
        {
          name,
          email,
          phone,
        },
        ////el segundo parametro es un objeto que contiene los campos que se quiere actualizar 
    {new: true}
    //le decimos a moongoose que debe devolver la version actualizada del documento 
      );
  
      return res.status(204).json(updateOwner);
      //si la respuesta es ok retorna la respuesta 204 y actualiza la cita formato JSON
    } catch (error) {
      return res.status(500).json({message: error.message});
      // en caso de error muestra el mensaje 
    }
  };
//elimina el ownwer 
  exports.removeOwner = async (req, res) => {
    const {ownerId} = req.params;
 
    try {
      const deleteOwner = await Owner.findByIdAndDelete(ownerId);
  
      if (!deleteOwner) return res.sendStatus(404);
  
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  };

  //obtenemos todas las mascotas a tarves de los ownwers
  exports.getAllPets = async (req, res) => {
    const {ownerId} = req.params;
    try {
      const owner = await Owner.findById(ownerId).populate('pets');
      if (!owner) return res.status(404);
      return res.status(200).json(owner.pets);
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  };

  exports.getPet = async (req, res) => {
   // para exponer la funcion getpet otros archivos dentro de la aplicacion para acceder a ella y encontrar una mascota a travel del id owner 
    const {ownerId, petId} = req.params;
 //extrae los valores de los parametros id ownwer y petid de la solicitud desestructurando los objetos para usarlos mas adelante
    try {
      const owner = await Owner.findById(ownerId).populate('pets');
      //declaramos la variable owner y buscamos en al owner con findById con el id del owner y populate hace una referencia a las coleccion de mascotas 
      if (!owner) return res.status(404).json({error: 'owner not found'});
  //si el owner no es encontrado retorna respuesta 404 y responde en formato json mensaje 
      const pet = owner.pets.find(pet => pet._id == petId);
      //se esta utilizando el metodo find en el array pets que esta dentro del objeto owner devolviendo el primer elemento del array que cumple con la condicion 
      //La condición está definida en la función flecha pet => pet._id == petId.La función flecha se utiliza como un callback que se ejecutará por cada elemento en el array pets. La variable pet representa cada elemento del array pets. Luego, se compara si el _id de la mascota (pet._id) es igual al petId pasado como parámetro en la URL
      if (!pet) return res.status(404).json({error: 'pet not found'});
  // //si el pet no es encontrado retorna respuesta 404 y responde en formato json mensaje
      return res.status(201).json(pet);
      //ok devuleve pet en json 
    } catch (error) {
      return res.status(500).json({message: error.message});
      //mensaje error 
    }
  };
//crear la mascota 
  exports.createPet = async (req, res) => {
    
    const {ownerId} = req.params;
    const {name, species, breed, weight, dateBirth, description} = req.body;
  
    try {
      const owner = await Owner.findById(ownerId);
      // Buscamos al dueño correspondiente según el ID especificado en la petición
      
      if (!owner) return res.status(404).json({error: 'owner not found'});
  // Si no se encuentra al dueño, se retorna un error 404 con un mensaje indicando que no se encontró
      const pet = new Pet({
        name,
        species,
        breed,
        weight,
        dateBirth,
        description,
      });
      // Se crea un nuevo objeto Pet con los datos que se recibieron en la petición
      pet.owner = owner;
  // Se especifica que el dueño de la mascota es el que se encontró previamente
      await pet.save();
       // Se guarda la mascota en la base de datos mientras espera a que finalize la peticion
      owner.pets.push(pet);
      //Se agrega a la mascota al arreglo de mascotas del dueño
  
      await owner.save();
          // Se guarda la información actualizada del dueño en la base de datos
      res.status(201).json(pet);
      // Se retorna un estado 201 (creado) junto con el objeto de la mascota que se acaba de crear
    } catch (error) {
      return res.status(500).json({message: error.message});
      //mensaje error 
    }
  };

//actualizar info de mascota 
  exports.updatePet = async (req, res) => {
    const {ownerId, petId} = req.params;
    const {name, species, breed, weight, dateBirth, description} = req.body;

    try {
      const owner = await Owner.findById(ownerId).populate('pets');
      ////declaramos la variable owner y buscamos en al owner con findById con el id del owner y populate hace una referencia a las coleccion de mascotas mientras espera la peticion 
      if (!owner) return res.status(404).json({error: 'owner not found'});
      // Si no se encuentra al dueño, se retorna un error 404 con un mensaje indicando que no se encontró
  
      const pet = owner.pets.find(pet => pet._id == petId);
      //se esta utilizando el metodo find en el array pets que esta dentro del objeto owner devolviendo el primer elemento del array que cumple con la condicion 
      //La condición está definida en la función flecha pet => pet._id == petId.La función flecha se utiliza como un callback que se ejecutará por cada elemento en el array pets. La variable pet representa cada elemento del array pets. Luego, se compara si el _id de la mascota (pet._id) es igual al petId pasado como parámetro en la URL
      if (!pet) return res.status(404).json({error: 'pet not found'});
   //si el pet no es encontrado retorna respuesta 404 y responde en formato json mensaje
      pet.name = name || pet.name;
      pet.species = species || pet.species;
      pet.breed = breed || pet.breed;
      pet.weight = weight || pet.weight;
      pet.dateBirth = dateBirth || pet.dateBirth;
      pet.description = description || pet.description;
  // se estan actualizando los campos de la mascota segun los datos de la solicitid el operador || para verificar si el valor del campo es verdadero o nulo es decir si el valor es nuevo o existe 
      await pet.save();
  // Se guarda la info  mascota en la base de datos mientras espera a que finalize la peticion
      return res.status(200).json(pet);
        //ok devuleve pet en json
    } catch (error) {
      return res.status(500).json({message: error.message});
      //mensaje error 
    }
  };

//elimina pet 
  exports.removePet = async (req, res) => {
    const {ownerId, petId} = req.params;
    try {
      const owner = await Owner.findById(ownerId).populate('pets');
      if (!owner) return res.status(404).json({error: 'owner not found'});
  
      const pet = owner.pets.find(pet => pet._id == petId);
      if (!pet) return res.status(404).json({error: 'pet not found'});
  
      await Pet.deleteOne({_id: pet._id});
      //con el metodo deleteone para eliminar la mascota correspondiente al id de la mascota especifica con petid  es decir la variable pet contiene toda la informacion de ese id 
      owner.pets.pull(pet); 
//usamos el metodo pull de mongoose para eliminar la mascota correspondiente a pet del array pets del objeto owner esto se hace para asegurar que la mascota eliminada ya no esta asociada al objeto owner 
      await owner.save();
      //aca se actualiza el metodo save para guardar el objeto owner 
      return res.status(204).json(pet);
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  };
