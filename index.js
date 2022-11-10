let nombre = prompt('ingrese su nombre para interactuar con la calculadora');
let edad = prompt('ingrese su edad para interactuar con la calculadora');

while(edad === ''){
    alert('este elemento es obligatorio');
    edad = prompt('por favor coloque su edad');
}
console.log(nombre, edad);

const numeroA = parseInt(prompt('ingrese su primér número'));
const operacion = prompt('seleccione la operacion que quiera realizar');
const numeroB = parseInt(prompt('ingrese su segundo número'));

switch (operacion) {
    case '+':
       alert('la suma es de: ' + (numeroA + numeroB));
    break;
    case '-':
        alert('la resta es de: ' + (numeroA - numeroB));
    break;
    case '/':
        alert('la divición es de: ' + (numeroA / numeroB));
    break;
    case '*':
        alert('la multiplicación es de: ' + (numeroA * numeroB));
    break;
    default:
        alert('ingreso invalido');
}

for(i = 1; i <= 5; i ++){
    console.log(i);
}
console.log('su cantidad de interacciones');