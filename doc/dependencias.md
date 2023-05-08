# ¿Qué es Morgan?

Morgan es un middleware para Node.js que se utiliza para registrar solicitudes HTTP en un servidor web. Permite capturar información sobre cada solicitud entrante y registrarla en la consola o en un archivo de registro.

## Ejemplo de uso

Por ejemplo, si hacemos una solicitud GET a la ruta "/users" de nuestro servidor, Morgan registrará algo como esto en la consola:

```
GET /users 200 5.163 ms - 198
```

Esta información incluye el método de solicitud (GET), la ruta solicitada (/users), el código de estado HTTP (200), el tiempo que tardó la solicitud en procesarse (5.163 ms) y el tamaño de la respuesta (198 bytes).

En resumen, Morgan es una herramienta muy útil para el registro y seguimiento de solicitudes HTTP en una aplicación Node.js, lo que facilita el proceso de depuración y monitoreo del servidor.

## ¿Qué es Mongoose?

Mongoose es una biblioteca de Node.js que proporciona una capa de abstracción para interactuar con MongoDB, una base de datos NoSQL muy popular. Proporciona una API sencilla para realizar operaciones CRUD y definir esquemas de datos.

Para utilizar Mongoose en una aplicación Node.js, se debe requerir la biblioteca y establecer una conexión con MongoDB. Por ejemplo:

```javascript
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/mydatabase', {useNewUrlParser: true})
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch(error => console.error('Error al conectar a la base de datos', error));
```

En este ejemplo, estamos estableciendo una conexión con una base de datos MongoDB en el servidor local en la dirección `mongodb://localhost/mydatabase`. La opción `{ useNewUrlParser: true }` se utiliza para indicar a Mongoose que utilice el nuevo analizador de URL de MongoDB.

Una vez que se establece una conexión a la base de datos, se pueden definir modelos de datos utilizando la clase `Schema` de Mongoose. Por ejemplo:

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

En este ejemplo, estamos definiendo un modelo de datos `User` que representa a un usuario en nuestra aplicación. El modelo tiene un esquema que especifica los campos `name`, `email`, `password` y `createdAt`, y utiliza la clase `Schema` de Mongoose para definir el esquema.

Luego, utilizamos la función `mongoose.model()` para crear un modelo de datos `User` a partir del esquema definido. Finalmente, exportamos el modelo de datos para que pueda ser utilizado en otras partes de nuestra aplicación.

## ¿Que es express-handlebars?

Express-handlebars es un motor de plantillas para Node.js que se utiliza con el framework Express. Permite generar HTML dinámico utilizando plantillas en formato Handlebars, lo que facilita la creación de vistas en aplicaciones web. Este motor de plantillas es muy flexible y permite una gran personalización en la presentación del contenido.

## Ejemplo de uso

1. Configuración el motor de plantillas en la aplicación Express:

```javascript
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Configurar el motor de plantillas
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
```

2. Crear una plantilla Handlebars en el directorio `views`:

```handlebars
<!-- views/home.handlebars -->

<html>
  <head>
    <title>{{title}}</title>
  </head>
  <body>
    <h1>Bienvenido a mi sitio web</h1>
    <p>{{message}}</p>
  </body>
</html>
```

3. Crear una ruta en la aplicación que renderice la plantilla con los datos correspondientes:

```javascript
// Ruta para la página principal
app.get('/', (req, res) => {
  const data = {
    title: 'Mi sitio web',
    message: 'Gracias por visitar mi sitio',
  };
  res.render('home', data);
});
```

En este ejemplo, hemos creado una plantilla Handlebars que muestra un título y un mensaje de bienvenida. Luego, hemos creado una ruta en la aplicación que renderiza esta plantilla utilizando `res.render()`, pasando un objeto `data` que contiene los datos a mostrar en la plantilla.

Cuando un usuario accede a la ruta `"/"`, la aplicación renderiza la plantilla `home.handlebars` con los datos proporcionados en el objeto `data`.

## Renderizar

La renderización de vistas en una aplicación web es el proceso de generar HTML dinámico utilizando una plantilla y datos proporcionados por el servidor. Por ejemplo, supongamos que tenemos una aplicación que muestra información de productos. Para renderizar la vista de un producto específico, el servidor procesa una plantilla utilizando un motor de plantillas como `Express-handlebars` y combina los datos del producto proporcionados por el servidor para generar HTML dinámico. Este HTML se envía al cliente y se visualiza en el navegador web.

Hay varios motores de plantillas disponibles para elegir, cada uno con sus propias características y ventajas. Por ejemplo, Handlebars es una opción popular debido a su sintaxis fácil de usar y su capacidad para generar HTML dinámico de manera eficiente. Otros motores de plantillas populares incluyen EJS y Pug. Es importante elegir el motor de plantillas que mejor se adapte a las necesidades específicas de su aplicación.

En resumen, la renderización de vistas es un aspecto clave en el desarrollo de aplicaciones web que implica la generación de HTML dinámico a partir de plantillas y datos proporcionados por el servidor.

## ¿Que es dotenv?

dotenv es una dependencia de Node.js que se utiliza para cargar variables de entorno desde un archivo de configuración en tu proyecto y acceder a ellas en tu aplicación de Node.js. Permite definir valores de configuración sensibles o variables que pueden cambiar según el entorno en el que se está ejecutando la aplicación, sin tener que definirlos directamente en tu código fuente. Esto puede mejorar la seguridad de tu aplicación y facilitar el despliegue en diferentes entornos.

> ## Que es una variable de entorno
>
> Es una forma de proporcionar valores de configuración a una aplicación sin tener que escribirlos directamente en el código. Por ejemplo, en una aplicación que se conecta a una base de datos, se puede definir una variable de entorno para la URL de la base de datos en lugar de escribirla directamente en el código. Luego, la aplicación puede leer el valor de la variable de entorno para conectarse a la base de datos. Esto permite actualizar la URL de la base de datos simplemente actualizando el valor de la variable de entorno en lugar de tener que cambiar el código de la aplicación. Una buena práctica es utilizar una biblioteca como Dotenv para cargar las variables de entorno desde un archivo de configuración en el proyecto y acceder a ellas en la aplicación Node.js.

## Ejemplo de uso

1. Crea un archivo `.env` en la raíz de tu proyecto y define tus variables de entorno allí. Por ejemplo, podrías definir la variable MONGODB_URI con la URL de tu base de datos de MongoDB:

```javascript
MONGODB_URI=mongodb://localhost/mydatabase
```

2. En tu archivo principal de la aplicación, carga las variables de entorno utilizando dotenv y configura la conexión de Mongoose a la base de datos utilizando la variable de entorno definida en `.env`:

```javascript
require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch(err => console.error('Error de conexión a la base de datos:', err));
```

En este ejemplo, usamos `require('dotenv').config()` para cargar las variables de entorno definidas en `.env`. Luego, usamos `process.env.MONGODB_URI` para acceder al valor de la variable de entorno `MONGODB_URI`, que contiene la URL de la base de datos de MongoDB. Finalmente, configuramos la conexión de Mongoose a la base de datos utilizando `mongoose.connect()`.
