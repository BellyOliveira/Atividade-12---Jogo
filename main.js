let heroi = {
    nome: "Ravena",  
    vida: 50,
    força: 5,
    Magia: 50  
};
let desafio;
let desafio2;
let desafio3;
let opcao;

function exibirStatus() {
    console.log(`Vida: ${heroi.vida}, Força: ${heroi.força}, Recurso: ${heroi.Magia}`);
}

function rodada1() {
    console.log("Nova rodada! Prepare-se para o desafio!");
   
    desafio = prompt(`Escolha um número entre 1 e 10!`)
    if (desafio <= 5) {
        console.log("Você encontrou um inimigo!");
        heroi.vida -= 20;
        heroi.força -= 2;
    } else {
        console.log("Você encontrou um recurso!");
        heroi.Magia += 30;
    }
    exibirStatus();
    if (heroi.vida <= 0) {
        console.log("Você perdeu! Fim de jogo.");
    } else {
        console.log("Próxima rodada!");
    }
}

function rodada2() {
    console.log("Nova rodada! Prepare-se para o desafio!");
    let desafio2 = prompt(`Escolha um número entre 1 e 10!`)
    if (desafio2 <= 5) {
        console.log("Você encontrou um inimigo!");
        heroi.vida -= 20;
        heroi.força -= 2;
    } else {
        console.log("Você encontrou um recurso!");
        heroi.Magia += 30;
    }
    exibirStatus();
    if (heroi.vida <= 0) {
        console.log("Você perdeu! Fim de jogo.");
    } else {
        console.log("Próxima rodada!");
    }
}

function rodada3() {
    console.log("Nova rodada! Prepare-se para o desafio!");
   
    let desafio3 = prompt(`Escolha um número entre 1 e 10!`)
    if (desafio <= 5) {
        console.log("Você encontrou um inimigo!");
        heroi.vida -= 20;
        heroi.força -= 2;
    } else {
        console.log("Você encontrou um recurso!");
        heroi.Magia += 30;
    }
    exibirStatus();
    if (heroi.vida <= 0) {
        console.log("Você perdeu! Fim de jogo.");
        opcao=prompt("Deseja jogar novamente?\n(1)SIM (2)NÃO");
    } else {
        console.log("Você ganhou! Parabéns!");
        opcao=prompt("Deseja jogar novamente?\n(1)SIM (2)NÃO");
    }
}

function start(){
    do{
        console.log("Iniciando o jogo...");
        heroi.vida= 50;
        heroi.força= 5;
        heroi.Magia= 50;
        exibirStatus();
        rodada1();
        rodada2();
        rodada3();
    }while(opcao == 1);
}

