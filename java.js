let numerosPosats = [];
let numerosPosats2 = [];
let numerosName = [];
let revelados=[]
let numero = 0;
let numero1=0
let elements = 0
let parejas=0
let img=""
let puntos=0
let puntitos=0
let nariz=0
function seguentNumero(total){
    numero = Math.floor(Math.random()*total);
    if (numerosPosats.indexOf(numero) < 0) {
        numerosPosats.push(numero)
    } else {
        while (numerosPosats.indexOf(numero) >= 0) {
            numero = Math.floor(Math.random()*total);
        }
        numerosPosats.push(numero)
    }     
}
function seguentNumero1(total){
    numero1 = Math.floor(Math.random()*total);
    if (numerosPosats2.indexOf(numero1) < 0) {
        numerosPosats2.push(numero1)
    } else {
        while (numerosPosats2.indexOf(numero1) >= 0) {
            numero1 = Math.floor(Math.random()*total);
        }
        numerosPosats2.push(numero1)
    }     
}
function revealCard(num) {
    let carta = document.getElementsByClassName('card')[num]
    let img = carta.querySelector('img')
  
  
    if (revelados.length == 2) return
  
    img.style.display = 'block'
    carta.removeAttribute( "onclick" )
    revelados.push({ num, src: img.src })
    
  
    if (revelados.length == 2) {
      setTimeout(comprobar, 1000)
    }
}
function villano() {
  parejas=0
  document.querySelector(".juego").style.backgroundImage= "url('recursos/malvado.jpg')";
  revelados=[]
  document.querySelector(".cartas").innerHTML = "";
  let dinamiHTML = "";
  let dinamiHTML2 = "";
  numerosPosats = [];
  numerosPosats2 = [];
  numerosName = [11,10,9,8,7,6,5,4,3,2,1,0];
  elements = 0;
  while (elements < 6) {
    seguentNumero(6);
    let num = numerosName.pop(); // elimina el primer elemento del array
    dinamiHTML ="<div class='card' name='" +num +"' onclick='revealCard(" +num +")'><img class='oculto' src='recursos/villano" +numero +".jpg' name='" +num +"'></div>";
    document.querySelector(".cartas").innerHTML =document.querySelector(".cartas").innerHTML + dinamiHTML;
    seguentNumero1(6);
    let num2 = numerosName.pop(); // elimina el primer elemento del array
    dinamiHTML2 ="<div class='card' name='" +num2 +"' onclick='revealCard(" +num2 +")'><img class='oculto' src='recursos/villano" +numero1 +".jpg' name='" +num2 +"'></div>";
    document.querySelector(".cartas").innerHTML =document.querySelector(".cartas").innerHTML + dinamiHTML2;
    elements++;
  }
  numerosPosats = [];
  numerosPosats2 = [];
}
function protagonista() {
  parejas=0
  document.querySelector(".juego").style.backgroundImage= "url('recursos/paraiso.jpg')";
  revelados=[]
  document.querySelector(".cartas").innerHTML = "";
  let dinamiHTML = "";
  let dinamiHTML2 = "";
  numerosPosats = [];
  numerosPosats2 = [];
  numerosName = [11,10,9,8,7,6,5,4,3,2,1,0];
  elements = 0;
  while (elements < 6) {
    seguentNumero(6);
    let num = numerosName.pop(); // elimina el primer elemento del array
    dinamiHTML ="<div class='card' name='" +num +"' onclick='revealCard(" +num +")'><img class='oculto' src='recursos/personaje" +numero +".jpg' name='" +num +"'></div>";
    document.querySelector(".cartas").innerHTML =document.querySelector(".cartas").innerHTML + dinamiHTML;
    seguentNumero1(6);
    let num2 = numerosName.pop(); // elimina el primer elemento del array
    dinamiHTML2 ="<div class='card' name='" +num2 +"' onclick='revealCard(" +num2 +")'><img class='oculto' src='recursos/personaje" +numero1 +".jpg' name='" +num2 +"'></div>";
    document.querySelector(".cartas").innerHTML =document.querySelector(".cartas").innerHTML + dinamiHTML2;
    elements++;
  }
  numerosPosats = [];
  numerosPosats2 = [];
}
function comprobar() {
    let [carta1, carta2] = revelados
    if (carta1.src == carta2.src) {
      parejas++
    } else {
      let img1 = document.getElementsByClassName('card')[carta1.num]
      let img2 = document.getElementsByClassName('card')[carta2.num]
      img1.querySelector('img').style.display = 'none'
      img2.querySelector('img').style.display = 'none'
      img1.setAttribute("onclick", "revealCard(" + carta1.num + ")")
      img2.setAttribute("onclick", "revealCard(" + carta2.num + ")")
    }
    if(parejas==6){
      alert("¡Felicidades! Has encontrado todas las parejas")
      document.querySelector(".cartas").innerHTML=""
      document.querySelector(".juego").style.backgroundImage= "url('recursos/fondo2.jpg')";
      parejas=0
    }
    revelados = []
}
function simbolo(){
  puntos=0
  document.getElementById("a").style.display="none"
  document.getElementById("b").style.display="none"
  document.getElementById("c").style.display="none"
  document.getElementById("d").style.display="none"
  document.querySelector(".simbolo").style.display="grid"
  document.querySelector(".ojo").style.display="none"
  document.querySelector(".objeto").style.display="none"
  document.querySelector(".audio").style.display="none"
  document.querySelector(".cambiar").style.display="block"
  document.querySelector(".tituloOculto").style.display="none"
}
function ojo(){
  puntos=0
  document.getElementById("a").style.display="none"
  document.getElementById("b").style.display="none"
  document.getElementById("c").style.display="none"
  document.getElementById("d").style.display="none"
  document.querySelector(".simbolo").style.display="none"
  document.querySelector(".ojo").style.display="grid"
  document.querySelector(".objeto").style.display="none"
  document.querySelector(".audio").style.display="none"
  document.querySelector(".cambiar").style.display="block"
  document.querySelector(".tituloOculto").style.display="none"
}
function objeto(){
  puntos=0
  document.getElementById("a").style.display="none"
  document.getElementById("b").style.display="none"
  document.getElementById("c").style.display="none"
  document.getElementById("d").style.display="none"
  document.querySelector(".objeto").style.display="grid"
  document.querySelector(".ojo").style.display="none"
  document.querySelector(".simbolo").style.display="none"
  document.querySelector(".audio").style.display="none"
  document.querySelector(".cambiar").style.display="block"
  document.querySelector(".tituloOculto").style.display="none"
}
function audio(){
  puntos=0
  document.getElementById("a").style.display="none"
  document.getElementById("b").style.display="none"
  document.getElementById("c").style.display="none"
  document.getElementById("d").style.display="none"
  document.querySelector(".audio").style.display="grid"
  document.querySelector(".ojo").style.display="none"
  document.querySelector(".objeto").style.display="none"
  document.querySelector(".simbolo").style.display="none"
  document.querySelector(".cambiar").style.display="block"
  document.querySelector(".tituloOculto").style.display="none"
}
function cambiarTema(){
  document.getElementById("a").style.display="block"
  document.getElementById("b").style.display="block"
  document.getElementById("c").style.display="block"
  document.getElementById("d").style.display="block"
  document.querySelector(".audio").style.display="none"
  document.querySelector(".ojo").style.display="none"
  document.querySelector(".objeto").style.display="none"
  document.querySelector(".simbolo").style.display="none"
  document.querySelector(".cambiar").style.display="none"
  document.querySelector(".campo").innerHTML=""
  document.querySelector(".puntos").innerHTML="Puntos:0"
  nariz=1
  while(nariz<=24){
    document.querySelector("div[name='oculto"+nariz+"']").style.display = "none";
    document.querySelector("div[name='"+nariz+"']").style.display = "flex";
    document.querySelector("div[name='"+nariz+"']").style.backgroundColor = "gold";
    nariz++
  }
}
function nivelsim(num1){
  img=""
  document.querySelector(".simbolo .campo").innerHTML=""
  img="<img src='recursos/simbolo"+num1+".png' width='450px' height='500px'><button class='respuesta' id='n1sim' onclick='incorrecto()'>Dragon ball</button><button class='respuesta' id='n2sim' onclick='incorrecto()'>Eminence in the shadow</button><button class='respuesta' id='n3sim' onclick='incorrecto()'>Mashle</button><button class='respuesta' id='n4sim' onclick='incorrecto()'>Jujutsu kaisen</button><button class='respuesta' id='n5sim' onclick='incorrecto()'>One piece</button><button class='respuesta' id='n6sim' onclick='incorrecto()'>Tokyo revengers</button>"
  document.querySelector(".simbolo .campo").innerHTML=img
  if (num1==1){
    document.getElementById("n2sim").setAttribute("onclick","correcto(1)")
  }
  if (num1==2){
    document.getElementById("n1sim").setAttribute("onclick","correcto(2)")
  }
  if (num1==3){
    document.getElementById("n3sim").setAttribute("onclick","correcto(3)")
  }
  if (num1==4){
    document.getElementById("n6sim").setAttribute("onclick","correcto(4)")
  }
  if (num1==5){
    document.getElementById("n5sim").setAttribute("onclick","correcto(5)")
  }
  if (num1==6){
    document.getElementById("n4sim").setAttribute("onclick","correcto(6)")
  }
}
function nivelojo(num2){
  img=""
  document.querySelector(".ojo .campo").innerHTML=""
  img="<img src='recursos/ojo"+num2+".jpg' width='350px' height='250px'>        <button class='respuesta' id='n1ojo' onclick='incorrecto()'>Dragon ball</button> <button class='respuesta' id='n2ojo' onclick='incorrecto()'>Eminence in the shadow</button><button class='respuesta' id='n3ojo' onclick='incorrecto()'>Mashle</button><button class='respuesta' id='n4ojo' onclick='incorrecto()'>Jujutsu kaisen</button><button class='respuesta' id='n5ojo' onclick='incorrecto()'>One piece</button><button class='respuesta' id='n6ojo' onclick='incorrecto()'>Tokyo revengers</button>"
  document.querySelector(".ojo .campo").innerHTML=img
  if (num2==1){
    document.getElementById("n5ojo").setAttribute("onclick","correcto(7)")
  }
  if (num2==2){
    document.getElementById("n6ojo").setAttribute("onclick","correcto(8)")
  }
  if (num2==3){
    document.getElementById("n4ojo").setAttribute("onclick","correcto(9)")
  }
  if (num2==4){
    document.getElementById("n2ojo").setAttribute("onclick","correcto(10)")
  }
  if (num2==5){
    document.getElementById("n1ojo").setAttribute("onclick","correcto(11)")
  }
  if (num2==6){
    document.getElementById("n3ojo").setAttribute("onclick","correcto(12)")
  }
}
function nivelobj(num3){
  img=""
  document.querySelector(".objeto .campo").innerHTML=""
  img="<img src='recursos/objeto"+num3+".png' width='350px' height='350px'>     <button class='respuesta' id='n1obj' onclick='incorrecto()'>Dragon ball</button> <button class='respuesta' id='n2obj' onclick='incorrecto()'>Eminence in the shadow</button><button class='respuesta' id='n3obj' onclick='incorrecto()'>Mashle</button><button class='respuesta' id='n4obj' onclick='incorrecto()'>Jujutsu kaisen</button><button class='respuesta' id='n5obj' onclick='incorrecto()'>One piece</button><button class='respuesta' id='n6obj' onclick='incorrecto()'>Tokyo revengers</button>"
  document.querySelector(".objeto .campo").innerHTML=img;
  if (num3==1){
    document.getElementById("n3obj").setAttribute("onclick","correcto(13)")
  }
  if (num3==2){
    document.getElementById("n1obj").setAttribute("onclick","correcto(14)")
  }
  if (num3==3){
    document.getElementById("n5obj").setAttribute("onclick","correcto(15)")
  }
  if (num3==4){
    document.getElementById("n6obj").setAttribute("onclick","correcto(16)")
  }
  if (num3==5){
    document.getElementById("n4obj").setAttribute("onclick","correcto(17)")
  }
  if (num3==6){
    document.getElementById("n2obj").setAttribute("onclick","correcto(18)")
  }
}
function nivelaud(num4){
  aud=""
  document.querySelector(".audio .campo").innerHTML=""
  aud="<audio autoplay controls><source src='recursos/musica"+num4+".mp3' type='audio/mpeg'></audio><form> <input type='radio' name='radio1' id='n"+num4+"simba'/>Dragon ball <br><input type='radio' name='radio1' id='n"+num4+"simbb'/>Eminence in shadow <br><input type='radio' name='radio1' id='n"+num4+"simbc'/>Tokyo revengers<br><input type='radio' name='radio1' id='n"+num4+"simbd'/>One piece <br><input type='radio' name='radio1' id='n"+num4+"simbe'/>Jujutsu Kaisen <br><input type='radio' name='radio1' id='n"+num4+"simbf'/>Mashle <br><input type='button' class='final' value='Comprobar' onclick='check()'></form>"
  document.querySelector(".audio .campo").innerHTML=aud;
}
function correcto(cosa){
  alert("¡Correcto!");
  puntos++;
  puntitos=0
  if(cosa>=1 && cosa<=6) puntitos=1
  
  if(cosa>=7 && cosa<=12) puntitos=2

  if(cosa>=13 && cosa<=18) puntitos=3

  if(cosa>=19 && cosa<=24) puntitos=4

  document.querySelector(".puntos[name='jojo"+puntitos+"']").innerHTML = "Puntos: " + puntos;
  document.querySelector("div[name='campo"+puntitos+"']").innerHTML = "";
  document.querySelector(".oculto[name='oculto"+cosa+"']").style.display = "flex";
  document.querySelector(".palo[name='"+cosa+"']").style.display = "none";
  document.querySelector(".oculto[name='oculto"+cosa+"']").style.backgroundColor = "green";
}
function incorrecto(){
  alert("¡Incorrecto!");
  document.querySelector(".simbolo .campo").innerHTML = "";
  document.querySelector(".ojo .campo").innerHTML = "";
  document.querySelector(".objeto .campo").innerHTML = "";
  document.querySelector(".audio .campo").innerHTML = "";
}