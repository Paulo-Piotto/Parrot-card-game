let todasCartas = ["assets/bobrossparrot.gif", "assets/explodyparrot.gif", "assets/fiestaparrot.gif", "assets/metalparrot.gif", "assets/revertitparrot.gif", "assets/tripletsparrot.gif", "assets/unicornparrot.gif"];

let cartasNoJogo = [];

let numeroCartas = 0;
let fimDoJogo = 0;

let carta1;
let carta2;

let jogada = 1;
let jogadas = 0;

function comparador() { 
	return Math.random() - 0.5; 
}

function embaralhar(){
    for(let i=0; i < numeroCartas/2; i++){
        cartasNoJogo.push(todasCartas[i]);
    }

    for(let i=0; i < numeroCartas/2; i++){
        cartasNoJogo.push(todasCartas[i]);
    }

    cartasNoJogo.sort(comparador);
}



function geraCartas(numeroCartas){
    let main = document.querySelector("main");
    embaralhar();

    for(let i=0; i < numeroCartas; i++){
        main.innerHTML += `  <div class="carta" onclick="jogar(this)">
                                <div class="frente-carta">
                                    <img src="assets/front.png">
                                </div>
                                <div class="verso-carta some">
                                    <img class="gif" src="${cartasNoJogo[i]}">
                                </div>
                            </div>`
    }
}


while(numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0){
    numeroCartas = prompt("Escolha com quantas cartas quer jogar(4-14)");
}

geraCartas(numeroCartas);

function acabarJogo(jogadas){
    alert(`Você ganhou em ${jogadas} jogadas!`)
}

function jogar(carta){
    let verso = carta.querySelector(".verso-carta");
    let frente = carta.querySelector(".frente-carta");

    if(jogada === 1){
        frente.classList.add("some");
        verso.classList.remove("some");
        jogada++;
        jogadas++;
        carta1 = carta.querySelector(".gif");
    }else if(jogada === 2){
        frente.classList.add("some");
        verso.classList.remove("some");
        jogada--;
        jogadas++;
        carta2 = carta.querySelector(".gif");

        if(carta1.src !== carta2.src){
            let verso1 = carta1.parentNode;
            let verso2 = carta2.parentNode;
            let frente1 = carta1.parentNode.parentNode.querySelector(".frente-carta");
            let frente2 = carta2.parentNode.parentNode.querySelector(".frente-carta");
            

            setTimeout(function(){
                verso1.classList.add("some");
                verso2.classList.add("some");
                frente1.classList.remove("some");
                frente2.classList.remove("some");
            }, 1000);
        }else{
            fimDoJogo++;
        }
    }

    if(fimDoJogo === numeroCartas/2){
        setTimeout(acabarJogo, 100, jogadas);
    }

    console.log("jogadas = " + jogadas);
    console.log("fim do jogo = " + fimDoJogo);


}