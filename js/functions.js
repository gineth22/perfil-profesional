













//console
console.log(name);
// body
document.write(name + "###Gineth Trillos")
document.getElementById("box_one").innerHTML
document.getElementById("box_two").innerText
// librerias
//Swal.fire(
//    'The Internet?',
 //   'That thing is still around?',
//    'question'
//  )
//Swal.fire({
//     icon:'error',
//     showConfirmButton: false,
//     tittle: name,
//     text: name,
//     footer: "footer: "+name,
//     background: 'green',
//     position: 'top-start'
// });

//######tipos de datos
//numericos

var number_one = 20;
var number_two = 5.5
//texto
var class_type = "electiva tecnica 1";
//booleanos
var boolean = true; //flase
//array - vectores
var array_num=[1,2,3,4,5,3,4,1.2];
var array_text = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var array_mix = [1, "a",2, "c"];
var array_mu1 = [
    {name: "gineth", last_name:"trillos", age: "19"},
    {name: "gineth", last_name:"trillos", age: "19"},
    {name: "gineth", last_name:"trillos", age: "19"},
    {name: "gineth", last_name:"trillos", age: "19"}
]

//###### operadores basicos 
//suma
var suma = number_one + number_two;
console.log("suma="+suma);
//resta
var resta = number_one - number_two;
console.log("resta="+resta);
//multiplicacion
var multi = number_one * number_two;
console.log("multiplicacion="+multi);
//division
var divi = number_one / number_two;
console.log("division="+divi.toFixed(2));
//modulo
var modulo= number_one % number_two;
console.log("modulo="+modulo)

















//condicionales inverese, incremento y decremento
//AND && con IF
var bool = true;
var numeric = 10;
if(!bool && NUMERIC == 10){
    console.log("ENTRA IF");
}
else{
    console.log("ENTRA ELSE");
}
//or || 
if(bool || numeric == 7 ){
    console.log("ENTRA IF");
    numeric++;

}else{
    console.log ("ENTRA ELSE");
    numeric--;
}
console.log(numeric);
//FOR

for(let j = 0;j<array_text.length; j++){
    console.log(array_text[j] + (j+1));

}

//WHILE
let f=0;
while(f<array_text-length){
    console.log(array_text[f] + (f+1));
    f++;
}
//DO WHILE
let m = 0;
do{
    console.log(array_text[m] + (m+1));
    m++;

}while(m<array_text.length);

//FUNCIONES Y EVENTODS 
function load_page(){
    alert("la pagina se ha cargado completamente");
}
function change_color(){
    document.body.style.backgroundColor = "red";
    document.body.style.color = "#fff"
}
 const btn_limpiar = document.querySelector("#clear_color");
 clean_color.addEventListener("dblclick", () =>{
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000"
 });

 //registro formulario
 const form_register = document.getElementById("form_register");

 const nombres = document.getElementById("nombres");
 const apellidos = document.getElementById("apellidos");
 const information= document.getElementById("information");

 form_register.addEventListener("submit" , name_event => {
    name_event.preventDefault();
    let info ="";
    // console.log(nombres.value);
    if(nombres.ariaValueMax.length <=2 || apellidos.value.length <=2){
      
        info += "nombre y/o apellidos invalidos"
        information.style.color = "red";

    }
    else{
        alert(nombre.value + " " + apellidos.value);

    }
    information.innerText = info;
 })