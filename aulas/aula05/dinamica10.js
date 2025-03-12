function analisarCliente(...saldos) {
    let dataAnalise = new Date().toLocaleDateString();

    let qtdAplicacoes = saldos.length;
    let media = saldos.reduce((total, valor) => total + valor, 0) / qtdAplicacoes;

    let resultadoAnalise = {
        dataAnalise,
        qtdAplicacoes,
        media,
        categoria: "",
        bonus: 0
    };

    if (qtdAplicacoes <= 3) {
        resultadoAnalise = { ...resultadoAnalise, categoria: "Destaque", bonus: 100 };
    } else if (qtdAplicacoes > 3 && qtdAplicacoes <= 5 && media >= 5000) {
        resultadoAnalise = { ...resultadoAnalise, categoria: "Destaque", bonus: 500 };
    } else if (qtdAplicacoes > 5 && media < 100000) {
        resultadoAnalise = { ...resultadoAnalise, categoria: "Destaque", bonus: 1000 };
    } else if (qtdAplicacoes > 5 && media >= 100000) {
        resultadoAnalise = { ...resultadoAnalise, categoria: "Gold", bonus: 5000 };
    }

    console.log(`Conta Analisada`);
    console.log(`Data da Análise: ${resultadoAnalise.dataAnalise}`);
    console.log(`Quantidade de Aplicações: ${resultadoAnalise.qtdAplicacoes}`);
    console.log(`Média: ${resultadoAnalise.media}`);
    console.log(`Categoria: ${resultadoAnalise.categoria}`);
    console.log(`Bônus: R$ ${resultadoAnalise.bonus}`);
    console.log("");
}

// Caso 1: Até 3 aplicações → Destaque, bônus de R$ 100,00
analisarCliente(2000, 3000, 4000);

// Caso 2: Entre 3 e 5 aplicações, média ≥ 5000 → Destaque, bônus de R$ 500,00
analisarCliente(5000, 7000, 8000, 9000);

// Caso 3: Mais de 5 aplicações, média < 100000 → Destaque, bônus de R$ 1000,00
analisarCliente(10000, 20000, 30000, 40000, 50000, 60000);

// Caso 4: Mais de 5 aplicações, média ≥ 100000 → Gold, bônus de R$ 5000,00
analisarCliente(150000, 200000, 120000, 130000, 140000, 160000);