/*Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
 */
figure = prompt("¿Que figura quieres calcular su area?").toLocaleLowerCase();


let base ; //parseFloat(prompt("¿Cual es la base?"));
let baseM;
let heigth ; //parseFloat(prompt("¿Cual es la altura?"));
let radius ; //parseFloat(prompt("¿Cual es el radio?"));
let lado;
let lado1;
let lado2;
let Dmayor;
let Dmenor;
let apotema;

//crearmos un switch para la eleccion de la variable

switch(figure){
    case "RECTANGULO":
    case "rectangulo":
    case "rectángulo":
        base = prompt("¿Cual es la base?");
        heigth = prompt("¿Cual es la altura?");
        lado = prompt("¿Cual es el valor del primer lado del rectangulo?")
        lado1 = prompt("¿Cual es el valor del segundo lado del rectangulo?")
        //imprimir en la pantalla
        document.write(`El area del rectangulo es: ${base*heigth} y el perimetro es ${parseInt(lado*2) + parseInt(lado1*2)}`)
        break;
    
    case "triangulo":
        base = prompt("¿Cual es la base?");
        heigth = prompt("¿Cual es la altura?");
        lado = prompt("¿Cual es el primer valor del primer lado del triangulo?")
        lado1 = prompt("¿Cual es el primer valor del segundo lado del triangulo?")
        lado2 = prompt("¿Cual es el primer valor del tercer lado del triangulo?")
        document.write(`El area del triangulo es: ${(base*heigth)/2} y el perimetro es ${parseInt(lado) + parseInt(lado1) + parseInt(lado2)}`)
        break;
    
    case "circulo":
        radius = prompt("¿Cuanto tienes de radio?")
        document.write(`El area del circulo es: ${(Math.PI* Math.pow(radius,2))} y el perimetro del circulo es ${(Math.PI)*(radius*2)}`)
        break;

    case "cuadrado":
        lado = prompt("¿Cual es el lado del cuadrado?")
        document.write(`El area del cuadrado es ${(lado*lado)} y su perimetro es ${(lado*4)}`)
        break;
    
    case "rombo":
        Dmayor = prompt("¿Cual es el valor de la Diagonal mayor?")
        Dmenor = prompt("¿Cual es el valor de la Diagonal menor?")
        document.write(`El area del rombo es ${(Dmayor*Dmenor)} y el perimetro del rombo es ${( parseInt (Dmayor) +     parseInt (Dmayor) + parseInt (Dmenor) + parseInt (Dmenor))}`)
        break;

    case "romboide":
        base = prompt("¿Cual es la base?")
        heigth = prompt("¿Cual es la altura?")
        document.write(`El area del romboide es ${(base*heigth)} y el perimetro del romboide es ${( parseInt (base) + parseInt(base) + parseInt(heigth) + parseInt(heigth))}`)
        break;
    
    case "trapecio":
        base = prompt("¿Cual es la base mayor?")
        baseM = prompt("¿Cual es la base menor?")
        heigth = prompt("¿Cual es la altura?")
        lado = prompt("¿Cual es el valor del lado?")
        document.write(`El area del trapecio es ${(heigth*(base*baseM)/2)} y el perimetro del  trapecio es ${(parseInt(base) + parseInt(baseM) + parseInt(lado) + parseInt(lado))}`)
        break;

    case "pentagono":
        lado = prompt("¿Cual es el lado?")
        apotema = prompt("¿Cual es el valor del apotema?")
        document.write(`El a rea del pentagono es ${(parseInt(lado*5)*(apotema)/2)} y el area del pentagono es ${(lado*5)}`)
        break;

        default: document.write(`La opcion que busca no existe`)
}