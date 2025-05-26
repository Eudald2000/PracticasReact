# Pasos para crear un proyecto Vanilla y añadirle React

## 1. Crear el proyecto

Ejecutamos el siguiente comando para crear un proyecto con Vite y seleccionamos la plantilla `vanilla`,posteriormente seleccionamos con JavaScript:

```bash
npm create vite@latest
```

Luego, accedemos al directorio del proyecto:

```bash
cd [nombre-del-proyecto]
```

## 2. Instalar dependencias

Instalamos el plugin de React para Vite:

```bash
npm install @vitejs/plugin-react -E
```

Seguido de las dependencias de React y ReactDOM:

```bash
npm install react react-dom -E
```

## 3. Configurar Vite

Creamos un archivo `vite.config.js` en la raíz del proyecto y añadimos el siguiente contenido:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

## 4. Configurar el archivo principal

### Renombrar `main.js` a `main.jsx`

Renombramos el archivo `main.js` a `main.jsx` y actualizamos la referencia en el archivo `index.html` para que apunte a `main.jsx`.

### Modificar el contenido de `main.jsx`

Eliminamos todo el contenido del archivo y añadimos lo siguiente:

```javascript
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app"));

root
  .render
  // AQUI VA NUESTRO CONTENIDO
  ();
```

## 5. (Opcional) Instalar un linter

Aunque no es obligatorio, se recomienda instalar un linter para mantener un código limpio. Por ejemplo, podemos instalar `standard` con el siguiente comando:

```bash
npm install standard --save-dev
```

## Crear carpeta src

Una vez tenemos todo configurado, es mejor crear una carpeta donde empezaremos a programar.

Creamos el archivo app.jsx:

```javascript
export function App () {
  return (
    // Aqui el contenido que queremos
  )
}
```

Para ver los cambios, en el archivo main.jsx cambiamos a

```javascript
root.render(<App />);
```
