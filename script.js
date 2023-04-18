var hovderecha = document.getElementById("filtro-derecha");
var hovizquierda = document.getElementById("filtro-izquierda");

hovderecha.addEventListener("mouseover", function(){ // PASAR MOUSE DERECHA
    document.getElementById("derecha").style.scale = 1.12;
    document.getElementById("h3-der").classList.add("h3-hover");
    document.getElementById("h3-der").style.scale = 1.0;
    document.getElementById("izquierda").style.filter = "grayscale(0.6)";
});
hovderecha.addEventListener("mouseout", function(){     // SACAR MOUSE DERECHA
    document.getElementById("derecha").style.scale = 1.0;
    document.getElementById("h3-der").classList.remove("h3-hover");
    document.getElementById("izquierda").style.filter = "grayscale(0)";
});

hovizquierda.addEventListener("mouseover", function(){  // PASAR MOUSE IZQUIERDA
    document.getElementById("izquierda").style.scale = 1.12;
    document.getElementById("h3-izq").classList.add("h3-hover");
    document.getElementById("h3-izq").style.scale = 1.0;
    document.getElementById("derecha").style.filter = "grayscale(0.6)";
});
hovizquierda.addEventListener("mouseout", function(){   // SACAR MOUSE IZQUIERDA
    document.getElementById("izquierda").style.scale = 1.0;
    document.getElementById("h3-izq").classList.remove("h3-hover");
    document.getElementById("derecha").style.filter = "grayscale(0)";
});
 

