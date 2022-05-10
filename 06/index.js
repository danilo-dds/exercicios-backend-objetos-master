const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
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
        idade: 12,
    },
    {
        nome: "Danilo",
        idade: 32,
    }
]
const jovens = [];
let indiceJovens = 0;
const adultos = [];
let indiceAdultos = 0;

for (let usuario of usuarios) {
    if (usuario.idade > 17) {
        adultos[indiceAdultos] = usuario;
        indiceAdultos++
    } else {
        jovens[indiceJovens] = usuario;
        indiceJovens++
    }
}
console.log(adultos, jovens);