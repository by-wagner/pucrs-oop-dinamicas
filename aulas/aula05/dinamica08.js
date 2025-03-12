//Cópia rasa

function clone(obj) {
    let clone = {...obj};

    clone.nome = "Carlos";
    clone.endereco.cidade = "Rio de Janeiro";

    console.log("Objeto original:", obj);
    console.log("Objeto clonado:", clone);
}

let original = {nome: "Carolina", endereco: {cidade: "São Paulo"}};

clone(original);