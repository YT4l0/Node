const player1 = {
  NOME: "Brunin",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 5,
  PODER: 5,
  PONTOS: 0,
};
const player2 = {
  NOME: "Marcelo preto",
  VELOCIDADE: 5,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

async function getBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";

      break;

    case random < 0.66:
      result = "CURVA";
      break;

    default:
      result = "CONFRONTO";
  }
  return result;
}

async function logRollResult(characterName, block, diceResult, atribute) {
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${atribute} =
    ${diceResult + atribute} `);
}

async function playRaceEngine(character1, character2) {
  for (let i = 1; i <= 5; i++) {
    console.log(`🏁Rodada ${i}`);

    let block = await getBlock();
    console.log(`Bloco: ${block}`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "Velocidade",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        "Velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }
    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "MANOBRABILIDADE",
        diceResult1,
        character1.MANOBRABILIDADE
      );

      await logRollResult(
        character2.NOME,
        "MANOBRABILIDADE",
        diceResult2,
        character2.MANOBRABILIDADE
      );
    }
    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou ${character2.NOME} 🥊🥊`);

      await logRollResult(
        character1.NOME,
        "Poder",
        diceResult1,
        character1.PODER
      );

      await logRollResult(
        character2.NOME,
        "Velocidade",
        diceResult2,
        character2.PODER
      );

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(
          `${character1.NOME} venceu ${character2.NOME} perdeu 1 ponto`
        );
        character2.PONTOS--;
      }

      if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(
          `${character2.NOME} venceu ${character1.NOME} perdeu 1 ponto`
        );
        character1.PONTOS--;
      }

      console.log(
        powerResult2 === powerResult1
          ? "confronto empatado! Nenhum ponto foi perdido"
          : ""
      );
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    } else if (character1.PONTOS === character2.PONTOS) {
      console.log(`${character1.NOME} empatou com ${character2.NOME}`);
    }
    console.log(
      "----------------------------------------------------------------"
    );
  }
}

 async function declareWinner(character1, character2) {
  console.log("Reusltado final");
  console.log(`${character1.NOME}: ${character1.PONTOS} pontos`);
  console.log(`${character2.NOME}: ${character2.PONTOS} pontos`);

  if(character1.PONTOS > character2.PONTOS) {

    console.log(`\n${character1.NOME} venceu a corrida! voa mlk`)

  }else if(character2.PONTOS > character1.PONTOS) {

    console.log(`\n${character2.NOME} venceu a corrida! voa mlk`)

  }else{
    console.log("empatou essa porraa")
  }


  
 }

(async function main() {
  console.log(
    `🏁🟢 corrida entre os corredores ${player1.NOME} e ${player2.NOME}`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})(); //função auto invocave
