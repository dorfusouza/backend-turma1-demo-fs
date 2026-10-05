/**
 * DEMO 4/5 — A armadilha: campo PRIVADO (#) não vai para o JSON.
 * Rode:  node 04-campo-privado.js
 *
 * As classes do Arena-Connect usam #campos privados com getters, então essa
 * armadilha vale para elas também.
 */
class Livro {
    #titulo;
    #paginas;

    constructor(titulo, paginas) {
        this.#titulo = titulo;
        this.#paginas = paginas;
    }
    get titulo() { return this.#titulo; }
    get paginas() { return this.#paginas; }
    descrever() {
        return `"${this.#titulo}" tem ${this.#paginas} páginas`;
    }
}

const livro = new Livro('Dom Casmurro', 256);
console.log('livro.titulo (getter funciona) →', livro.titulo);

// SURPRESA: o JSON sai vazio. JSON.stringify só olha propriedades PRÓPRIAS do
// objeto; #campos privados e getters da classe não entram nessa conta.
console.log('\nJSON.stringify(livro) →', JSON.stringify(livro));

// Solução: montar à mão um objeto comum com o que queremos salvar...
const paraSalvar = { titulo: livro.titulo, paginas: livro.paginas };
const texto = JSON.stringify(paraSalvar);
console.log('Objeto comum montado  →', texto);

// ...e, ao carregar, passar os dados de volta pelo construtor.
const dados = JSON.parse(texto);
const reconstruido = new Livro(dados.titulo, dados.paginas);
console.log('\nReconstruído →', reconstruido.descrever());
