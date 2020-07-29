/**
 * *JS - Jogo do Dado
 * @autor Roque Rafael
 * aprendendo Math
 */
var sorteio = Math.floor(Math.random() * 6 + 1);

switch (sorteio){
    case 1:
        document.getElementById('face').src='img/1.png';
        break
    case 2:
        document.getElementById('face').src='img/2.png';
        break
    case 3:
        document.getElementById('face').src='img/3.png';
        break
    case 4:
        document.getElementById('face').src='img/4.png';
        break
    case 5:
        document.getElementById('face').src='img/5.png';
        break
    case 6:
        document.getElementById('face').src='img/6.png';
        break
    default:
        //caso contrario
        break;

}