// ==========================================
// Variables propias (Control de la Matriz)
// ==========================================
let cantidadColumnas = 15; // Define la densidad horizontal de la grilla
let cantidadFilas = 15;    // Define la densidad vertical de la grilla
let tamañoMaximo;          // Almacena el tamaño límite en píxeles de cada celda
let tonoBase;              // Guarda el color inicial aleatorio del sistema

function setup() {
  createCanvas(600, 600);          // Define un lienzo cuadrado para formato afiche
  colorMode(HSB, 360, 100, 100);   // Modo de color ideal para transiciones fluidas de Op Art
  rectMode(CENTER);                // Configura el dibujo de rectángulos desde su centro geométrico
  
  tamañoMaximo = width / cantidadColumnas; // Automatiza el tamaño de cada elemento para que todo calce
  tonoBase = random(0, 360);              
}

function draw() {
  background(0); // Fondo base negro para maximizar el contraste óptico
  
  // // Cuántos fotogramas han pasado desde que inició el programa.
  let factorTiempo = frameCount * 0.02; 

   // Bucle anidado , El primer bucle (i) recorre las columnas horizontalmente.
  // El segundo bucle (j) recorre las celdas verticalmente.
  for (let i = 0; i < cantidadColumnas; i++) {
    for (let j = 0; j < cantidadFilas; j++) {
      
      // Calcular la posición exacta en píxeles del centro de cada celda
      let x = (i * tamañoMaximo) + tamañoMaximo / 2;
      let y = (j * tamañoMaximo) + tamañoMaximo / 2;
      
    
      // Calcula la distancia matemática continua entre el cursor y la celda actual
      let distanciaMouse = dist(mouseX, mouseY, x, y);
      
      // Función propia con parámetros.
      dibujarElementoOptico(x, y, distanciaMouse, factorTiempo);
    }
  }
}


// Mi función propia (Módulo de Comportamiento Visual)
function dibujarElementoOptico(posX, posY, dMouse, tiempo) {
  
  // Uso de map 1 (Control de Escala Proporcional)
  let tam = map(dMouse, 0, width, tamañoMaximo * 1.5, tamañoMaximo * 0.1);
  tam = constrain(tam, tamañoMaximo * 0.1, tamañoMaximo * 1.5);
  
  // Uso de Map (Gradiente Cromático Dinámico)
  let variacionColor = map(dMouse, 0, width, 0, 150);
  let colorDinamico = (tonoBase + variacionColor + sin(tiempo) * 30) % 360;

  
  // Condicional 1: Comportamiento reactivo según el radio de cercanía del cursor
  if (dMouse < 125) {
    fill(colorDinamico, 60, 100); // Relleno sólido satinado de alta luminosidad
    noStroke();
    
    push(); // Aísla las transformaciones espaciales de esta celda
    translate(posX, posY);
    
    // Condicional 2: Si el mouse está en el núcleo de la interacción, activa la rotación cinetica
    if (dMouse < 70) {
      rotate(tiempo * 2);
    }
    
    rect(0, 0, tam, tam); // Renderiza el módulo cuadrado activo
    pop(); // Restaura la matriz de dibujo original
    
  } else {
    // Comportamiento base de fondo: Mantiene una estructura geométrica más rígida y estática
    stroke(colorDinamico, 50, 80);
    noFill();
    ellipse(posX, posY, tam * 0.8, tam * 0.8); // Renderiza la elipse lineal pasiva
  }
}