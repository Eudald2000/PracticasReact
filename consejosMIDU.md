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
- useState: Gestionar el estado local de un componente y provocar re-renderizados cuando el estado cambia.

- useEffect: Ejecutar código con efectos secundarios después de que el componente se renderice, y gestionar el ciclo de vida del componente.

- useRef:  Crear una referencia mutable que persiste durante toda la vida del componente sin causar re-renderizados cuando cambia.