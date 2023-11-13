var hovderecha = document.getElementById("filtro-derecha");
var hovizquierda = document.getElementById("filtro-izquierda");
var correct = "izquierda";
var contador = 0;
var contadorRecord = 0;
var casos = [];


if(window.innerWidth <= 800){
    hovderecha.removeEventListener("mouseover", hoverDerecha);
    hovderecha.removeEventListener("mouseout", hoverOutDerecha);
    hovizquierda.removeEventListener("mouseover", hoverIzquierda);
    hovizquierda.removeEventListener("mouseout", hoverOutIzquierda);
}

else{

    hovderecha.addEventListener("mouseover",hoverDerecha); // PASAR MOUSE DERECHA
 function hoverDerecha(){
    document.getElementById("derecha").style.scale = 1.12;
    document.getElementById("h3-der").classList.add("h3-hover");
    document.getElementById("izquierda").style.filter = "grayscale(0.6)";
};
hovderecha.addEventListener("mouseout",hoverOutDerecha);                        // SACAR MOUSE DERECHA
  function hoverOutDerecha(){   
    document.getElementById("derecha").style.scale = 1.0;
    document.getElementById("h3-der").classList.remove("h3-hover");
    document.getElementById("izquierda").style.filter = "grayscale(0)";
};

hovizquierda.addEventListener("mouseover",hoverIzquierda);                  // PASAR MOUSE IZQUIERDA
 function hoverIzquierda(){ 
    document.getElementById("izquierda").style.scale = 1.12;
    document.getElementById("h3-izq").classList.add("h3-hover");
    document.getElementById("derecha").style.filter = "grayscale(0.6)";
};
hovizquierda.addEventListener("mouseout",hoverOutIzquierda);                       // SACAR MOUSE IZQUIERDA
 function hoverOutIzquierda(){
    document.getElementById("izquierda").style.scale = 1.0;
    document.getElementById("h3-izq").classList.remove("h3-hover");
    document.getElementById("derecha").style.filter = "grayscale(0)";
};

}





 


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
    document.getElementById("pregunta-wrapper").style.opacity = "1";
            document.getElementById("contador").style.opacity = "1";
            randomLevel();
})


hovizquierda.addEventListener("click", izquierdaClic);

function izquierdaClic(){
    if (correct == "izquierda"){
        contador += 1;
        document.getElementById("contador").innerHTML = contador;


        document.getElementById("document").style.backgroundColor = "green";


        document.getElementById("contador").style.animationName = "contadorCorrecto";
        setTimeout(function(){
            document.getElementById("contador").style.animationName = "contador";
        }, 700); 
        randomLevel();

        document.getElementById("document").style.backgroundColor = "green";
        document.getElementById("page").style.opacity = "0.5";
        setTimeout(function(){
            document.getElementById("page").style.opacity = "1";
        }, 500); 

        if (contadorRecord < contador){
            contadorRecord = contador;
            //console.log(document.getElementById("highscore-contador").innerHTML);
            document.getElementById("highscore-contador").innerHTML = contadorRecord;
        }


        //      ANIMACION APARICION NUEVA PREGUNTA

        document.getElementById("h3-izq").style.transitionDuration = "0s";
        document.getElementById("h3-izq").style.opacity ="0";
        setTimeout(function(){
            document.getElementById("h3-izq").style.transitionDuration = "1s";
            document.getElementById("h3-izq").style.opacity ="1";
        }, 600); 

        document.getElementById("h3-der").style.transitionDuration = "0s";
        document.getElementById("h3-der").style.opacity ="0";
        setTimeout(function(){
            document.getElementById("h3-der").style.transitionDuration = "1s";
            document.getElementById("h3-der").style.opacity ="1";
        }, 600); 

        document.getElementById("pregunta").style.transitionDuration = "0s";
        document.getElementById("pregunta").style.opacity ="0";
        setTimeout(function(){
            document.getElementById("pregunta").style.transitionDuration = "1s";
            document.getElementById("pregunta").style.opacity ="1";
        }, 200); 

        document.getElementById("pregunta-wrapper").style.transitionDuration = "0s";
        document.getElementById("pregunta-wrapper").style.opacity ="0";
        setTimeout(function(){
            document.getElementById("pregunta-wrapper").style.transitionDuration = "1s";
            document.getElementById("pregunta-wrapper").style.opacity ="1";
        }, 200); 

        document.getElementById("contador").style.transitionDuration = "0s";
        document.getElementById("contador").style.opacity ="0";
        setTimeout(function(){
            document.getElementById("contador").style.transitionDuration = "1s";
            document.getElementById("contador").style.opacity ="1";
        }, 200); 
        
    }
    else{
        contador = 0;
        document.getElementById("contador").innerHTML = contador
        document.getElementById("document").style.backgroundColor = "red";
        document.getElementById("page").classList.add("htmlshake")
        setTimeout(function(){
            document.getElementById("page").classList.remove("htmlshake")
        }, 500); 
        document.getElementById("contador").style.animationName = "contadorIncorrecto";
        setTimeout(function(){
            document.getElementById("contador").style.animationName = "contador";
        }, 1000); 

        document.getElementById("page").style.opacity = "0.7";
        document.getElementById("start-grayfilter").style.display = "flex";
        setTimeout(function(){
            document.getElementById("page").style.opacity = "1";
        }, 300); 
        setTimeout(function(){
            document.getElementById("start-grayfilter").style.opacity = "1";
            document.getElementById("pregunta-wrapper").style.opacity = "0";
            document.getElementById("contador").style.opacity = "0";
        }, 500); 
        setTimeout(function(){
            document.getElementById("start-grayfilter").style.opacity = "1";
            document.getElementById("pregunta-wrapper").style.display = "none";
            document.getElementById("contador").style.display = "none";
        }, 1000); 
    }
}

hovderecha.addEventListener("click",derechaClic);

function derechaClic(){
    if (correct == "derecha"){
        contador += 1;
        document.getElementById("contador").innerHTML = contador;


        document.getElementById("document").style.backgroundColor = "green";


        document.getElementById("contador").style.animationName = "contadorCorrecto";
        setTimeout(function(){
            document.getElementById("contador").style.animationName = "contador";
        }, 700); 
        randomLevel();

        document.getElementById("document").style.backgroundColor = "green";
        document.getElementById("page").style.opacity = "0.5";
        setTimeout(function(){
            document.getElementById("page").style.opacity = "1";
        }, 500); 

        if (contadorRecord < contador){
            contadorRecord = contador;
            //console.log(document.getElementById("highscore-contador").innerHTML);
            document.getElementById("highscore-contador").innerHTML = contadorRecord;
        }


        //      ANIMACION APARICION NUEVA PREGUNTA

        document.getElementById("h3-izq").style.transitionDuration = "0s";
        document.getElementById("h3-izq").style.opacity ="0";
        setTimeout(function(){
            document.getElementById("h3-izq").style.transitionDuration = "1s";
            document.getElementById("h3-izq").style.opacity ="1";
        }, 600); 

        document.getElementById("h3-der").style.transitionDuration = "0s";
        document.getElementById("h3-der").style.opacity ="0";
        setTimeout(function(){
            document.getElementById("h3-der").style.transitionDuration = "1s";
            document.getElementById("h3-der").style.opacity ="1";
        }, 600); 

        document.getElementById("pregunta").style.transitionDuration = "0s";
        document.getElementById("pregunta").style.opacity ="0";
        setTimeout(function(){
            document.getElementById("pregunta").style.transitionDuration = "1s";
            document.getElementById("pregunta").style.opacity ="1";
        }, 200); 

        document.getElementById("pregunta-wrapper").style.transitionDuration = "0s";
        document.getElementById("pregunta-wrapper").style.opacity ="0";
        setTimeout(function(){
            document.getElementById("pregunta-wrapper").style.transitionDuration = "1s";
            document.getElementById("pregunta-wrapper").style.opacity ="1";
        }, 200); 

        document.getElementById("contador").style.transitionDuration = "0s";
        document.getElementById("contador").style.opacity ="0";
        setTimeout(function(){
            document.getElementById("contador").style.transitionDuration = "1s";
            document.getElementById("contador").style.opacity ="1";
        }, 200); 
    }
    else{
        contador = 0;
        document.getElementById("contador").innerHTML = contador
        document.getElementById("document").style.backgroundColor = "red";
        document.getElementById("page").classList.add("htmlshake")
        setTimeout(function(){
            document.getElementById("page").classList.remove("htmlshake")
        }, 500); 
        document.getElementById("contador").style.animationName = "contadorIncorrecto";
        setTimeout(function(){
            document.getElementById("contador").style.animationName = "contador";
        }, 1000); 

        document.getElementById("page").style.opacity = "0.7";
        document.getElementById("start-grayfilter").style.display = "flex";
        setTimeout(function(){
            document.getElementById("page").style.opacity = "1";
        }, 300); 
        setTimeout(function(){
            document.getElementById("start-grayfilter").style.opacity = "1";
            document.getElementById("pregunta-wrapper").style.opacity = "0";
            document.getElementById("contador").style.opacity = "0";
        }, 500); 
        setTimeout(function(){
            document.getElementById("start-grayfilter").style.opacity = "1";
            document.getElementById("pregunta-wrapper").style.display = "none";
            document.getElementById("contador").style.display = "none";
        }, 1000); 
        
    

    }
}







// SWITCH CASES



class nivel{
    constructor(pregunta, izquierda, derecha, correccion, izquierdaFoto, derechaFoto){
        this.pregunta = pregunta;
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.correccion = correccion;
        this.izquierdaFoto = izquierdaFoto;
        this.derechaFoto = derechaFoto;
        this.aparecio = false;

    }

    select(){
        let numeroRandom = Math.round(Math.random());

        if(numeroRandom == 0){
            if(this.correccion == "derecha"){
                this.correccion = "izquierda";
            }
            else{
                this.correccion = "derecha";
            }
            document.getElementById("pregunta").innerHTML = this.pregunta;
            if(this.izquierda == ""){
                document.getElementById("h3-izq").style.display = "none";
            }
            else{
                document.getElementById("h3-izq").style.display = "unset";
                document.getElementById("h3-izq").innerHTML = this.derecha;
            }
            if(this.derecha == ""){
                document.getElementById("h3-der").style.display = "none";
            }
            else{
                document.getElementById("h3-der").style.display = "unset";
                document.getElementById("h3-der").innerHTML = this.izquierda;
            }
            document.getElementById("izquierda").style.backgroundImage = `url(./opcionesImagenes/${this.derechaFoto})`
            document.getElementById("derecha").style.backgroundImage = `url(./opcionesImagenes/${this.izquierdaFoto})`
        }

        else{
            document.getElementById("pregunta").innerHTML = this.pregunta;
            if(this.izquierda == ""){
                document.getElementById("h3-izq").style.display = "none";
            }
            else{
                document.getElementById("h3-izq").style.display = "unset";
                document.getElementById("h3-izq").innerHTML = this.izquierda;
            }
            if(this.derecha == ""){
                document.getElementById("h3-der").style.display = "none";
            }
            else{
                document.getElementById("h3-der").style.display = "unset";
                document.getElementById("h3-der").innerHTML = this.derecha;
            }
            document.getElementById("izquierda").style.backgroundImage = `url(./opcionesImagenes/${this.izquierdaFoto})`
            document.getElementById("derecha").style.backgroundImage = `url(./opcionesImagenes/${this.derechaFoto})`
        }
        correct = this.correccion;
    }
}


/*
casos.push(caso = new nivel("¿Cuál skin posee un mayor valor en el mercado de CS:GO?","M4A1 HyperBeast","AWP Medusa","derecha","hyperbeast.jpg","medusa.jpg"));
casos.push(caso = new nivel("¿Cuál de estos personajes se llama Fidel Fiestas?","Opción A","Opción B","izquierda","fidelfiestas.jpg","abracadaniel.webp"));
*/

casos.push(caso = new nivel("¿Cuál es la capital de Australia?","Sidney","Canberra","derecha","sidney.webp","canberra.jpg"));
casos.push(caso = new nivel("¿Cuál es el nombre del océano más grande del mundo?","Océano Pacífico","Océano Atlántico","izquierda","oceanopacifico.webp","oceanoatlantico.jpg"));
casos.push(caso = new nivel("¿Cuál es el continente más grande del mundo?","Asia","África","izquierda","asia.jpg","africa.webp"));
casos.push(caso = new nivel("¿Cuál de estos álbumes pertenece a la banda británica Coldplay?","Native","Parachutes","derecha","native.jpg","parachutes.jpg"));
casos.push(caso = new nivel("¿Cuál de estas canciones tiene más visitas en YouTube?","Everlong","Heart-Shaped Box","izquierda","everlong.jpg","heartshaped.jpg"));
casos.push(caso = new nivel("¿Quién fue el primer ser humano en orbitar la tierra?","Yuri Gagarin","Neil Armstrong","izquierda","yurigagarin.jpg","neilarmstrong.jpg"));
casos.push(caso = new nivel("¿Cuál es el río más largo de Norteamérica?","Río Colorado","Río Misisipi","derecha","riocolorado.jpg","misisipi.jpg"));
casos.push(caso = new nivel("¿En qué país se encuentra el monte de Machu Picchu?","Perú","México","izquierda","machupicchuperu.jpg","machupicchumexico.jpg"));
casos.push(caso = new nivel("¿Cómo se llama el perro de la familia Simpson?","Ayudante de Santa","Sabueso","izquierda","ayudantedesanta.jpg","sabueso.webp"));

casos.push(caso = new nivel("¿Cuál de estos lenguajes de programación se utiliza principalmente para el manejo de servidores de páginas web?","Java","PHP","derecha","java.png","php.jpg"));
casos.push(caso = new nivel("¿Qué es un diagrama de flujo?","Una representación gráfica de los pasos involucrados en un proceso de producción","Una herramienta para medir el rendimiento de un proceso industrial","izquierda","diagramadeflujo.png","diagramadeflujo2.webp"));
casos.push(caso = new nivel("¿Cuál de estos dispositivos es un controlador lógico programable utilizado para automatizar procesos industriales?","VFD","PLC","derecha","vfd.jpg","plc.jpg"));
casos.push(caso = new nivel("¿Qué tipo de ingeniería se enfoca en la producción y uso de fuentes de energía renovable?","Ingeniería Eléctrica","Ingeniería Ambiental","derecha","ingelectrica.jpg","ingambiental.jpg"));
casos.push(caso = new nivel("¿Cuál es la unidad de medida de la resistencia eléctrica?","Ohms","Amperios","izquierda","ohms.png","amperio.webp"));
casos.push(caso = new nivel("¿Cuál es el componente electrónico que se utiliza para almacenar energía en un circuito?","Inductor","Capacitor","derecha","inductor.jpg","capacitor.jpg"));
casos.push(caso = new nivel("¿En cuál de estas ramas de la mecánica se utiliza aceite a presión para movilizar cargas pesadas?","Neumática","Hidráulica","derecha","neumatica.jpeg","hidraulica.jpg"));

casos.push(caso = new nivel("¿De qué manera se mueve el caballo en el Ajedrez?","2x2","2x1","derecha","2x2movement.png","2x1movement.png"));
casos.push(caso = new nivel(`¿Qué famoso filósofo griego dijo la frase "Solo sé que no sé nada"?`,"Sócrates","Aristóteles","izquierda","socrates.jpg","aristoteles.jpg"));
casos.push(caso = new nivel(`¿Cuál es el animal que provoca más muertes humanas al año?`,"Serpientes","Mosquitos","derecha","serpiente.jpg","mosquito.jpg"));
casos.push(caso = new nivel(`¿Qué planeta tiene más lunas?`,"La Tierra","Venus","izquierda","latierra.jpg","venus.jpg"));
casos.push(caso = new nivel(`¿Cuál de estos astros es considerado un "Planeta Gaseoso"?`,"Mercurio","Neptuno","derecha","mercurio.jpg","neptuno.jpg")); 
casos.push(caso = new nivel(`¿Cuál es el país más pequeño del mundo?`,"Ciudad del Vaticano","Maldivas","izquierda","vaticano.jpg","maldivas.jpg")); 
casos.push(caso = new nivel(`¿Cuál es la capital de España?`,"Barcelona","Madrid","derecha","barcelona.jpg","madrid.jpg"));
casos.push(caso = new nivel(`¿Cuál es el país con más islas en todo el mundo?`,"Suecia","Australia","izquierda","suecia.jpg","australia.webp"));
casos.push(caso = new nivel(`En el idioma portugués, ¿Qué significa "menino"?`,"Niño","Gato","izquierda","niño.jpg","gato.jpg"));

// preguntas 3/10

casos.push(caso = new nivel(`¿Cuál de estos es un dispositivo mecánico que controla el flujo de un fluído en un conducto?`,"Válvula","Caldera","izquierda","valvula.jpg","caldera.jpg"));
casos.push(caso = new nivel(`¿Cuál de estos es un interruptor diferencial o disyuntor?`,"","","derecha","termomagnetica.webp","disyuntor.jpg"));
casos.push(caso = new nivel(`¿Cómo se llama el proceso de producción de células sanguíneas que, en la especie humana, se lleva a cabo en la médula ósea durante toda la vida?`,"Hemofilia","Hematopoyesis","derecha","hemofilia.jpg","hematopoyesis.png"));
casos.push(caso = new nivel(`¿Cuál de estas características del cuerpo humano es regulada principalmente por las glándulas sudoríparas en la piel?`,"La producción de melanina","La temperatura corporal","derecha","melanina.jpg","temperaturasudor.jpg"));
casos.push(caso = new nivel(`¿Cómo se le llama a la primera célula resultante de la unión del óvulo y el espermatozoide durante la fecundación?`,"Cigoto","Embrión","izquierda","cigoto.avif","embrion.jpg"));
casos.push(caso = new nivel(`¿Cuál de las siguientes imágenes representa mejor al proceso conocido como "mitosis"?`,"","","izquierda","mitosis.jpg","sueñorem.png"));
casos.push(caso = new nivel(`¿Qué estructura del ojo humano es responsable de enfocar la luz en la retina para lograr la mayor nitidez en la visión?`,"Cristalino","Coroides","izquierda","cristalino.jpg","coroides.jpeg"));
casos.push(caso = new nivel(`¿Qué edificio es la sede central de la "CIA", agencia de inteligencia de los EE.UU?`,"","","izquierda","sedecia.avif","pentagonousa.jpeg"));
casos.push(caso = new nivel(`¿Cuál de estos primates es un orangután?`,"","","derecha","gorila.jpg","orangutan.webp"));
casos.push(caso = new nivel(`¿Cuál de estas personas es la máxima autoridad en la república popular China?`,"","","izquierda","presidentechina.webp","presidentenorcorea.jpg"));

// preguntas 12/10

casos.push(caso = new nivel(`¿Cuál de estos destacados futbolistas es de nacionalidad polaca?`,"Robert Lewandowski","Mario Mandzukic","izquierda","lewandowski.jpg","mandzukic.jpg"));
casos.push(caso = new nivel(`¿Cuál de estos elementos es un pulverizador para fumigar?`,"","","derecha","pistolapintura.png","pulverizador.png"));
casos.push(caso = new nivel(`¿Qué tipo de medicamento suele recetar un médico para tratar específicamente los síntomas de alergias?`,"Antipirético","Antihistamínico","derecha","antipiretico.jpg    ","antihistaminico.jpg"));
casos.push(caso = new nivel(`¿Cuál de estas aves es un pelícano?`,"","","izquierda","pelicano.webp","grulla.jpg"));
casos.push(caso = new nivel(`¿Cuál de estos gases abunda más en la atmósfera de La Tierra?`,"Nitrógeno","Dióxido de Carbono","izquierda","nitrogeno.jpg","dioxidocarbono.webp"));
casos.push(caso = new nivel(`¿Quién escribió "Romeo y Julieta"?`,"Charles Dickens","William Shakespeare","derecha","charlesdickens.webp","shakespeare.jpg"));
casos.push(caso = new nivel(`¿Cuál es la montaña más alta del sistema solar?`,"Monte Olimpo","Monte Everest","izquierda","olympusmons.png","everest.avif"));
casos.push(caso = new nivel(`¿Cuál es el órgano más grande del cuerpo humano?`,"Piel","Pulmón","izquierda","piel.jpg","pulmon.jpg"));
casos.push(caso = new nivel(`¿Cuál es el proceso por el cual las plantas convierten la glucosa en energía?`,"Respiración Celular","Fotosíntesis","izquierda","respiracioncelular.jpg","fotosintesis.jpg"));
casos.push(caso = new nivel(`¿En qué país se encuentra la Gran Barrera de Coral, el arrecife de coral más grande del mundo?`,"México","Australia","derecha","mexicopais.jpg","australiapais.jpg"));
casos.push(caso = new nivel(`¿Cuál es el metal que se utiliza comúnmente en la fabricación de baterías recargables?`,"Litio","Cobre","izquierda","litio.jpg","cobre.jpeg"));
casos.push(caso = new nivel(`¿Quién fue el famoso científico que formuló la teoría de la relatividad?`,"Isaac Newton","Albert Einstein","derecha","isaacnewton.jpg","alberteinstein.jpeg"));
//casos.push(caso = new nivel(`¿Cuál de estas aves es un pelícano?`,"","","izquierda","pelicano.webp","grulla.jpg"));
//casos.push(caso = new nivel(`¿Cuál de estas aves es un pelícano?`,"","","izquierda","pelicano.webp","grulla.jpg"));
//casos.push(caso = new nivel(`¿Cuál de estas aves es un pelícano?`,"","","izquierda","pelicano.webp","grulla.jpg"));
//casos.push(caso = new nivel(`¿Cuál de estas aves es un pelícano?`,"","","izquierda","pelicano.webp","grulla.jpg"));

//console.log("Cantidad de preguntas: " + casos.length)

function randomLevel(){
    //var numero = casos.length - 1;
    var numero = Math.trunc(Math.random() * casos.length);

    if (casos[numero].aparecio == true){
        var aparecieron = casos.length;
        for (modelos in casos){
            if(casos[modelos].aparecio==true){
                aparecieron -= 1;
            }
            if(aparecieron == 0){
                /*
                document.getElementById("pregunta").innerHTML = "NO QUEDAN MÁS PREGUNTAS";
                hovderecha.removeEventListener("click", derechaClic);
                hovizquierda.removeEventListener("click", izquierdaClic);
                return
                */

                casos.forEach((caso)=>{
                    caso.aparecio = false;
                })
            }
        }
        randomLevel();
    }
    else{
        casos[numero].select();
        casos[numero].aparecio = true;
    }
}
randomLevel();

