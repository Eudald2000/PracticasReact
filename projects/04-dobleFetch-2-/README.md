# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.

# Esto ya no son instrucciones

## Que hacer antes de iniciar la prueba

- Comprobamos las dos apis.
  - En la primera nos llega un json
  - En la segunda tenemos que buscar nuestro endpoint, he encoontrado este:
    `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

# BUSCAR INFORMACION

- Es importante buscar documentacion de como se hace, no la solucion. A la hora de buscar se utiliza mdn (y lo que quieres buscar)

# FLUJO COMPLETO

## 1. Inicialización (Montaje del componente App):

- App se renderiza por primera vez

- useCatFact() se ejecuta:

  - Crea estado fact (inicialmente undefined)

  - Define refreshRandomFact

  - useEffect se dispara (por el array vacío [])

  - getRandomFact() obtiene un hecho de la API

  - Cuando la promesa se resuelve, setFact() actualiza el estado

## 2. Actualización del estado del hecho:

- Cuando setFact() actualiza el estado:

  - App se vuelve a renderizar

  - useCatFact() devuelve el nuevo fact

  - useCatimage({ fact }) se ejecuta con el nuevo valor

## 3. Obtención de la imagen:

- El useEffect en useCatimage se dispara porque fact cambió:

  - Divide el hecho en palabras

  - Toma las primeras 3 palabras

  - Llama a getcatImg() con esas palabras

  - Cuando la promesa se resuelve, setimageUrl() actualiza su estado

## 4. Renderizado de la imagen:

- Cuando setimageUrl() actualiza el estado:

  - App se vuelve a renderizar

  - useCatimage() devuelve la nueva imageUrl

  - El componente muestra la imagen
    <code>
    (<img src={imageUrl} ... />)
    </code>

## 5. Interacción del usuario:

- Cuando el usuario hace clic en "New fact":

  - handleClick llama a refreshRandomFact()

  - refreshRandomFact() obtiene un nuevo hecho

  - El ciclo se repite desde el paso 2
