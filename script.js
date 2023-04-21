var hovderecha = document.getElementById("filtro-derecha");
var hovizquierda = document.getElementById("filtro-izquierda");
var correct = "izquierda";
var contador = 0;
var casos = [];

hovderecha.addEventListener("mouseover", function(){ // PASAR MOUSE DERECHA
    document.getElementById("derecha").style.scale = 1.12;
    document.getElementById("h3-der").classList.add("h3-hover");
    document.getElementById("h3-der").style.scale = 1.0;
    document.getElementById("izquierda").style.filter = "grayscale(0.6)";
});
hovderecha.addEventListener("mouseout", function(){                          // SACAR MOUSE DERECHA
    document.getElementById("derecha").style.scale = 1.0;
    document.getElementById("h3-der").classList.remove("h3-hover");
    document.getElementById("izquierda").style.filter = "grayscale(0)";
});

hovizquierda.addEventListener("mouseover", function(){                      // PASAR MOUSE IZQUIERDA
    document.getElementById("izquierda").style.scale = 1.12;
    document.getElementById("h3-izq").classList.add("h3-hover");
    document.getElementById("h3-izq").style.scale = 1.0;
    document.getElementById("derecha").style.filter = "grayscale(0.6)";
});
hovizquierda.addEventListener("mouseout", function(){                       // SACAR MOUSE IZQUIERDA
    document.getElementById("izquierda").style.scale = 1.0;
    document.getElementById("h3-izq").classList.remove("h3-hover");
    document.getElementById("derecha").style.filter = "grayscale(0)";
});
 


var plhitbox = document.getElementById("playlogo-hitbox");

plhitbox.addEventListener("mouseover", function(){                                                          // HOVER BOTON PLAY
    document.getElementsByClassName("playlogo-wrapper")[0].classList.add("playlogo-hitboxhover");
    document.getElementById("playlogo").style.color = "gray";
    document.getElementById("playlogo").style.animationName = "playlogoanim";
    document.getElementById("start-grayfilter").style.backgroundColor = "rgb(50, 50, 50, 0.70)";
})

plhitbox.addEventListener("mouseout", function(){                                                          // UN-HOVER BOTON PLAY
    document.getElementsByClassName("playlogo-wrapper")[0].classList.remove("playlogo-hitboxhover");
    document.getElementById("playlogo").style.color = "white";
    document.getElementById("playlogo").style.animationName = "playlogoanim2";
    document.getElementById("start-grayfilter").style.backgroundColor = "rgb(40, 40, 40, 0.7)";
})

plhitbox.addEventListener("click", function(){                                                            // EMPEZAR JUEGO BOTON PLAY
    document.getElementById("start-grayfilter").style.opacity = "0";
    setTimeout(function(){
        document.getElementById("start-grayfilter").style.display = "none";
    }, 500); 

    document.getElementById("pregunta-wrapper").style.display = "block";
    document.getElementById("contador").style.display = "block";
})


hovizquierda.addEventListener("click",function(){
    if (correct == "izquierda"){
        contador += 1;
        document.getElementById("contador").innerHTML = contador;
    }
    else{
        document.getElementById("contador").innerHTML = contador
    }
})

hovderecha.addEventListener("click",function(){
    if (correct == "derecha"){
        contador += 1;
        document.getElementById("contador").innerHTML = contador;
    }
    else{
        document.getElementById("contador").innerHTML = contador
    }
})








// SWITCH CASES



class nivel{
    constructor(pregunta, izquierda, derecha, correccion, izquierdaFoto, derechaFoto){
        this.pregunta = pregunta;
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.correccion = correccion;
        this.izquierdaFoto = izquierdaFoto;
        this.derechaFoto = derechaFoto;

        this.info = `Celular marca ${this.marca} de color ${this.color}, con un peso de 
        ${this.peso} gramos,  una resolución de pantalla de ${this.resolucionPantalla}px,
         una resolución de cámara de ${this.resolucionCamara}mpx y ${this.memoriaRam}GB de memoria RAM. <br>`;
    }

    select(){
        document.getElementById("pregunta").innerHTML = this.pregunta;
        document.getElementById("h3-izq").innerHTML = this.izquierda;
        document.getElementById("h3-der").innerHTML = this.derecha;
        document.getElementById("izquierda").style.backgroundImage = `url(./opcionesImagenes/${this.izquierdaFoto})`
        document.getElementById("derecha").style.backgroundImage = `url(./opcionesImagenes/${this.derechaFoto})`
        correct = this.correccion;
    }

    verInfo(){
        document.write(this.info + "<br>");
    }
}


const caso1 = new nivel("¿Cuál es el main con el que más puntos de maestría tiene Volkah?","Viego","Kayn","izquierda","viego.jpg","kayn.jpg")
const caso2 = new nivel("¿Quién gana en un mano a mano?","Facha","Zasu","derecha","facha.png","zasu.png")
const caso3 = new nivel("¿Cuál skin posee un mayor valor en el mercado de CS:GO?","M4A1 HyperBeast","AWP Medusa","derecha","hyperbeast.jpg","medusa.jpg");
const caso4 = new nivel("")
console.log(caso2);
caso2.select();

/*const samsung = new celular("Samsung","gris",320,"1920x1080",23,4);
const motorola = new celular("Motorola","negro",293,"1920x1080",32,3);
const xiaomi = new celular("Xiaomi","verde",215,"2560x1440",44,6); */


var numero = Math.trunc(Math.random() * 3 + 1);

switch (numero){
    case 1:
        caso1.select();
        break;
    case 2:
        caso2.select();
        break;
    case 3:
        caso3.select();
        break;
    case 4:
        caso4.select();
        break;
    case 5:
        caso5.select();
        break;
}
