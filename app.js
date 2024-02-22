alert('Bienvenidos al juego del numero secreto');

//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos =  1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Elige un numero entre 1 y ${numeroMaximoPosible} por favor.`));

    console.log(typeof(numeroUsuario));

    //Este codigo realiza la comparacion
    if (numeroUsuario == numeroSecreto) {
        //Acertamos fue verdadera la condicion
        alert(`Acertaste, el número secreto es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('el numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //Incrementamos el contador cuando no se acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos ++;
        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condicion no se cumplio 
        //alert('Lo siento, no acertaste el numero');
    }
}
