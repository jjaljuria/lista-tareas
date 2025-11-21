# Lista de Tareas

Este proyecto es una aplicación sencilla de lista de tareas construida con React. Permite a los usuarios agregar, visualizar y eliminar tareas, gestionando el estado de la aplicación con Redux y persistiendo los datos en el almacenamiento local del navegador.

## Características

*   **Agregar Tareas:** Añade nuevas tareas a la lista con un nombre, descripción y fecha.
*   **Eliminar Tareas:** Elimina tareas individualmente de la lista.
*   **Persistencia de Datos:** Las tareas se guardan automáticamente en el almacenamiento local del navegador y se cargan al iniciar la aplicación.
*   **Validación de Fechas:** Las fechas de las tareas no pueden ser en el pasado.

## Tecnologías Utilizadas

*   **Frontend:**
    *   [React](https://react.dev/): Una librería de JavaScript para construir interfaces de usuario.
    *   [Vite](https://vitejs.dev/): Un entorno de desarrollo frontend de próxima generación.
    *   [Redux](https://redux.js.org/): Un contenedor de estado predecible para aplicaciones JavaScript.
    *   [Bootstrap](https://getbootstrap.com/): Un framework CSS para diseño responsivo.
    *   [Reactstrap](https://reactstrap.github.io/): Componentes de Bootstrap construidos con React.
    *   [Moment.js](https://momentjs.com/): Una librería para parsear, validar, manipular y formatear fechas.
    *   [UUID](https://www.npmjs.com/package/uuid): Para generar identificadores únicos universales (UUIDs).
*   **Desarrollo:**
    *   [Vitest](https://vitest.dev/): Un framework de pruebas unitarias rápido para proyectos basados en Vite.

## Instalación y Ejecución Local

Para poner en marcha este proyecto en tu máquina local, sigue estos pasos:

### Prerrequisitos

Asegúrate de tener Node.js y pnpm (o npm) instalados en tu sistema.

### Pasos

1.  **Clonar el repositorio (si aplica):**
    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd lista-tareas
    ```
2.  **Instalar dependencias:**
    ```bash
    pnpm install
    # o si usas npm
    # npm install
    ```
3.  **Ejecutar la aplicación en modo desarrollo:**
    ```bash
    pnpm run dev
    # o si usas npm
    # npm run dev
    ```
    La aplicación se iniciará en `http://localhost:5173` (o un puerto similar).

4.  **Compilar para producción:**
    ```bash
    pnpm run build
    # o si usas npm
    # npm run build
    ```

5.  **Ejecutar pruebas:**
    ```bash
    pnpm run test
    # o si usas npm
    # npm run test
    ```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un 'issue' o envía un 'pull request'.

## Licencia

Este proyecto está bajo la Licencia GPL. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Autor
<img src="https://avatars.githubusercontent.com/u/11164648?v=4" alt="jjaljuria" width="250" height="250" style="border-radius: 50%; object-fit: cover;" />
