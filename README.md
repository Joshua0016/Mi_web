# Catálogo de referencias para rotulas de vehículos

A continuación explicaré de forma breve el archivo Single.js:

para encontrar el número de referencia, la aplicación utiliza tres selectores: uno para la marca, otro para el modelo y el último para el anio del vehículo
![selectores](Assets/Captura%20de%20pantalla%202025-04-13%20205929.png)

## Primer selector

Cuando se realiza un click en el primer selector se muestran las marcas.
En el primer evento change se guarda el click realizado por el usuario para posteriormente enviar la marca seleccionada hacia el backend. La marca seleccionada se
envía mediante una consulta sql para devolver todos los modelos de la marca seleccionada hacia el frontend. Esta información devuelta se guarda en una variable global llamada "modeloInfo"
ya que contiene el arreglo de todos los objetos de los modelos de la marca seleccionada.

## Segundo selector

Al igual que en el primer selector, en el segundo selector, se guarda el click del evento "change", pero en este caso utilizamos la variable modeloInfo para encontrar
el click o el modelo seleccionado por el usuario y guardarlo en la variable modeloSelec. La variable guardará todo el objeto que coincida con el modelo seleccionado por el usuario para
poder usar su id en la consulta sql y mostrar los respectivos anios de dicho modelo. Luego de ralizar la consulta sql, se envían todos los anios de dicho modelo hacia el fronted, se
le mostrará al usuario la lista de los anios del modelo y se guardará en una variable globa llamada "aniosInfo" poder encontrar los números de referencias.

## Tercer selector

Al igual que en el segundo selector, luego de que el usuario elige el anio se buscará en la variable "anioInfo" el click que coincida con los anios guardados anteriormente para posteriormente
usar el "id" del elemento y mostrar las referencias del catálogo.

## Ejecutar con Docker

Primrero levantar el contenedor de MYSQL --> docker compose up my_sql
Segundo levantar el contenedor web --> docker compose up webcontainer
