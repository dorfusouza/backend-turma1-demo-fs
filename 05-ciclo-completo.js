/**
 * DEMO 5/5 — O ciclo completo: carregar → mexer → salvar.
 * Rode ESTE arquivo várias vezes seguidas:  node 05-ciclo-completo.js
 * Cada execução acrescenta um livro, e o que foi salvo na vez anterior
 * continua lá — é isso que "persistência" quer dizer.
 *
 * Para recomeçar do zero, apague o arquivo biblioteca.json.
 */
const fs = require('fs');
const path = require('path');

const ARQUIVO = path.join(__dirname, 'biblioteca.json');

class Livro {
    #titulo;
    #paginas;
    constructor(titulo, paginas) {
        this.#titulo = titulo;
        this.#paginas = paginas;
    }
    get titulo() { return this.#titulo; }
    get paginas() { return this.#paginas; }
    descrever() { return `"${this.#titulo}" (${this.#paginas} páginas)`; }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    salvar() {
        const dados = {
            livros: this.livros.map(l => ({ titulo: l.titulo, paginas: l.paginas })),
        };
        fs.writeFileSync(ARQUIVO, JSON.stringify(dados, null, 2));
    }

    carregar() {
        // 1ª execução: o arquivo ainda não existe — começa vazio, sem erro.
        if (!fs.existsSync(ARQUIVO)) return;
        const dados = JSON.parse(fs.readFileSync(ARQUIVO, 'utf-8'));
        this.livros = dados.livros.map(l => new Livro(l.titulo, l.paginas));
    }
}

const biblioteca = new Biblioteca();
biblioteca.carregar();
console.log(`Ao abrir, a biblioteca tinha ${biblioteca.livros.length} livro(s).`);

const numero = biblioteca.livros.length + 1;
biblioteca.livros.push(new Livro(`Livro ${numero}`, 100 + numero * 10));
biblioteca.salvar();

console.log('Agora ela tem:');
biblioteca.livros.forEach(l => console.log('  -', l.descrever()));
