# Proyecto: Aura Cinética Interactiva

## 1. Información del Proyecto
- **Nombre:** Aura Cinética Interactiva
- **Autor/a:** Sofía Salvo
- **Asignatura:** Pensamiento Computacional
- **Institución:** Universidad Diego Portales
- ![Obra original](Imagenes/resutado.png)

## 2. Descripción Objetiva
Este proyecto es una pieza de arte generativo e interactivo desarrollado en **p5.js**. El sistema genera una retícula de elementos geométricos que responden en tiempo real al movimiento del cursor del usuario. 
- **Qué se ve:** Un lienzo oscuro sobre el cual se despliega una grilla dinámica de cuadrados y elipses que mutan de forma y color.
- **Inputs:** Utiliza la posición del mouse (coordenadas X e Y) y el reloj interno del sistema (frameCount).
- **Outputs:** Una respuesta visual reactiva que transforma la geometría de los elementos mediante escalado, rotación y variaciones cromáticas en el espectro HSB.

## 3. Descripción Conceptual
- **Idea central:** El proyecto explora la **"perturbación espacial"**. La grilla representa el orden y el rigor geométrico, mientras que el cursor del usuario actúa como un agente caótico que "dobla" o "rompe" ese orden al pasar por encima.
- **Referente:** Este trabajo dialoga directamente con el **Arte Cinético** de **Julio Le Parc**. Se busca replicar esa sensación de inestabilidad óptica y dinamismo donde el espectador, con su presencia, altera la obra.
- **Referentes visuales:** Las series de "Continuel-mobile" de Le Parc, donde la repetición de formas simples genera una ilusión de movimiento fluido.
- **Principio de diseño:** El contraste entre lo **estático** (el fondo de elipses lineales) y lo **cinético** (los cuadrados que giran y escalan).

## 4. Input / Output y Sistema
El sistema se rige por una lógica de **proximidad euclidiana**:
1. **Input:** El sistema captura constantemente la posición `(mouseX, mouseY)`.
2. **Proceso:** Se utiliza la función `dist()` para medir qué tan cerca está cada elemento de la grilla respecto al puntero. Mediante `map()`, esta distancia se traduce en:
    - **Tamaño:** A mayor cercanía, mayor escala.
    - **Rotación:** Si la distancia es crítica (< 70px), se activa una transformación angular.
    - **Color:** Se calcula un nuevo tono HSB basado en la posición del puntero y el tiempo transcurrido, asegurando una transición fluida en tonos fríos.
3. **Output:** Renderizado gráfico en tiempo real que actualiza 60 veces por segundo.

## 5. Diagrama de Flujo
![Diagrama de flujo del sistema](diagrama/diagrama_flujo.png)
*(Nota: Asegúrate de subir la imagen de tu diagrama en la carpeta 'diagrama')*

## 6. Proceso de Creación
- **Fase 1 (Estructura):** Creación de la grilla mediante bucles `for` anidados.
- **Fase 2 (Interactividad):** Integración de `dist()` para permitir que la obra "sienta" al usuario.
- **Fase 3 (Estética):** Ajuste de la paleta de colores usando el modo HSB para lograr tonos turquesas y morados.
- **Fase 4 (Perfeccionamiento):** Implementación de funciones parametrizadas y estructuras de control (condicionales) para la rotación final.

## 7. Ejecución
[Puedes ver y editar el código en vivo aquí:
](https://editor.p5js.org/sofia.salvo/sketches/Y7TJ3mxGa)
