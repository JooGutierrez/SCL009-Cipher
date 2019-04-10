# KeyCreator

![KeyCreator](https://i.ibb.co/XtH486M/Key-Creator.png)


[Demo KeyCreator](https://joogutierrez.github.io/SCL009-Cipher/src/index.html)


## Resumen del proyecto

> Aplicación web pensada para crear diferentes contraseñas. Aquí podrás crear múltiples password con una misma palabra o frase, la cual será cifrada con un dígito clave que tu ingresarás (offset) y te daremos como resultado tu nueva contraseña. Si se te olvida cuál es tu palabra o frase cifrada, no te preocupes, la podrás descifrar y volver a crear.

Para nuestra app utilizamos [Cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher). El cifrado César es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

![caeser-cipher](https://i.ibb.co/W0dtBSb/Ccesarimg.png)


## KeyCreator

>KeyCreator es una aplicación sencilla de utilizar, es por esto que esta enfocada a todo tipo de personas, que sepan leer y que tengan un nivel básico en cuanto al uso del computador.

Día a día miles y miles de usuarios de la web crean contraseñas, pero como bien sabemos a muchos se les olvidan cuales eran, o tienen problemas para crear una contraseña que sea fácil de recordar pero difícil de averiguar, por lo tanto terminan usando como contraseñas nombres o frases las cuales son muy vulnerables a ser descubiertas, o claves complejas que se olvidan con facilidad. Es aquí donde notamos que existía una necesidad latente para poder crear contraseñas con una palabra o frase, la cual pudieramos cifrar. 
KeyCreator es una solución a este problema, ya que permite tomar una frase fácil de recordar y un número, y convertirlo en una contraseña cifrada que no se asemeja a ninguna palabra existente en la RAE, y en el caso de que el usuario olvide su contraseña cifrada, solo neceseita su dígito ingresado y la frase utilizada para generar su contraseña.

## Planificación

La planificación del proyecto se realizó a través de tableros físicos y digitales, dividido en las siguientes categorías: 

- Backlog (lista de tareas a realizar)
- Doing (tareas en proceso)
- Block (tareas bloqueadas)
- Done (tareas hechas)

Estas tareas iban cambiando de categoría, a medida que se avanzaba con el proyecto. La plataforma digital utilizada fue Trello, puedes pinchar [aquí](https://trello.com/b/x1H0OMf0/proyecto-cipher) para acceder a nuestra planificación.


## Prototipado

>Una vez definido nuestro tema y usuarios, viene la etapa de crear el flujo de usuario y el boceto de nuestra aplicación.

#### Flujo de usuario

La imagen a continuación muestra el flujo que puede tomar el usuario al momento de usar la aplicación.

![Flujo](https://i.ibb.co/sm43yQN/Flujo-usuario.jpg "Flujo de usuario")

#### Boceto

La siguiente imagen muestra el boceto del diseño de la aplicación.

![Boceto](https://i.ibb.co/qsCTP9t/boceto.jpg "Boceto")

## Modo de Uso

>Anteriormente se explicó que nuestra app utiliza el Cifrado César. A continuación explicamos como usar KeyCreator:

- Acceder a la aplicación.
- Pensar en un número, mientras mayor sea este, más segura será la contraseña.
- Ingresar número escogido.
- Ingresar la palabra o frase que será la contraseña.
- Presionar botón para cifrar o descifrar.
- Se crea la nueva contraseña.
- Se da la opción de comenzar de nuevo, para crear otra contraseña.

![holi](https://media.giphy.com/media/jto0sTw5lkuuYKUvpT/giphy.gif)

## Consideraciones de desarrollo

Para el desarrollo de KeyCreator no se utilizó ninguna librería complementaría, el código completo es totalmente "limpio".

Se realizaron test para probar el funcionamiento de la aplicación, alcanzando los siguientes resultados:

% Statements: 92,59

% Branch: 80

% Functions: 100

% Lines: 92

## Parte Opcional: "Hacker edition"

Puesto que el objetivo del proyecto, era cifrar y descifrar mayúsculas, como parte del hacker edition se incluyeron las minúsculas y el "espacio", dandole así, más opciones al usuario para poder crear sus contraseñas.

## Desarrollado por

Jocelyn Gutiérrez, 9ª generación, Laboratoria Chile.
