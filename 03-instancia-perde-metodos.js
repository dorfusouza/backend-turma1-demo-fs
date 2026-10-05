/**
 * DEMO 3/5 — O que volta do JSON.parse NÃO é uma instância da classe.
 * Rode:  node 03-instancia-perde-metodos.js
 */
class Livro {
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
    descrever() {
        return `"${this.titulo}" tem ${this.paginas} páginas`;
    }
}

const original = new Livro('Dom Casmurro', 256);
console.log('Original      →', original.descrever());

// Ida e volta pelo JSON (sem arquivo, só para ver o efeito).
const texto = JSON.stringify(original);
console.log('Texto JSON    →', texto);

const cru = JSON.parse(texto);
console.log('\nDepois do parse:');
console.log('  cru.titulo            =', cru.titulo, '(os DADOS voltaram)');
console.log('  typeof cru.descrever  =', typeof cru.descrever, '(o MÉTODO não voltou)');
console.log('  cru instanceof Livro  =', cru instanceof Livro);

// Solução: reconstruir a instância, passando os dados lidos pelo construtor.
const reconstruido = new Livro(cru.titulo, cru.paginas);
console.log('\nReconstruído  →', reconstruido.descrever());
console.log('  reconstruido instanceof Livro =', reconstruido instanceof Livro);
