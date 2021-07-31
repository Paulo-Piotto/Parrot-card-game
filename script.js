let todasCartas = ["assets/bobrossparrot.gif", "assets/explodyparrot.gif", "assets/fiestaparrot.gif", "assets/metalparrot.gif", "assets/revertitparrot.gif", "assets/tripletsparrot.gif", "assets/unicornparrot.gif"]

function comparador() { 
	return Math.random() - 0.5; 
}



function geraCartas(numeroCartas){
    let main = document.querySelector("main");

    let cartasNoJogo = [];

    for(let i=0; i < numeroCartas; i++){
        main.innerHTML += `  <div class="carta">
                                <div class="frente-carta">
                                    <img src="assets/front.png">
                                </div>
                                <div class="verso-carta">
                                    <img src="assets/bobrossparrot.gif">
                                </div>
                            </div>`
    }
}


let numeroCartas = 0;

while(numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0){
    numeroCartas = prompt("Escolha com quantas cartas quer jogar(4-14)");
    console.log(numeroCartas);
}


geraCartas(numeroCartas);