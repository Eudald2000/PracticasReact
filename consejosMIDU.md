# Consejos para la prueba técnica de MIDU

## Una vez finalizada la prueba tecnica hacer un test basico EndToEnd con: 
```code
npm init playwright@latest
```
## Utilizar Bolt.css o water.css para un diseño basico y rapido al iniciar el proyecto

## Utilizar un linter para evitar errores comunes y mejorar la calidad del código

## Antes de hacer un fetching de datos, mirar la documentación de la API para entender cómo funciona y qué datos devuelve

## Crear una carpeta mocks para simular las respuestas de la API, dos archivos: 
- `resultados.json`: para simular la respuesta de la búsqueda
- `no-resultados.json`: para simular la respuesta de la búsqueda sin resultados

## En una prueva tecnica lo principal es que el codigo funcione, mas adelante se puede componetizar y mejorar el código

## Las busquedas de informacion, es mejor no buscar en google o stackoverflow, hay que utilizar mdn

## Durante la prueba tecnica, es buena practica hablar de lo que se hace, o dejar comentarios, para que el entrevistador pueda entender el razonamiento detrás del código

## Evita tener los hooks dentro de app, utiliza los customs hooks para encapsular la logica de negocio y hacer el codigo mas limpio

# Informacion basica varia
- useState: proporciona un valor de estado local y una función para actualizarlo. Cuando invocas el setter, React programa automáticamente un nuevo render del componente mostrando el estado actualizado.

- useEffect: ejecuta lógica con efectos secundarios después de cada render (o cuando cambian las dependencias). Se usa para suscribirse a eventos, hacer peticiones asíncronas o realizar limpiezas antes de que el componente se desmonte o se actualicen esas dependencias.

- useRef: crea un objeto con la propiedad current que persiste entre renders sin provocar nuevos renders al cambiar. Ideal para acceder a nodos DOM, almacenar temporizadores o valores mutables que no forman parte de la UI.

- useMemo: memorizas el resultado de una función para evitar recomputar valores costosos en cada render, y solo vuelve a calcularse cuando cambian sus dependencias. Se usa en cálculos pesados como filtrados y agregaciones de listas grandes, generación de objetos de configuración o derivación de datos complejos antes de pasarlos al render.

- useCallback: devuelves una función memorizada que conserva la misma referencia entre renders mientras sus dependencias no cambien. Es útil al pasar callbacks a componentes hijos envueltos en React.memo, usarlos como dependencias estables en useEffect o useMemo, o evitar renders innecesarios provocados por funciones que cambian de referencia. El useCallback utiliza por debajo el useMemo.