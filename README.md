# PROYECTO 3 - TIC TAC TOE
Primera versión: febrero 2023

![image](https://user-images.githubusercontent.com/122631261/218339216-031ad3d3-01df-4116-9a3a-4e753ec39583.png)

## Tabla de contenidos

- [Cómo funciona🕹️](#cómo-funciona)
- [Referencias📷](#referencias)
- [Desarrollo⛏️](#desarrollo)
- [Errores conocidos⛑️](#errores-conocidos)
- [Licencia y Copyright📃](#licencia-y-copyright)

- Gracias por visitar el proyecto **TIC TAC TOE: Vampires vs Werewolves Edition**. En él podrás encontrar una desenfadada y nostálgica versión del juego del **tres en raya** con estética 16 bits, protagonizado por dos de los monstruos más queridos de la cultura popular: los vampiros y los hombres lobo.
### Cómo funciona
- Desde la pantalla de inicio podrás arrancar el juego o acceder a un breve resumen de las reglas básicas del juego. Cada jugador podrá colocar una ficha por turno en cualquiera de las nueve casillas que conforman el tablero hasta agotar el total de tres fichas que posee y siempre y cuando la casilla no esté ocupada por la ficha del otro jugador. Una vez colocadas las tres fichas, podrá recuperar una de sus fichas a su elección y recolocarla en otra casilla vacía. El objetivo es situar las tres fichas en línea, tanto en horizontal, como en vertical y utilizando las diagonales.
- Para jugar, primero debes elegir entre el modo para **dos jugadores y el modo historia**. En el primero, cada jugador deberá seleccionar bando, escribir su nombre y lanzarse a jugar. Siempre empezarán los vampiros. En el modo historia, el jugador toma el papel de un longevo vampiro y se enfrentará a los hombres lobo, controlada por la **CPU**.

![image](https://user-images.githubusercontent.com/122631261/218339531-c859036a-4fd8-497f-bede-849a1df101aa.png)

 ### Referencias
- Toda la estética del juego está bebe de dos elementos clásicos de la cultura popular. Por un lado, la rivalidad entre **Vampiros y Hombres Lobo**, que se ha convertido en un enfrentamiento clásico en cine, literatura y novela gráfica. Por otro, la estética pixel-art que imita el aspecto nostálgico de los videojuegos de **16 bits**, como los que pudimos encontrar en SEGA Mega Drive o Super Nintendo.

![image](https://user-images.githubusercontent.com/122631261/218339590-f9a0e180-f9a3-4d25-9539-ee222a508fc0.png)

### Desarrollo
- Todo el proyecto está desarrollado con **HTML 5, CSS 3 y JavaScript**. Para su desarrollo se ha empleado Visual Studio Code, Adobe Photoshop CS6 y Google Chrome. La web del juego es completamente responsive y está diseñada para presentar un aspecto limpio y ordenado, en especial cuando se ejecuta en dispositivos móviles. Para el apartado responsive del proyecto, se ha utilizado Bootstrap 5. El apartado artístico y visual, así como los diseños de los personajes y el logotipo está desarrollado con Photoshop.

![image](https://user-images.githubusercontent.com/122631261/218339885-cd88c65f-2702-4c9c-98eb-c6007d7009e0.png)

- Para esta versión 1.0, se han añadido nuevos diseños para los botones y la introducción de un **nuevo personaje: Van Helsing**. El cazavampiros es el villano al que batir en el nuevo **Modo Historia**, en el que tomaremos el control del último descendiente de los Dracul en una partida **contra la CPU**. El desarrollo de la CPU ha pasado por varias fases, desde una en la que apenas mostraba inteligencia, moviendo de forma totalmente aleatoria, a la actual, en la que busca lograr las jugadas ganadoras y evitar la victoria del jugador. El funcionamiento de la CPU parte de movimientos aleatorios en la colocación de las fichas y en la retirada de las mismas. Cuando dos de las fichas entran en posición de victoria, coloca la tercera ficha completando la fila. Este sistema permite a la CPU evitar la victoria simple del jugador y lograr la suya.

![image](https://user-images.githubusercontent.com/122631261/219850727-17770373-56f5-4b8c-899b-3cac03d13341.png)

### Errores conocidos
- Aunque la CPU ya persigue jugadas ganadoras y consigue evitar victorias simples del jugador, todavía no está preparada para evitar jugadas trampa o retirar ficha seleccionando la más conveniente.

### Licencia y Copyright

- Todo el contenido del repositorio se encuentra bajo licencia MIT. Las imágenes, son propiedad de Felipe Báguena Peña.
