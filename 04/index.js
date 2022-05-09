const usuarios = [
    {
        nome: "Danilo",
        idade: 32,
    },
    {
        nome: "weberte",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
    {
        nome: "Miguel",
        idade: 10
    }
];

for (const i of usuarios) {
    if (i.idade > 17) {
        i.maiorIdade = true;
    } else {
        i.maiorIdade = false;
    }
}
console.log(usuarios);