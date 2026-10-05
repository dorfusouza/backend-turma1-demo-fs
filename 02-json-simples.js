/**
 * DEMO 2/5 — Guardar um OBJETO em arquivo: JSON.stringify e JSON.parse.
 * Rode:  node 02-json-simples.js     (depois abra livro.json no editor)
 */
const fs = require('fs');
const path = require('path');

const ARQUIVO = path.join(__dirname, 'livro.json');

const livro = { titulo: 'Dom Casmurro', paginas: 256, lido: false };

// Objeto → texto JSON. O 2 é só a indentação (deixa o arquivo legível).
const texto = JSON.stringify(livro, null, 2);
console.log('Texto que vai para o arquivo:\n' + texto);
fs.writeFileSync(ARQUIVO, texto);

// Arquivo → texto → objeto de novo.
const lido = JSON.parse(fs.readFileSync(ARQUIVO, 'utf-8'));
console.log('\nDe volta como objeto:', lido);
console.log('lido.titulo =', lido.titulo);
console.log('Ficou igual ao original?', JSON.stringify(lido) === JSON.stringify(livro));
