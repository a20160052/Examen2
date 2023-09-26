nom = prompt("¿Cual es su nombre?")
rpta= 0
rptano= 0
alert("Hola " + nom + " ,Bienvenido/a al cuestionario sobre los mares")
preg1=prompt("¿Cuánta agua hay en la Tierra?\nA. Alrededor de un 41% de la superficie terrestre es agua.\nB. Alrededor de un 51% de la superficie terrestre es agua\nC. Alrededor de un 71% de la superficie terrestre es agua");
preg2=prompt("¿Qué océano es el más grande?\nA. El Pacífico\nB. El Atlántico\nC. El Índico");
preg3=prompt("¿Cuánto mide la parte más profunda de los Océanos?\nA. 11 Km\nB. 23 Km\nC. 31 Km");
if(preg3=="A"){
    preg3=20
}
else{
    preg3=0
}
if(preg2=="A"){
    preg2=20
}
else{
    preg2=0
}
if(preg1=="C"){
    preg1=20
}
else{
    preg1=0
}
total=preg1 + preg2 + preg3
if (total>=40){
document.write("Lo has echo bien, "+ nom + "Tu puntaje es de " + total)
}
else{ 
document.write("Vuelve a intentarlo, " + nom + "Tu puntjae es de " + total)
}