# Tienda Coder React
Proyecto de desarrollo para curso de React.js en Coderhouse, consistente en una tienda virtual

## Instalación

Primero, clona o descarga este repositorio en tu máquina local.

Luego, utiliza el node package manager [npm](https://www.npmjs.com/) para instalar los paquetes necesarios.
Para ello, ejecuta el siguiente comando dentro del proyecto:

```bash
npm install
```

Luego, para levantar la app en modo de desarrollo, ejecuta el siguiente comando:

```bash
npm run start
```

Una vez que el proceso haya finalizado, navega a http://localhost:3000 para acceder a la app.

## Modo de uso

Esta app permite navegar una tienda virtual de insumos de computación y gaming, temporalmente a modo de presentación únicamente.

## Construcción

Esta app fue construida íntegramente mediante [React.js](https://reactjs.org/), a través del comando create-react-app.

# Módulos incluidos

Estos son los paquetes de npm que se utilizaron para la construcción de la app:
- node-sass
- classnames
- react-router-dom
- snake-case
- uuid

## Autor

**Rodrigo Fernández**

## Licencia
Este proyecto posee Licencia [MIT](https://opensource.org/licenses/MIT)

## Demo
![image](https://user-images.githubusercontent.com/81263046/128801040-13e33790-4e7c-4044-9ac0-fc5f00b429a3.png)

## CHANGELOG

### Versión 0
- Repositorio público de GitHub de la aplicación "tienda-coder-react" (nombre provisorio) creada mediante el código "npx create-react-app tienda-coder-react".
- Algunos archivos innecesarios fueron eliminados y es posible levantar la aplicación ejecutando "npm start" desde la línea de comandos.
### Versión 1
- Instalo node-sass para reemplazar archivos css por scss
- Cambio lenguaje de la app a Español en index.html
- Cambio nombre de la app a "Reactive Games"
- Modifico manifest.json para coincidir con los nuevos cambios
- Reemplazo archivos css por archivos scss
- Creo archivo de variables de estilos __variables.scss
- Creo el directorio components con el componente navBar y sus estilos
- Creo el directorio pages con la página homePage y sus estilos
- Agrego un logo parcial

### Versión 2
- Creo el componente CartWidget para renderizar el ícono de un carrito
- Creo el componente ItemListContainer con una prop 'greeting' para mostrar un título provisorio debajo del navbar
- Incluyo nuevos íconos en el proyecto
- Reordeno estructura del componente NavBar para incluir a CartWidget
- Ajusto estilos
- Renombro __variables.scss como _variables.scss y agrego variables
- Creo wordings.js para almacenar todos los textos de la app y exportarlos desde allí
- Abrevio tags de componentes al no tener contenido entre ellos
- TODO: versionado en README.md, necesitaría un ejemplo para guiarme sobre cómo estructurarlo

### Versión 3
- Creo componente ItemCount. El mismo permite agregar ítems siempre que exista stock de ese ítem, hasta un máximo igual al stock del ítem y con un mínimo de 1 unidad. Adicionalmente, el componente informa si no existe stock del ítem o si se ha alcanzado el máximo disponible del mismo, y permite agregar al carrito el número seleccionado de unidades siempre que haya stock, dando feedback al usuario con una respuesta simulada en un alert.
- Inserto como ejemplo dos ItemCount en ItemListContainer, uno con stock y uno sin stock, para mostrar sus diferencias.
- Creo archivo _components.scss para introducir estilos de elementos estandarizados y reutilizables mediante sus class-names.
- Instalo paquete 'classnames' para manejar las clases de los componentes renderizados.
- Agrego wordings necesarios.
- Agrego variables de estilos necesarias.
- Hago correcciones generales.

### Versión 4
- Creo una lista de items mockeados mediante un MOCK_DATA.json
- Creo componente Item con estilos para mostrar información principal de un ítem
- Creo componente ItemList con estilos para recibir un array de ítems y renderizarlos en componentes Item mediante un map()
- Incluyo ItemList dentro de ItemListContainer, pasándole por props la lista de ítems obtenida de MOCK_DATA.json asíncronamente mediante una Promise que se resuelve luego de 2 segundos. Inicialmente ItemList no recibe ningún ítem por props debido a la demora de la Promise, y recibe los ítems luego de 2 segundos (al resolverse la Promise) mediante un useEffect
- Hago correcciones de estilos, agrego variables de scss y wordings
- Hago correcciones cosméticas en el código

### Versión 5
- Creo componente ItemDetail con estilos para mostrar el detalle de un ítem.
- Creo componente ItemDetailContainer para obtener de MOCK_DATA.json un ítem asíncronamente mediante una Promise dentro de un useEffect(), seteando dicho ítem en un estado propio al resolverse dicha Promise luego de 2 segundos.
- Incluyo ItemDetail dentro de ItemDetailContainer pasándole por props el ítem seteado en el state para mostrar vista de detalle del ítem.
- Incluyo ItemDetailContainer dentro de HomePage para mostrar un ejemplo del detalle de un ítem.
- Hago correcciones de estilos, agrego variables de scss y wordings.
- Hago correcciones cosméticas en el código.

### Versión 6
- Instalo react-router-dom desde npm para incluir navegación en la app.
- Creo páginas CategoryPage y ItemDetailPage para envolver a ItemListContainer y ItemDetailContainer respectivamente y pasar los url paramas necesarios como props.
- Creo página NotFoundPage para mostrar un simple mensaje de feedback al navegar a una ruta sin contenido.
- Muevo estructura de HomePage a App y la envuelvo en un BrowserRouter para incluir un Switch y Routes para cada ruta, linkeando a ellas las páginas correspondientes.
- Dejo HomePage como un simple wrapper de ItemListContainer para mostrar el catálogo completo.
- Modifico NavBar para renderizar las categorías mediante un método map() aplicado sobre una array de categorías importada desde archivo de wordings. Las categorías son renderizadas dentro de elementos <li> y envueltas en un <NavLink> para para navegar a las distintas vistas de ítems por categoría, con un activeClassName para dar estilos al nombre de la categoría a la cual se ha navegado.
- Instalo snake-case desde npm para convertir el nombre de las categorías a snake case y poder introducirlas a las rutas de los <NavLink>.
- Instalo uuid desde npm para crear una keyId y utilizarla como key de cada elemento <li> renderizado con map() por cada categoría en NavBar.
- Incluyo elemento <Link> en NavBar para linkear logo de la marca a la HomePage.
- Agrego la property category a cada ítem mockeado en *MOCK_DATA.json.
- Recibo el url param categoryId en ItemListContainer y filtro la lista de ítems (recibida de MOCK_DATA.json a través de una Promise en un useEffect()) por categoría, seteando la array resultante como prop para pasar a ItemList. Si ningún categoryId es pasado a ItemListContainer (caso de navegar a HomePage) se muestran todos los ítems (para mostrar catálogo completo en HomePage). El useEffect() recibe a categoryId como dependencia para re-renderizar el componente cada vez que se modifique el valor de esta prop (se navega a otra categoría)
- Recibo el url param itemId en ItemDetailContainer y busco en la lista de ítems (recibida de MOCK_DATA.json a través de una Promise en un useEffect()) el item cuyo id es igual al itemId suministrado (mediante un método find()) seteando el elemento resultante como prop para pasar a ItemList. El useEffect() recibe a itemId como dependencia para re-renderizar el componente cada vez que se modifique el valor de esta prop (se navega al detalle de otro ítem).
- Linkeo Item a ItemDetailPage mediante un <Link>.
- Arreglo estilos en general.
- Agrego wordings.

### Versión 7
- Incluyo README.md con información básica y change log.
- Incluyo lógica en **ItemList** para dar feedback si se navega a una categoría y no se encuentra ningún ítem de esa categoría.
- Quito **ItemCount** de **ItemListContainer** para incluirlo en **ItemDetail** y mostrarlo condicionalmente si el botón "Agregar al carrito" es presionado, en cuyo caso hago desaparecer **ItemCount** para mostrar botón "Terminar mi compra" que navega a la ruta `/cart`.
- Creo creo componente **Cart** y **CartPage** para contener la vista del carrito que se agregará próximamente al componente **Cart** (actualmente tiene sólo un pequeño feedback).
- Incluyo nuevo `Route` en **App** para mostrar **CartPage** al navegar a la ruta `/cart`.
- Agrego propiedades _stock_ e _initial_ dentro de loa atributos de los ítems mockeados en **MOCK_DATA.json**.
- Elimino nombre del ítem en **ItemCount** y reduzco su altura.
- Quito subtítulo de **ItemListContainer** y lo incluyo en **ItemList** para mostrarse junto a la lista de ítems.
- Corrijo altura de las páginas para evitar scrolling y estilos en general.
- Agrego y modifico wordings.
- Limpio código y proyecto de archivos innecesarios o no utilizados.

### Versión 8
- Creo **CartContext** en forma de _custom provider_ con un valor _cart_ incluido en un _state_ propio que representa los ítems agregados al carrito en forma de _array_, y distintos _helpers_:
> - _isInCart_ para verificar si un ítem se encuentra en el carrito mediante su id.
> - _addItem_ para agregar un ítem al carrito en forma de un objeto al cual me refiero como _order_ compuesto por un atributo _item_ que incluye al ítem propiamente dicho y un atributo _quantity_ que contiene la cantidad de dicho ítem agregada al carrito. _addItem_ toma el ítem a agregar y su cantidad como argumentos y verifica si el ítem ya existe en el carrito mediante _isInCart_ antes de agregarlo.
> - _removeItem_ para eliminar un ítem del carrito mediante su id, verificando primero que el ítem exista mediante _isInCart_ y filtrando luego el contenido de _cart_ excluyendo al ítem cuyo id coincide con el que se quiere eliminar.
> - _clear_ para eliminar todo el contenido del carrito seteando su state a una _array_ vacía.
- Proveo estos _helpers_ y el _cart_ al _Provider_ en su atributo _value_. Incluyo un _useEffect_ atado al valor de _cart_ para hacer log de su contenido temporalmente cada vez que su estado cambia, con propósitos de evaluar su comportamiento al agregar/remover un ítem del carrito.
- Importo **CartProvider** en **index.js** y lo utilizo para envolver **App** y convertirlo en un nodo proveedor del **CartContext** para toda la app.
- Importo **CartContext** en **ItemDetail** y accedo al mismo mediante un _useContext_, accediendo a sus _hepers_ _isInCart_, _addItem_ y _removeItem_:
> - Utilizo _addItem_ dentro del método _onAdd_ disparado al hacerse click en el botón "Agregar al carrito" para agregar un ítem y su cantidad al estado _cart_ del _context_ al hacerse click en dicho botón.
> - Utilizo _isInCart_ para mostrar un botón "Terminar mi compra" con redirección a la ruta `/cart` y uno "Eliminar del carrito" en caso de que el ítem se encuentre en el carrito, o **ItemCount** si aún no ha sido agregado.
> - Utilizo _removeItem_ para quitar un ítem del estado _cart_ del _context_ al hacerse click en "Eliminar del carrito".
- Agrego wordings de botones "Terminar mi compra" y "Eliminar del carrito".
- Limpio y ordeno el código.

### Versión 9
- Agrego dos nuevos estados _totalQuantity_ y _totalCount_ en **CartContext** para persistir el valor de la cantidad total de ítems agregados al carrito y el precio total a pagar respectivamente. Estos valores se calculan con un _useEffect_ al modificarse en contenido de _cart_ (por agregarse o quitarse un orden de compra con cierta cantidad e ítem con precio).
- Agrego nueva función _helper_, _updateQuantity_, para actualizar la cantidad a comprar de un ítem en una orden desde **Cart** mediante comandos itroducidos por **ItemCount**.
- Adapto **ItemCount** para poder ser incluido en cada ítem de **Cart** y poder modificar la cantidad deseada de cada ítem. Si un _itemId_ y una cantidad en el carrito le es pasada por props al componente, dejo de mostrar el botón "Agregar al carrito" y utilizo el _helper_ _updateQuantity()_ de **CartContext** en cada comando para actualizar la cantidad de la orden en _cart_ cuyo ítem posee id igual a _itemId_ al hacer click en los comandos.
- Creo componente **Cart** para mostrar el carrito con el resumen de compra. El mismo consume el estado _cart_ de **CartContext** así como ciertos _helpers_ del mismo. Funcionalidades incluidas en **Cart**:
> - Lista de órdenes agregadas al carrito consistentes cada una en un ítem y una cantidad, mostrando imagen, título y precio de cada ítem junto con la cantidad solicitada desde **ItemCount**, y comandos para aumentar o disminuir la cantidad (los cuales fueron introducidos con un **ItemCount**), y un ícono de cancelación de la órden que llama al helper _removeItem()_ de **CartContext** al hacerle click.
> - Botón "Cancelar compra" para eliminar todos los ítems del carrito llamando al _helper_ _clear()_ de **CartContext** al hacerle click.
> - Suma total a pagar de la compra obtenida del estado _totalCount_ del **CartContext**.
> - Mensaje y botón para volver a la página principal que se muestra condicionalmente en caso de no haber ítems en el carrito.
- Incluyo **Cart** en **CartPage**, a la cual se llega navegando a la ruta `/cart` (esto quedó especificado previamente en **App** dentro de un `Route` en el `BrowserRouter`).
- Modifico **CartWidget** para mostrar cantidad total de ítems en el carrito en tiempo real consumiento **CartContext** y accediendo al valor del estado _totalQuantity_ del mismo. Además, redirijo a la ruta `/cart` para mostrar **Cart** al hacer click en el _widget_ utilizando un `Link`.
- Modifico **NavBar** para mostrar condicionalmente **CartWidget** solamente si _cart_ no está vacío (es decir, que se ha agregado al menos una orden con ítem y cantidad a _cart_).
- Instalo el paquete `replace-special-characters` con `npm` para reemplazar caracteres especiales en los nombres de las categorías (como **í** por **i** en "Periféricos") para evitar que la función `snakeCase` los convierta en guiones bajos al convertir los nombres de las categorías en **NavBar** a rutas de la url y se muestren incorrectamente. Lo utilizo también para corregir esto mismo al compara con _categoryId_ en **ItemListContainer** y **ItemList**.
- Paso _categoryId_ por props de **ItemListContainer** a **ItemList** para que muestre el nombre de la categoría como título de la página al navegar a una categoría.
- Elimino signo `$`del precio de los ítems mockeados en **MOCK_DATA.json** para poder calcular el precio total del carrito en **CartContext**, e incluyo el signo por fuera del precio en **Item**, **ItemDetail** y **Cart**.
- Agrego spinner para reemplazar wordings de espera en **ItemList** y **ItemDetailContainer**.
- Corrijo problema de altura en _pages_ en general.
- Doy estilos a componentes en general.
- Agrego y modifico wordings necesarios en **wordings.js**.
- Elimino variable de estilo innecesaria.
- Limpio y ordeno el código.

### Versión 10
- Creo proyecto `tienda-coder-react` en Firebase para acceder a una Firestore Database donde almacenar los datos de los productos de la tienda.
- Creo una colección "productos" en la base de datos con diez documentos, uno por para producto ejemplo de la tienda, con las mismas propiedades almacenadas previamente en **MOCK_DATA.json** y un `id` generado automáticamente para cada uno.
- Instalo `firebase` en el proyecto de React y configuro _firebase_ y la _firestore database_ mediante el archivo **firebase.js** utilizando las _keys_ de configuración provistas por Firebase al crear el proyecto.
- Cambios en **ItemListContainer**:
> - Elimino _async mock_ para obtener ítems de **MOCK_DATA.json** e implemento una llamada a la _firestore database_ en su lugar.
> - Obtengo la categoría actual en caso de que se haya navegado a una categoría y la almaceno en un estado propio.
> - Obtengo la colección "productos" de la _database_ y la filtro su contenido a aquellos ítems de la categoría actual en caso de existir un _categoryId_ proveniente de los _url params_ al navegar a una categoría. Si no se ha navegado a una categoría, obtengo la colección completa de productos (para mostrar como lista en la **HomePage**).
> - Realizo una _query_ `get()` sobre la colección resultante y seteo los ítems resultantes como lista de ítems en un estado propio en caso de resolverse la _promise_ y existir ítems, para pasarla por props a **ItemList**.
> - Muestro mensaje de error por consola en caso de rechazarse la _promise_.
> - Seteo `hasLoaded` a _true_ luego de resolverse o rechazarse la _promise_.
> - Paso categoría actual del _state_ por props a **ItemList** para que lo muestre como título de la página de la categoría correspondiente de productos.
- Cambios en **ItemDetailContainer**:
> - Elimino _async mock_ para obtener ítems de **MOCK_DATA.json** e implemento una llamada a la _firestore database_ en su lugar.
> - Obtengo la colección "productos" de la _database_ y accedo al documento cuyo _id_ es igual al `itemId` obtendio de los _url params_ al navegar al detalle de un ítem con ese _id_
> - Realizo una _query_ `get()` sobre el documento resultante y seteo la data y el _id_ del mismo como un objeto ítem en un estado propio en caso de resolverse la _promise_ y existir el documento, para pasarlo por props a **ItemDetail**.
> - Muestro mensaje de error por consola en caso de rechazarse la _promise_.
> - Seteo `hasLoaded` a _true_ luego de resolverse o rechazarse la _promise_.
> - Elimino _spinner_ y lógica de _loading_ y paso el valor de `hasLoaded` por props a **ItemDetail** para transferirle dicha lógica y la responsabilidad de mostrar el _spinner_.


## Versión 11
- Cambios en **CartContext**:
>- Creo función `getFinalOrder()` para agregar una nueva orden en la colección _órdenes_ de _firestore_ con un buyer hardcodeado temporalmente.
>- Creo estado `orderId` para pasar como _value_ al _provider_ el ID de la nueva orden generada devuelto por _firebase_.
>- Creo estado `isLoading` para pasar como _value_ al _provider_ y mostrar _spinner_ en **Cart** mientras se genera la nueva orden en _firestore_.
>- Modifico el _helper_ `clear()` para que, además de eliminar el contenido del estado `cart`, elimine el estado de `orderId` si es que ya existe uno para poder generar una nueva compra con otro ID si es que ya se había realizado una compra anterior.
>- Optimizo funcionalidad para calcular la cantidad total de ítems y monto total del carrito utilizando el métdo `reduce()`.

- Cambios en **Cart**:
>- Importo estados `orderId` e `isLoading` y _helper_ `getFinalOrder()` de **CartContext**.
>- Creo botón "Realizar compra" que se muestra si no hay un `orderId` y se oculta al generarse dicho valor, lo cual sucede antes y después de realizar la compra respectivamente, y llama a `getFinalOrder()` al hacer click sobre él para generar una nueva orden en _firestore_.
>- Creo botón "Volver a comprar" que se muestra cuando hay un `orderId` y se oculta mientras no haya uno, lo cual sucede después y antes de realizar la compra respectivamente, y llama a `clear()` de **CartContext** para eliminar el contenido del carrito y el `orderId` para poder realizar una nueva compra llenando nuevamente el carrito y generando un nuevo `orderId`.
>- Muestro botón "Cancelar compra" condicionalmente sólo si no existe un `orderId`, lo cual sucede antes de realizar la compra, para cancelar una compra vaciando el carrito antes de que dicha compra se realice.
>- Muestro mensaje de feedback condicionalmente si existe un `orderId`, lo cual sucede luego de realizar una compra, mostrando el `orderId` generado al usuario.
>- Muestro _spinner_ al realizar la compra y hasta se genera la orden, es decir, mientras `isLoading` de **CartContext** vale `true`.

- Cambios en **ItemListContainer**:
>- Paso `categoryId` como prop a **ItemList**.
>- Cambio márgenes del título principal de la prop `greeting`.

- Cambios en **ItemList**:
>- Recibo `categoryId` por props.
>- Muestro la categoría como título si se navegó a una categoría con `categoryId` existente, o un mensaje alertando que la categoría no existe si se navegó a una categoría con `categoryId` inexistente, junto con una lista de ítems para seguir comprando de todas formas. Utilizo el valor de `categoryId` para detectar que se ha navegado a una categoría en este caso y evitar mostrar este mensaje de de alerta en la página principal donde no existe un con `categoryId` porque no se ha navegado a ninguna y se debe mostrar la _home page_ tal como estaba con el título de `greeting`.
>- Modifico márgenes del título y del componente.

- Cambios en **ItemDetailContainer**:
>- Creo estado `foundItem` con valor `true` por defecto para pasar como prop a **ItemDetail**.
>- Seteo `foundItem` a `false` en caso de que ningún ítem sea encontrado en la colección de productos en _firestore_ con el ID provisto, es decir, que se haya navegado a un ítem con ID inexistente.

- Cambios en **ItemDetail**:
>- Recibo prop `foundItem` para representar que un ítem fue encontrado con un ìtemId` correcto.
>- Muestro contenido del componente condicionalmente sólo si se navega a un ítem con ID existente, lo cual sucede cuando `foundItem` es `true`, o un mensaje de feedback informando que el ítem no existe en caso contrario para evitar que se rompa la página.
>- Agrego botón "Continuar comprando" para navegar a la _home page_ luego de agregar un ítem al carrito y poder seguir comprando.

- Agrego un ancho máximo a **HomePage** y **CategoryPage**.
- Agrego _wordings_ necesarios.

## Versión 12
- Instalo `react-with-firebase-auth` para incluir funcionalidad de autenticación mediante _firebsase_ a través de cuenta de Google.
- Disponibilizo el servicio de auteticación de _firebase_ y el _provider_ de autenticación de Google mediante el "HOC" (_Higher Order Component_) `withFirebaseAuth()()` en **App.js**, lo que permite acceder a las props de autenticación en el componente y pasarlas componentes hijos como **NavBar.js** y **HomePage.js** en este caso. Se utiliza el atributo `render` del componente `Route` para poder pasar las props de autenticación a **HomePage.js**. Agrego clase modificadora del contenido principal de la app para mostrar en el centro de la pantalla el cuadro de login cuando el usuario no está autenticado.
- Agrego componentem **Login.js** para mostrar un cuadro de login al ingresar a la app si el usuario no se encuentra autenticado.
- Muestro foto de perfil y botón de logout en **NavBar.js** mediante las props de autenticación pasadas por **App.js**. Corrijo vista del **CartWidget.js** al agregar nuevo contenido en la _navbar_.
- Muestro condicionalmente el contenido de la app o el cuadro de login en **HomePage.js** si el usuario no está autenticado, utilizando las props de autenticación pasadas por **App.js**.
- Creo componente **LoadingSpinner.js** para modularizar lógica de rendering del _loading spinner_ y lo implemento en los componentes correspondientes que lo necesitan.
- Implemento redirección al componente **NotFoundPage.js** cuando se introduce un _ítem ID_ inexistente al buscar el detalle de un ítem, o render del mismo componente cuando por alguna razón no se encuentra ningún ítem para mostrar en el catálogo o en una categoría. Esto mejora el render de un simple título que se estaba haciendo previamente.
- Creo modal de confirmación que aparece al realizar una compra para forzar al usuario a navegar a la _home page_ luego de comprar sin realizar ninguna otra acción, para evitar realice cambios en el carrito todavía activo hasta que navegue a la página de inicio y se reinicie el estado del carrito.
- Creo el componente **CheckoutForm.js** compuesto por otro componente **Input.js** para mostrar el formulario de _checkout_ antes de realizar la compra, para que el usuario ingrese su número de teléfono y dirección y pueda ser registrado en su órden. Mapeo inputs mediante un archivo _json_ de inputs.
- Agrego formulario de _checkout_ a la vista del **Cart.js**, al cual agrego las props de login para mostrar nombre e email del usuario en el checkout.
- Muevo el `<CartProvider>` de **index.js** a **App.js** para poder proveerle las props de login y agregar el email y nombre reales del usuario en la información de la órden. También accedo desde aquí a la información ingresada por el usuario en el form de _checkout_ para cargar todos los datos reales del mismo a la órden en _firebase_, eliminando así los datos mockeados que se habían utilizado en una primera instancia.
- Actualizo **README.md**.
- Mejoro estilos de botones y fuentes del documento.
- Agrego _wordings_ necesarios.
