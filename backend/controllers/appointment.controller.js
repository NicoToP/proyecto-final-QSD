//en esta carpeta se crea el crud de la data base de citas y del staff 

const Appointment = require('../models/Appointment');
const Staff = require('../models/Staff');
//se usa la variable para asignar la cita y llama en la carpeta models lo que esta dentro de appointment
exports.getAllAppointments = async (req, res) => {
    //se define la funcion para obtener todas las citas los cuales seran req y res y puede tener operaciones asincroncias
    try {
        // Se inicia un bloque try para manejar posibles excepciones.
      const appointment = await Appointment.find().lean();
      //se inicializa appointment que va almacenar el resultado de la operacion asincronica y busca todos los documentos de la coleccion 
      return res.status(200).json(appointment);
      //si la operacion es ok  se envia una respuesta ok y un objeto JSON que contiene todas las citas en bases de datos
    } catch (error) {

      return res.status(500).json({message: error.message});
      //se envía una respuesta HTTP con el código de estado 500 Internal Server Error y un objeto JSON que contiene un mensaje de error detallado.


    }
  };

  exports.getAppointment = async (req, res) => {
    //declaramos la variable  para obtener una cita con la funcion asincronica de req y res 
    try {
      const {id} = req.params;
    //extrae los valores de los parametros is de la solicitud desestructurando los objetos para usarlos mas adelante 
      const appointment = await Appointment.findById(id).lean();
      //declaramos la variable appointment busca los documentos de la coleccion que contiene Appointment y los busca por id y los devuelve como objetos de js
      if (!appointment) return res.sendStatus(404);
      //si la cita no existe devuelve la respuesta 404
      return res.status(200).json(appointment);
      //si el estado es 200 devuelve el objeto json de la cita 
    } catch (error) {
      return res.status(500).json({message: error.message});
      //en caso de error mostrara el error 
    }
  };

  exports.createAppointment = async (req, res) => {
    //declaramos para crear un cita con una funcion asincronica 
    try {
      const {service, date, description, staff} = req.body;
      //desestructuramos los valores de los parametros a traves de la solicitud HTTP a traves de un metodo y se envia a traves del cuerpo en formato JSON
      const newAppointment = new Appointment({
        service,
        date,
        description,
        staff,
      });
      //declaramos la variable newAppointment con la funcion constructora Appointment y se asigna a cada propiedad service,date,description,staff
      await newAppointment.save();
      //llamamos al metodo save del objeto que esta en newAppointment para guarar el nuevo registro en la base de datos y esperamos mientras se completa la operacion antes de continuar 
      return res.status(201).json(newAppointment);
      //en caso ok retorna el estado y devuelve en objeto json
    } catch (error) {
      return res.status(500).json({message: error.message});
      //en caso de error devuelve el mensaje error 
    }
  };

  exports.updateAppointment = async (req, res) => {
    //declaramos la variable updateAppointment en una funcion asincronica 
    try {
      const {id} = req.params;
      ///extrae los valores de los parametros id de la solicitud desestructurando los objetos para usarlos mas adelante 
      const {service, date, description, staff} = req.body;
      ////desestructuramos los valores de los parametros a traves de la solicitud HTTP a traves de un metodo y se envia a traves del cuerpo en formato JSON
      const updateAppointment = await Appointment.findByIdAndUpdate(
        //con la variable updateAppointment llamamos al metodo findByIdAnsUpdate para encontrar y actualizar mientras espera a realizar esta operacion 
        id,
        //el primer parametro es el id del propietario que se quiere actualizar
        {service, date, description, staff},
        //el segundo parametro es un objeto que contiene los campos que se quiere actualizar 
        {new: true}
//le decimos a moongoose que debe devolver la version actualizada del documento 
      );
      
      if (!updateAppointment) return res.sendStatus(404);
      //si no existe la cita returna la respuesta 404 
      return res.status(204).json(updateAppointment);
      //si la respuesta es ok retorna la respuesta 204 y actualiza la cita formato JSON
    } catch (error) {
      return res.status(500).json({message: error.message});
      // en caso de error muestra el mensaje 
    }
  };
  
  exports.removeAppointment = async (req, res) => {
    //declaramos la variable removeAppointment con la funcion asincronica 
    try {
      const {id} = req.params;
//extrae los valores de los parametros id de la solicitud desestructurando los objetos para usarlos mas adelante 
      const deleteAppointment = await Appointment.findByIdAndRemove(id);
      //con la variable deleteAppointment llamamos para que encuentre by id y remueva la cita mientras espera que esto suceda  
  
      if (!deleteAppointment) return res.sendStatus(404);
      //si no existe la cita a eliminar retorna respuesta 404
      return res.status(204).json();
      //si todo es ok retorna estado 204 y devuelve el estado JSON vacio 
    } catch (error) {
      return res.status(500).json({message: error.message});
      //en caso de error muestra el mensaje 
    }
  };

  exports.getStaff = async (req, res) => {
    const {appointmentId} = req.params;
    
    try {
      const appointment = await Appointment.findById(appointmentId).populate('staffs'); 
      if(!appointment) return res.status(404).json({error: 'appointment not found'});
      return res.status(204).json(appointment.staff);
    } catch (error){
      return res.status(500).json({message: error.message});
    }
  };

  exports.createStaff = async (req, res) => {
    const {appointmentId} = req.params;
    const {name, specialty, professionalCard, email, phone} = req.body;
  
    try {
      const appointment = await Appointment.findById(appointmentId);
      if (!appointment) return res.status(404).json({error: 'appointment not found'});
  
      const staff = new Staff({
        name,
        specialty,
        professionalCard,
        email,
        phone,
      });
      staff.appointment = appointment;
  
      await staff.save();
      appointment.staff.push(staff);
  
      await appointment.save();
      res.status(201).json(pet);
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  };

  exports.updateStaff = async (req, res) => {
    const {appointmentId, staffId} = req.params;
    const {name, specialty, professionalCard, email, phone} = req.body;
    try {
      const appointment = await Appointment.findById(appointmentId).populate('staffs');
      if (!appointment) return res.status(404).json({error: 'appointment not found'});
  
      const staff = appointment.staff.find(staff => staff._id == staffId);
      if (!staff) return res.status(404).json({error: 'staff not found'});
  
      staff.name = name || staff.name;
      staff.specialty = specialty || staff.specialty;
      staff.professionalCard = professionalCard || staff.professionalCard;
      staff.email = email || staff.email;
      staff.phone = phone || staff.phone;
      
      await staff.save();
  
      return res.status(200).json(staff);
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  };

  
  exports.removeStaff = async (req, res) => {
    const {appointmentId, staffId} = req.params;
    try {
      const appointment = await Appointment.findById(appointmentId).populate('staffs');
      if (!appointment) return res.status(404).json({error: 'appointment not found'});
  
      const staff = appointment.staff.find(staff => staff._id == staffId);
      if (!staff) return res.status(404).json({error: 'staff not found'});
  
      await Staff.deleteOne({_id: staff._id});
      appointment.staff.pull(staff);
  
      await appointment.save();
      return res.status(204).json(staff);
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  };