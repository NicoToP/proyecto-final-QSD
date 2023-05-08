## Carpeta `routes`

La carpeta `routes` en la carpeta `src` se utiliza para definir y organizar las rutas (o endpoints) de la API. Las rutas son las direcciones URL que se pueden solicitar desde el cliente para interactuar con los recursos de la API. Cada ruta puede estar asociada a diferentes métodos HTTP, como `GET` para obtener recursos, `POST` para crear recursos, `PUT` para actualizar recursos, o `DELETE` para eliminar recursos.

Dentro de la carpeta `routes`, es una buena práctica crear diferentes archivos para agrupar las rutas relacionadas con un conjunto de recursos. Por ejemplo, se puede crear un archivo `pets.routes.js` para definir las rutas relacionadas con las mascotas y un archivo `owners.routes.js` para definir las rutas relacionadas con los propietarios. Esto ayuda a organizar las rutas y evitar archivos sobrecargados.

Además, existen otras prácticas comunes para organizar las rutas, como el uso de subcarpetas o prefijos de ruta. Por ejemplo, se puede crear una subcarpeta `v1` para las rutas de la versión 1 de la API, o agregar un prefijo `/api` a todas las rutas de la API.

En resumen, la carpeta `routes` es un componente importante de una API, y su organización adecuada ayuda a mejorar la legibilidad y mantenibilidad del código.
