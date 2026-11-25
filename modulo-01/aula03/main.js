let num = 0;

num += 1;
console.log("Agora o número é ", num);

let msg = "Lista de Compras: ";
msg += "Arroz, \nFeijão, \nMacarrão, \nLeite, \nOvos";
console.log(msg);


//atividadi 1 do classroom

function verificarAprovacaoLAEC() {
    const valoresConceito = { "A": 4, "B": 3, "C": 2, "D": 1 };
    let somaConceitos = 0;
    let somaFrequencias = 0;

    for (let i = 1; i <= 3; i++) {

        let conceito = prompt(`Digite o conceito do ${i}º trimestre (A, B, C ou D):`).toUpperCase().trim();
        let frequencia = parseFloat(prompt(`Digite a frequência do ${i}º trimestre (0 a 100):`));

        if (!valoresConceito[conceito] || isNaN(frequencia) || frequencia < 0 || frequencia > 100) {
            alert("Dados inválidos! Reinicie e insira conceitos de A a D e frequência entre 0 e 100.");
            return;
        }

        somaConceitos += valoresConceito[conceito];
        somaFrequencias += frequencia;
    }

    const mediaConceito = somaConceitos / 3;
    const mediaFrequencia = somaFrequencias / 3;

    let conceitoFinal;
    if (mediaConceito >= 3.5) {
        conceitoFinal = "A";
    } else if (mediaConceito >= 2.5) {
        conceitoFinal = "B";
    } else if (mediaConceito >= 1.5) {
        conceitoFinal = "C";
    } else {
        conceitoFinal = "D";
    }

    const aprovado = (conceitoFinal !== "D") && (mediaFrequencia >= 75);
    const status = aprovado ? "APROVADO(A)" : "REPROVADO(A)";

    alert(
        `--- Resultado Final em LAEC ---\n` +
        `Conceito Final: ${conceitoFinal}\n` +
        `Frequência Média: ${mediaFrequencia.toFixed(1)}%\n` +
        `Situação: ${status}`
    );
}

verificarAprovacaoLAEC();
