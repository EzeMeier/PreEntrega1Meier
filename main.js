alert("Bienvenidos al Test del Inversor");
const usuarioValido = "Inversor";
const passValido = "2468";

let usuario = prompt("Por favor ingrese su usuario");
let pass = prompt("Por favor ingrese su contraseña");

if(usuario === usuarioValido && pass === passValido){
    alert("Bienvenido " + usuario);

    let cantidadInversiones = parseInt(prompt("Ingrese la cantidad de inversiones anuales que esta dispuesto a realizar"));

    for(let i = 0; i < cantidadInversiones; i++) {
        let nombreInversor = prompt("Por favor ingrese su nombre");
        let primerTrimestre = parseInt(prompt("Dinero en $ que esta dispuesto a invertir en el primer trimestre del año"));
        let segundoTrimestre = parseInt(prompt("Dinero en $ que esta dispuesto a invertir en el segundo trimestre del año"));
        let tercerTrimestre = parseInt(prompt("Dinero en $ que esta dispuesto a invertir en el tercer trimestre del año"));
        let cuartoTrimestre = parseInt(prompt("Dinero en $ que esta dispuesto a invertir en el cuarto trimestre del año"));
        let promedioIversiones = calcularPromedio(primerTrimestre,segundoTrimestre,tercerTrimestre,cuartoTrimestre);
        alert(`El promedio anual de las inversiones en \$ que desea realizar ${nombreInversor} es de ${promedioIversiones.toFixed(2)}`);
        
        let inversorArriesgado = arriesgado(promedioIversiones);

        if(inversorArriesgado) {
            alert(`${nombreInversor} tu perfil se adapta a un inversor arriesgado`);
            break;
        } else {
            alert(`${nombreInversor} tu perfil no se adapta a un inversor arriesgado`);
            break;
        }
    }
} else {
        alert("Usuario o contraseña incorrecta");
    
}

function calcularPromedio (primerTrimestre,segundoTrimestre,tercerTrimestre,cuartoTrimestre){
    let promedioIversiones = (primerTrimestre+segundoTrimestre+tercerTrimestre+cuartoTrimestre) / 4;
    return promedioIversiones; 
}

function arriesgado(promedioIversiones){
    if(promedioIversiones >= 500000){
        return true
    } else{
        return false;
    }
}