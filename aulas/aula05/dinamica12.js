function obterEstatisticasEquipe(obj) {
    let integrantes = Object.entries(obj);

    let integranteMaisNovo = integrantes[0];
    let integranteMaisVelho = integrantes[0];

    let somaDasIdades = 0;

    integrantes.forEach(([nome, idade]) => {
        if (idade < integranteMaisNovo[1]) integranteMaisNovo = [nome, idade];
        if (idade > integranteMaisVelho[1]) integranteMaisVelho = [nome, idade];
        somaDasIdades += idade;
    });

    let numeroDeIntegrantes = integrantes.length;
    let idadeMediaDaEquipe = (somaDasIdades / numeroDeIntegrantes).toFixed(2);

    console.table([
        {
            "Descrição": "Integrante mais velho da equipe",
            "Resultado": integranteMaisVelho[0]
        },
        {
            "Descrição": "Integrante mais novo da equipe",
            "Resultado": integranteMaisNovo[0]
        },
        {
            "Descrição": "Média de idade da equipe",
            "Resultado": idadeMediaDaEquipe
        }
    ]);
}

let equipe = {
    'Luis': 35,
    'Cesar': 21,
    'Amanda': 24,
    'Carmem': 19
};

obterEstatisticasEquipe(equipe);