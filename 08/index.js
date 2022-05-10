const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];


for (let i of usuarios) {
    if (i.pets.length >= 1) {
        console.log(`sou ${i.nome} e tenho ${i.pets.length} pets.`)
    } else {
        console.log(`sou ${i.nome} e não tenho pets.`)
    }
}
