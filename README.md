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

## CHANGELOG


# Versión 0
- Repositorio público de GitHub de la aplicación "tienda-coder-react" (nombre provisorio) creada mediante el código "npx create-react-app tienda-coder-react".
- Algunos archivos innecesarios fueron eliminados y es posible levantar la aplicación ejecutando "npm start" desde la línea de comandos.
# Versión 1
- Instalo node-sass para reemplazar archivos css por scss
- Cambio lenguaje de la app a Español en index.html
- Cambio nombre de la app a "Reactive Games"
- Modifico manifest.json para coincidir con los nuevos cambios
- Reemplazo archivos css por archivos scss
- Creo archivo de variables de estilos __variables.scss
- Creo el directorio components con el componente navBar y sus estilos
- Creo el directorio pages con la página homePage y sus estilos
- Agrego un logo parcial

# Versión 2
- Creo el componente CartWidget para renderizar el ícono de un carrito
- Creo el componente ItemListContainer con una prop 'greeting' para mostrar un título provisorio debajo del navbar
- Incluyo nuevos íconos en el proyecto
- Reordeno estructura del componente NavBar para incluir a CartWidget
- Ajusto estilos
- Renombro __variables.scss como _variables.scss y agrego variables
- Creo wordings.js para almacenar todos los textos de la app y exportarlos desde allí
- Abrevio tags de componentes al no tener contenido entre ellos
- TODO: versionado en README.md, necesitaría un ejemplo para guiarme sobre cómo estructurarlo

# Versión 3
- Creo componente ItemCount. El mismo permite agregar ítems siempre que exista stock de ese ítem, hasta un máximo igual al stock del ítem y con un mínimo de 1 unidad. Adicionalmente, el componente informa si no existe stock del ítem o si se ha alcanzado el máximo disponible del mismo, y permite agregar al carrito el número seleccionado de unidades siempre que haya stock, dando feedback al usuario con una respuesta simulada en un alert.
- Inserto como ejemplo dos ItemCount en ItemListContainer, uno con stock y uno sin stock, para mostrar sus diferencias.
- Creo archivo _components.scss para introducir estilos de elementos estandarizados y reutilizables mediante sus class-names.
- Instalo paquete 'classnames' para manejar las clases de los componentes renderizados.
- Agrego wordings necesarios.
- Agrego variables de estilos necesarias.
- Hago correcciones generales.

# Versión 4
- Creo una lista de items mockeados mediante un MOCK_DATA.json
- Creo componente Item con estilos para mostrar información principal de un ítem
- Creo componente ItemList con estilos para recibir un array de ítems y renderizarlos en componentes Item mediante un map()
- Incluyo ItemList dentro de ItemListContainer, pasándole por props la lista de ítems obtenida de MOCK_DATA.json asíncronamente mediante una Promise que se resuelve luego de 2 segundos. Inicialmente ItemList no recibe ningún ítem por props debido a la demora de la Promise, y recibe los ítems luego de 2 segundos (al resolverse la Promise) mediante un useEffect
- Hago correcciones de estilos, agrego variables de scss y wordings
- Hago correcciones cosméticas en el código

# Versión 5
- Creo componente ItemDetail con estilos para mostrar el detalle de un ítem.
- Creo componente ItemDetailContainer para obtener de MOCK_DATA.json un ítem asíncronamente mediante una Promise dentro de un useEffect(), seteando dicho ítem en un estado propio al resolverse dicha Promise luego de 2 segundos.
- Incluyo ItemDetail dentro de ItemDetailContainer pasándole por props el ítem seteado en el state para mostrar vista de detalle del ítem.
- Incluyo ItemDetailContainer dentro de HomePage para mostrar un ejemplo del detalle de un ítem.
- Hago correcciones de estilos, agrego variables de scss y wordings.
- Hago correcciones cosméticas en el código.

# Versión 6
Instalo react-router-dom desde npm para incluir navegación en la app.
Creo páginas CategoryPage y ItemDetailPage para envolver a ItemListContainer y ItemDetailContainer respectivamente y pasar los url paramas necesarios como props.
Creo página NotFoundPage para mostrar un simple mensaje de feedback al navegar a una ruta sin contenido.
Muevo estructura de HomePage a App y la envuelvo en un BrowserRouter para incluir un Switch y Routes para cada ruta, linkeando a ellas las páginas correspondientes.
Dejo HomePage como un simple wrapper de ItemListContainer para mostrar el catálogo completo.
Modifico NavBar para renderizar las categorías mediante un método map() aplicado sobre una array de categorías importada desde archivo de wordings. Las categorías son renderizadas dentro de elementos <li> y envueltas en un <NavLink> para para navegar a las distintas vistas de ítems por categoría, con un activeClassName para dar estilos al nombre de la categoría a la cual se ha navegado.
Instalo snake-case desde npm para convertir el nombre de las categorías a snake case y poder introducirlas a las rutas de los <NavLink>.
Instalo uuid desde npm para crear una keyId y utilizarla como key de cada elemento <li> renderizado con map() por cada categoría en NavBar.
Incluyo elemento <Link> en NavBar para linkear logo de la marca a la HomePage.
Agrego la property category a cada ítem mockeado en *MOCK_DATA.json.
Recibo el url param categoryId en ItemListContainer y filtro la lista de ítems (recibida de MOCK_DATA.json a través de una Promise en un useEffect()) por categoría, seteando la array resultante como prop para pasar a ItemList. Si ningún categoryId es pasado a ItemListContainer (caso de navegar a HomePage) se muestran todos los ítems (para mostrar catálogo completo en HomePage). El useEffect() recibe a categoryId como dependencia para re-renderizar el componente cada vez que se modifique el valor de esta prop (se navega a otra categoría)
Recibo el url param itemId en ItemDetailContainer y busco en la lista de ítems (recibida de MOCK_DATA.json a través de una Promise en un useEffect()) el item cuyo id es igual al itemId suministrado (mediante un método find()) seteando el elemento resultante como prop para pasar a ItemList. El useEffect() recibe a itemId como dependencia para re-renderizar el componente cada vez que se modifique el valor de esta prop (se navega al detalle de otro ítem).
Linkeo Item a ItemDetailPage mediante un <Link>.
Arreglo estilos en general.
Agrego wordings.

# Versión 7
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
